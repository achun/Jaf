<?php
namespace Jaf;
/**
 * ini 文件操作
 * 文件不存在自动建立文件
 * 支持行尾注释,不分割 section 到多维数组
 */
class Config_Ini implements Config_Interface {
	use Trait_Overload;
	protected $_autoSave=1;
	protected $_comments=[];//注释
	protected $_inicomments='';//整个ini文件的注释
	protected $_origin=[];//原始格式值
	protected $_readonly =true;
	protected $_inifile;
	/**
	 * 构造
	 * @param string $inifile ini全路径文件名
	 */
	public function __construct ( $inifile ){
		if(!is_file($inifile)){
			$pi = \Jaf::pathInfo($inifile);
			if(mkdir($pi['path'],0777,1))
				touch($inifile);
		}
		if(is_file($inifile) and is_readable($inifile)){
			$this->_inifile = $inifile;
			$this->_readonly = !is_writable($inifile);
			self::_iniLoad($inifile);
		}else{
			throw new Exception("文件不可读:".$inifile );
		}
	}
	/**
	 * 返回绑定的ini文件全路径
	 * @return string
	 */
	public function getFilePath(){
		return $this->_inifile;
	}
	/**
	 * 保存原始格式数据到文件
	 * @param  null|string $to 保存或另存
	 * @return mixed 失败返回false,成功返回文件字节数
	 */
	public function save( $to ){
		if(!is_file($to)){
			$pi = \Jaf::pathInfo($to);
			if(mkdir($pi['path'],0777,1))
				touch($to);
		}
		if(!is_file($inifile) or !is_writable($inifile))
			return false;
		return $this->_writeFile($this->_origin,$to);
	}
	/**
	 * 保存解析数据到文件
	 * @param  null|string $to 保存或另存
	 * @return mixed 失败返回false,成功返回文件字节数
	 */
	public function saveIni( $to ){
		if(!is_file($to)){
			$pi = \Jaf::pathInfo($to);
			if(mkdir($pi['path'],0777,1))
				touch($to);
		}
		if(!is_file($inifile) or !is_writable($inifile))
			return false;
		return $this->_writeFile($this->__get(),$to);
	}
	/**
	 * 获取原始数据
	 * @note 解析后的数据可以直接$this->name
	 * @param  string|null $key
	 *         null   返回整个原始值
	 *         string 返回 $section 中 $key 的值
	 * @param  string|null $section 段
	 * @return mixed
	 */
	public function get( $key ,$section){
		if(!$key) return $this->_origin;
		if($section){
			if(!isset($this->_origin[$section])) return;
			return $this->_origin[$section][$key];
		}
		return $this->_origin[$key];
	}
	/**
	 * 设置原始数据
	 * @note 解析后的数据可以直接$this->name,缺少数据安全性检查
	 * @param  string $key
	 * @param  scalar 标量 $value
	 * @param  string|null $section
	 * @return $value
	 */
	public function set( $key ,$value,$section){
		if(!$key or !is_scalar($value) ) return;
		if($section){
			if(!isset($this->_origin[$section]))
				$this->_origin[$section]=[];
			return $this->_origin[$section][$key] = $value;
		}
		return $this->_origin[$key]=$value;
	}
	/**
	 * 设置单行尾注释
	 * @param  string $key
	 * @param  string $comment
	 * @param  string|null $section
	 * @return $comment
	 */
	public function comment($key ,$comment,$section){
		if(!$key or !is_string($comment)) return;
		$comment = preg_replace('#\n|\r#','',$comment);
		if($section){
			if(!isset($this->_comments[$section]))
				$this->_comments[$section]=[];
			return $this->_comments[$section][$key] = $comment;
		}
		return $this->_comments[$key];
	}
	public function readonly (){
		return $this->_readonly;
	}
	/**
	 * 返回解析后的数据
	 * @return array
	 */
	public function toArray (){
		return $this->__get();
	}
	/**
	 * ini WRITE
	 * __comments,__value 风格写数据总是写 __value 的数据
	 * 这样可以兼容常量定义
	 * 合并多维数组到 section
	 */
	protected static function _writeFile(array $ini,$filename) {
	    $new=array();
	   	self::_mergeSection($ini,$new,'');
		$string = '';
		if($this->_inicomments){
			$string .=';' . preg_replace(["#(\n|\r)#","#\n;\n#"], ["\n;","\n"], $this->_inicomments);
		}
	    $comments=$this->_comments;
	    foreach($ini as $section=>$values) {
	        if (!is_array($values)) {
				$string .= $section .'='. self::_iniValue($values) . ';'.$comments[$section]."\n";
	        }else{
	        	$string .= '['.$section."]" . ';'.$comments[$section]."\n";
	        	foreach ($values as $key => $value) {
	        		$string .= $key .'='. self::_iniValue($value) . ';'.$comments[$section.'.'.$key]."\n";
	        	}
	    	}
	    }
	    if(!$filename)
	        return $string;
	    return file_put_contents($filename, $string);
	}
	/**
	 * _mergeSection 合并section
	 */
	protected static function _mergeSection($form,&$new,$prefix){
	    foreach($form as $section => $KeyValue) {
	    	if( !is_array( $KeyValue ) ){
	    		if($prefix)
	    			$new[$prefix][$section]=$KeyValue;
	    		else
	    			$new[$section]=$KeyValue;
	    	}else {
	    		$section = $prefix ? $prefix.'.'.$section : $section;
				self::_mergeSection($KeyValue,$new,$section);
		    }
	    }
	}
	/**
	 * ini Value
	 */
	protected static function _iniValue($val) {
	    if ($val === true) { return 'true'; }
	    else if ($val === false) { return 'false'; }
	    return $val;
	}
	/**
	 * iniLoad
	 * 支持行尾comments,不分割 section 到多维数组
	 * @note 对单行纯注释没有很好的支持,使用时请注意ini格式问题
	 * @param  string $filename ini文件名
	 * @return array [ini解析后的值,comments注释,values原始值]
	 */
	protected static function _iniLoad($filename) {
	    $ini = [];//解析后的值
	    $comments=[];//注释
	    $this->_inicomments='';
	    $values=[];//原始值,可能包含产量
	    $lines = file($filename);
	    foreach($lines as $line) {
	        $cpos=strripos($line, ';');
	        //整个文件的注释
	        if($cpos === 0 and !count($ini)){
	        	$this->_inicomments.=str_replace(';', '',$line);
	        }
	        $epos=stripos($line, '=');	        
	        $comment = $cpos? trim( substr($line,$cpos+1) ):'';
	        if($epos)
	            $__value = trim( substr($line, $epos+1,$cpos?$cpos-$epos:-1) );
	        $that=parse_ini_string($line,1);
	        if(1!=count($that)) continue;
	        foreach ($that as $key => $value) {
	            if(is_array($value)){
	                if(!is_array($ini[$key]))
	                    $ini[$key] =$value;
	                $sectioin=$key;
	                $comments[$sectioin] = $comment;
	            }else{
	                if($sectioin){
	                    $ini[$sectioin][$key]=$value;
	                    $values[$sectioin][$key]=$__value;
	                    $comments[$sectioin.'.'.$key] = $comment;
	                }else{
	                    $ini[$key]=$value;
	                    $values[$key]=$__value;
	                    $comments[$key] = $comment;
	                }
	            }
	        }
	        
	    }
	    $this->__set(null,$ini);
	    $this->_comments=$comments;
	    $this->_origin=$values;
	}
}