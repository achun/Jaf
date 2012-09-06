<?php
/**
 * 通过 PHP Reflection 在运行期生成脚本文档
 * Jaf_RDocument 默认按目录结构得到树状结构
 * @example (new Jaf_RDocument())->process();
 * @author achun
 * @copyright 2012
 */
class Jaf_RDocument {
	/**
	 * 处理后的结果缓存
	 * @var array
	 */
	protected $document = [];
	/**
	 * ReflectionFunction 处理队列
	 * @var array
	 */
	protected $functions 	= [];
	
	/**
	 * ReflectionClass 处理队列
	 * @var array
	 */
	protected $classes 	= [];
	
	/**
	 * 构造
	 * @param $loadUser default true 是否自动载入用户自定义Class和function
	 */
	public function __construct($loadUser=true) {
		if($loadUser)
			$this->loadUser();
	}

	/**
	 * 默认载入处理队列
	 * 把所有用户定义的 class 和 function 载入到处理队列
	 * @return $this
	 */
	public function loadUser() {
		$this->functions = [];
		$this->classes = [];
		foreach (get_declared_classes() as $class) {
			$c = new ReflectionClass($class);
			if ($c->isUserDefined()) {
				$this->classes[] = $c;	
			}
		}
		foreach (get_defined_functions()['user'] as $func) {
			$this->functions[] = new ReflectionFunction($func);
		}
		return $this;
	}
	/**
	 * 以 array_filter 回调函形式过滤 $classes 队列
	 * @param  callable $callback 回调函数
	 * @return $this
	 */
	public function filterClasses(callable $callback){
		$this->classes = array_filter($this->classes,$callback);
		return $this;
	}
	/**
	 * 以 array_filter 回调函形式过滤 $functions 队列
	 * @param  callable $callback 回调函数
	 * @return $this
	 */
	public function filterFunctions(callable $callback){
		$this->functions = array_filter($this->functions,$callback);
		return $this;
	}
	/**
	 * 处理所有或者指定队列到数组数据
	 * @note 会使用缓存数据
	 * @todo process() or process('f','c') or process('c','f') 总之和参数次序无关
	 *    f = functions   
	 *    c = classes
	 *    注意 $document 缓存的影响
	 * @return $this
	 */
	public function process() {
		$args=func_get_args();
		if(!$args or in_array('c', $args))
			$this->processClasses();
		if(!$args or in_array('f', $args))
			$this->processFunctions();
		return $this->document;
	}
	/**
	 * 返回 $document 数组
	 * @return array
	 */
	public function get(){
		return $this->document;
	}
	/**
	 * 处理 $classes 队列到数组数据
	 * @note 会使用缓存数据
	 * @param boolean $sort default true 是否对类名进行排序
	 * @return array
	 */
	public function processClasses( $sort = true ) {
		if($this->document['Classes'])
			return $this->document['Classes'];
		$rets=[];
		foreach($this->classes as $class) {
			$className=$class->getName();
			$ret=[];
			$ret['namespace'] = $class->getNamespaceName();
			$ret['Comment'] = $this->parseComment($class);
			$ret['Modifiers'] =Reflection::getModifierNames($class->getModifiers());
			$ret['name'] = $class->getShortName();
			$ret['extends']=$this->getExtends($class);
			$ret['Implements']=$this->getImplements($class);
			$ret['Traits']=$class->getTraitNames();
			$ret['filename']=$this->getFileName($class);
			$ret['Lines']=$this->getAtLine($class);
			$ret['Properties']=[];
			//属性处理
			foreach($class->getProperties() as $prop) {
				//跳过继承的属性
				if($prop->getDeclaringClass()->getName()!=$className) continue;
				$p = [];
				$p['Comment'] = $this->parseComment($prop);
				$p['Modifiers'] =Reflection::getModifierNames($prop->getModifiers());
				$p['name'] = $prop->getName();
				$ret['Properties']['$'.$p['name']] = $p;
			}
			$ret['Methods']=[];
			//方法处理
			foreach($class->getMethods() as $method) {
				//跳过继承的属性
				if($method->getDeclaringClass()->getName()!=$className) continue;
				$p = [];
				$p['Comment'] = $this->parseComment($method);				
				$p['Modifiers'] =Reflection::getModifierNames($method->getModifiers());
				$p['name'] = $method->getName();
				$p['Lines']=$this->getAtLine($method);				
				$p['Parameters'] = $this->formatParameters($method);
				$ret['Methods'][$p['name']] = $p;
			}
			$rets[$className]=$ret;
		}
		if($sort) ksort($rets);
		return $this->document['Classes']=$rets;
	}
	/**
	 * 处理 $functions 队列到数组数据
	 * @note 会使用缓存数据
	 * @param boolean $sort default true 是否对函数名进行排序
	 * @return array
	 */
	public function processFunctions( $sort = true ) {
		if($this->document['Functions'])
			return $this->document['Functions'];
		$rets=[];
		foreach($this->functions as $funs) {
			$ret=[];
			$ret['namespace'] = $funs->getNamespaceName();
			$ret['Comment'] = $this->parseComment($funs);
			$ret['name'] = $funs->getName();
			$ret['filename']=$this->getFileName($funs);
			$ret['Lines']=$this->getAtLine($funs);
			$ret['Parameters'] = $this->formatParameters($funs);
			$rets[$funs->getName()]=$ret;
		}
		if($sort) ksort($rets);
		return $this->document['Functions']=$rets;
	}

	/**
	 * 解析 Comment
	 * @param  ReflectionClass|ReflectionFunctionAbstract|ReflectionProperty $item
	 * @return array
	 */
	protected function parseComment($item){
		$comment= $item->getDocComment();
		$comment = str_replace("\r", '', $comment);		
		$comment= trim(preg_replace(array('#^/\*+\s*$#m','#[^\n]*\*+/$#m','#[^\n]*\*+\s*#m'), '', $comment));
		$comment =explode ("\n",$comment);
		if(!$comment) return [];
		$summary='';
		$descriptions=[];
		$params=[];
		$key='';
		foreach ($comment as $cmt) {
			if(!$cmt) continue;
			if(0===strpos($cmt,'@')){
				$pos=strpos($cmt,' ');
				$key=substr($cmt,0,$pos);
				if(!isset($params[$key]))
					$params[$key]=[];
				$params[$key][] =substr($cmt,$pos+1);
				continue;
			}
			if($key){
				$cnt=count($params[$key])-1;
				$params[$key][$cnt] .="\n".$cmt;
				continue;
			}
			if(!$summary){
				$summary=$cmt;
				continue;
			}
			$descriptions[]=$cmt;
		}
		$ret=['summary'=>$summary,'descriptions'=>implode ("\n",$descriptions)];
		$ret=array_merge($ret,$params);
		return $ret; 
	}
	/**
	 * 获取父类名
	 * @return string|null
	 */
	protected function getExtends( ReflectionClass $class){
		$pc=$class->getParentClass();
		if($pc){
			return $pc->getName();
		}
		return;
	}
	/**
	 * 获取类继承接口
	 * @return array
	 */	
	protected function getImplements( ReflectionClass $class){
		return $class->getInterfaceNames();
	}
	/**
	 * 获取函数或类方法的参数定义
	 * @param ReflectionParameter $params
	 * @return array 由参数部分完整语句组成
	 */
	protected function formatParameters( ReflectionFunctionAbstract $metod) {
		$args = [];
		foreach($metod->getParameters() as $param) {
			$arg='';
			if($param->isOptional()) {
				//optional 可选
				$arg=preg_replace('|.*<optional>(.*)\]|','[$1]',$param->__toString ());
			} else {
				//required 期望
				$arg=preg_replace('|.*<required>(.*)\]|','$1',$param->__toString ());
			}
			$args['$'.$param->getName()] = $arg;
		}
		return $args;
	}
	/**
	 * 获取函数或者类所在的文件路径
	 * @param  ReflectionClass|ReflectionFunction $item
	 * @return string
	 */
	protected function getFileName($item){
		return $item->getFileName();
	}
	/**
	 * 获取函数或者类所在的文件开始行,结束行
	 * @param  ReflectionClass|ReflectionFunctionAbstract $item
	 * @return array 包含2个单元,开始行和结束行
	 */	
	protected function getAtLine($item){
		return [$item->getStartLine(),$item->getEndLine()];
	}
}
