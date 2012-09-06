<?php
namespace Jaf;
/**
 * 抽象请求
 * 请求不是客户端请求,而是控制器根据客户端请求产生的内部处理队列
 * 每一个请求必然对应具体的 action,action执行后的结果 respose 决定了请求的状态
 */
abstract class Request_Abstract implements Request_Interface {
	public $action;			//action 是一个包含 [对象,方法] 的数组,可以被调用
	public $params;			//传递给 action 的参数
	protected $_reqModel;	//原始请求模型数组
	protected $_exception ;
	protected $dispatched ;
	use Trait_Id;
	/**
	 * 构造
	 * @param array $req 请求体结构数组
	 */
	final public function __construct ( Request_Model $model ){
		$this->_reqModel = $model->get();
	}
	/**
	 * 返回请求模型数组
	 * @return [type] [description]
	 */
	final public function getModel(){
		return $this->_reqModel;
	}
	public function getException ( ){
		return $this->_exception;
	}
	public function isDispatched ( ){
		return $this->dispatched;
	}
	public function setDispatched ( ){
		$this->dispatched=true;
	}
}