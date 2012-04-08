<?php
$yaf=[
'Application',
'Bootstrap_Abstract',
'Dispatcher',
'Loader',
'Request_Abstract',
'Request_Http',
'Request_Simple',
'Response_Abstract',
'Response_Http',
'Response_Cli',
'Controller_Abstract',
'Action_Abstract',
'Config_Abstract',
'Config_Ini',
'Config_Simple',
'View_Simple',
'Router',
'Route_Static',
'Route_Simple',
'Route_Supervar',
'Route_Rewrite',
'Route_Regex',
'Route_Map',
'Plugin_Abstract',
'Registry',
'Session',
'Exception',
'Exception_StartupError',
'Exception_RouterFailed',
'Exception_DispatchFailed',
'Exception_LoadFailed',
'Exception_LoadFailed_Module',
'Exception_LoadFailed_Controller',
'Exception_LoadFailed_Action',
'Exception_LoadFailed_View',
'Exception_TypeError',
	];
$jaf=[];
foreach($yaf as $cs){
	$mc=new ReflectionClass('Yaf_'.$cs);
	$jaf[$cs]=[];
	$class=($mc->isFinal()?'final ':'').($mc->isAbstract()?'abstract ':''). 'class ';
	$p=str_replace('Yaf_','',$mc->getParentClass()?$mc->getParentClass()->name:'');
	$jaf[$cs]['extends']=$p;
	$p=($p?' extends '.$p:'');
	$if=[];
	foreach($mc->getInterfaces() as $i){
		$if[]=$i->name;
	}
	$if=implode(',',$if);
	$if=$if?' implements '.$if:'';
	$jaf[$cs]['class']=$class.str_replace('Yaf_','',$cs) . $p . $if;
	pre($jaf[$cs]['class'].' {');

	$as=$mc->getProperties();
	foreach ($as as $a){
		$str=ReflectionProperty::export($a->class,$a->name,1);
		$str="\t".trim(fixProperty($str));
		$jaf[$cs][]=$str;
		pre($str);
	}
	$as=$mc->getMethods();
	foreach ($as as $a){
		$str=ReflectionMethod::export($a->class,$a->name,1);
		$str="\t".trim(fixMethod($str));
		$jaf[$cs][]=$str;
		pre($str);
	}
	pre('}');
}
echo '=================';
foreach($jaf as $c=>&$v){
	$ex=$v['extends'];
	$p=$jaf;
	while($ex){
		//method_exists
		if(isset($jaf[$ex]) and $jaf[$ex]['extends']!=$ex) {
			$p=$jaf[$ex];
			$ex=$p['extends'];
			$v=array_diff($v,$p);
		}else{
			foreach ($v as $k=>$mn){
				if($k!='class' and $k!='extends' and method_exists($ex,$mn))
					unset($v[$k]);
			}
			break;
		}
	}
	if($v['extends']){
		//$v=array_diff($v,$jaf[$v['extends']]);
	}
	pre($v['class']." {\n".implode("\n",array_slice($v,2))."\n}\n");
}

function fixProperty($str){
	return preg_replace(array('#<.+>#','#.*\[(.*)\]#'),array('','$1;'),$str);
}
function fixMethod($str){
	return preg_replace(
	array(
		'#(<.+>)#',
		'#Method \[(.*)\] \{([^\{]*\{)?\n#m',
		'|Parameter #.+\[.*(\$\S*)(\s*\]\n)|',
		'|\}\s*}|',
		'|(,\s+\))|',
		'|(\S+)\s+|',
		'|(, \$\.\.\.)|',
		'|\(\}|','| method |'
	),
	array(
		'',
		'$1(',
		'$1,',
		'){}',
		')',
		'$1 ',
		' /* $1 */',
		'(){}',' function '
	),$str);
}
/**
 * 调试用pre输出
 */
function pre()
{
  $args=func_num_args()?func_get_args():array($GLOBALS);
  echo '<pre>';
  foreach ($args as $value) {
    echo PHP_EOL;
    echo htmlspecialchars( print_r($value,1) );
  }
  echo '</pre>';
}