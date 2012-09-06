<?php
namespace Jaf;
/**
 * URI 路由
 */
class Route_Uri implements Route_Interface {
	/**
	 * URI 路由匹配
	 * 路由对 action 的处理,优先级为
	 * 1.mca 中直接定义 action
	 * 2.mca 中 matchKeys 和 matchTo 定义的匹配存储 action
	 * 3.客户端指定 action 参数 a
	 * @param  String $match    路由定义中的key,根据格式
	 *  |String| or ;String;	正则匹配,支持参数重写
	 *  包含%		sscanf 格式匹配,支持参数重写
	 *  String		静态全等匹配
	 * @param  array  $mca      包含 module,controller,action的路由定义
	 *  如需要参数重写,可以定义
	 *  array matchKeys 参数名,按次序对应 $match 匹配到的值
	 *  string matchTo	设定参数名存入的位置
	 *  	默认 params
	 *   	''   $mca
	 *    	其他 params[$matchTo]
	 *  integer matchNull 参数重写时是否运行参数为 null,可以设置 matchNull => 1 允许参数为空,否则匹配失败
	 * @param  array $pathinfo 经由 Jaf::pathInfo 对 URI 进行的 pathinfo 分析
	 * @param  array $params   客户端传入的参数
	 * @return Request_Model   匹配成功返回 Request_Model 实例,包含 module,controller,action,params (mcap)信息
	 */
	public static function match ( $match, array $mca,array $pathinfo,array $params ){
		$method = ($match[0]==='|' or $match[0]===';') ? 'regex' :
			(strpos($match, '%')>0 ? 'sscanf' : '==' );
		if($mca['post']){
			if(!$_POST) return;
		}
		$uri=$pathinfo['path'];
		switch ( $method ) {
			case '==':
				if( $uri!==$match )
					return;
				$a=false;
				break;
			case 'sscanf':
				//sscanf 匹配失败也会返回最后元素为 null 的数组
				$a=sscanf($uri ,$match);
				if(-1===$a or !$a or empty($mca['matchNull']) and null===$a[count($a)-1])
					return;
				break;
			case 'regex':
				if(!preg_match($match,$uri,$a ) ){
					return;
				}
				array_shift($a);
				break;
		}
		$mca['match']=$match;
		$mca['params']=$params;
		/**
		 * 路由对 action 的处理,优先级为
		 * 1.mca 中直接定义 action
		 * 2.mca 中 matchKeys 和 matchTo 定义的匹配存储 action
		 * 3.客户端指定 action 参数 a
		 */
		$actionName=$mca['action'];
		if( !$actionName and is_string($params['a']) )
			$mca['action']=$params['a'];		
		if(!$a ){
			return Request_Model::newInstance($mca);
		}
		$keys=[];
		if($mca['matchTo']===''){
			$matchTo=&$mca;
		}elseif(is_string($mca['matchTo'])){
			//存储位置不是 $mca ,可以覆盖action这个名字
			$actionName='';
			if( !is_array($mca['params'][$mca['matchTo']]) )
				$mca['params'][$mca['matchTo']]=[];
			$matchTo=&$mca['params'][$mca['matchTo']];
		}else{
			//存储位置不是 $mca ,可以覆盖action这个名字
			$actionName='';
			$matchTo=&$mca['params'];
		}
		if(is_array($mca['matchKeys'])){
			$keys=$mca['matchKeys'];
		}else{
			$keys=array_keys($a);
		}
		//对应Uri匹配,不应该出现空参数
		$null=false;
		foreach ($keys as $idx => $key) {
			//防止覆盖 mca 中定义的 action
			if($key === null or $actionName and $key==='action') continue;
			if($a[$idx]===null)
				$null=true;
			$matchTo[$key]=$a[$idx];
		}
		//matchNull是否允许出现 null 参数
		if($null and empty($mca['matchNull']))
			return;
		return Request_Model::newInstance($mca);
	}
}