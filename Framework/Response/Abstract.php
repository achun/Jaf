<?php
namespace Jaf;
/**
 * 响应抽象类
 */
abstract class Response_Abstract implements Response_Interface {
	use Trait_Id;
	public $data;
	public $viewName;
	protected $viewed;//已经view过
	protected $out;//输出的结果
	/**
	 * 构造响应
	 * @param string $viewName 视图文件,如果是 *foo 格式表示同时设定 foo 为 id
	 * @param [type] $data     [description]
	 */
	public function __construct	( $viewName,$data ){
		$this->data = $data;
		$this->viewName=$viewName;
		if('*'===$viewName[0]){
			$this->setId(substr($viewName,1));
		}
	}
	public function push($id){
		if($id) $this->setId($id);
		\Jaf::pushRes($this);
		return $this;
	}
	public function getData(){
		return $this->data;
	}
	public function setViewName( $viewName ){
		$this->viewName=$viewName;
	}
	/**
	 * 响应数据到字符串
	 * @return string
	 */
	public function toString (){
		$this->getOut(true);
		if( $this->out ) return $this->out;
		switch (gettype($this->data)) {
			case 'string':				
			case 'integer':
			case 'double':
			case 'boolean':			
				return $this->data;
			case 'array':
				return json_encode($this->data,JSON_UNESCAPED_UNICODE | JSON_BIGINT_AS_STRING | JSON_UNESCAPED_SLASHES);
			case 'object':
				if( is_callable($this->data))
					return $this->data();
				break;
			case 'resource':
			case 'NULL':
				return 'NULL';
			default:
				return 'NULL';
		}
	}
}