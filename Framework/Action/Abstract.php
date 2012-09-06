<?php
namespace Jaf;
/**
 * Action 抽象类
 * 一个 Action 本质是 Controller 中的一个方法,根据路由匹配产生
 * 一个 Action 只执行一次,actionName 默认值是 indexAction
 * 如果没有对应的 Controller->actionName($params) 方法,尝试调用 Controller->notMatch($params),如果仍然没有抛出异常
 * $params中的 actionName 是原始值,可能为 null
 */
abstract class Action_Abstract implements Action_Interface {
	protected $_controller ;
	protected $_actionName ;
	protected $_params ;
	protected $_executed;
	public function __construct (Controller_Abstract $controller,$actionName,array $params=[]){
		$this->_controller = $controller;
		$this->_actionName = $actionName;
		$this->_params = $params;
		$this->_params['actionName']=$actionName;

	}
	/**
	 * 执行 Action
	 * @return mixed
	 */
	public function execute (){
		if($this->_executed) return;
		$this->_executed = 1;
		$actionName = ($this->_actionName ?:'index').'Action';
		if (method_exists($this->_controller, $actionName) or method_exists($this->_controller, '__call')) {
			return $this->_controller->{$actionName}($this->_params);
		}
		if (method_exists($this->_controller, 'notMatch')) {
			return $this->_controller->notMatch($this->_params);
		}
		throw new Exception("Undefined Action:".get_class($this->_controller).'.' .$this->_actionName);
	}
}