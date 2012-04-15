<?php
namespace Jaf;
/**
 * 控制器抽象类
 * 所有控制器必须继承此类,Jaf才能正确处理  
 * 所有此类下的public属性方法都可能被 Jaf 调用
 */
abstract class Controller_Abstract {
	/**
	 * 拆分 action,以单独的文件完成action执行
	 * $actions 是一个数组,以action=>actionfile.php组成
	 */
	public $actions ;
	protected $_module ;
	protected $_name ;
	protected $_request ;
	protected $_response ;
	protected $_invoke_args ;
	protected $_view ;
	final public function __construct (){}
	final private function __clone (){}
	final protected function display ( $tpl, $parameters){}
	final protected function render ( $tpl, $parameters){}
	final public function forward ( $module, $controller, $action, $paramters){}
	final public function getInvokeArg ( $name){}
	final public function getInvokeArgs ( ){}
	final public function getModuleName ( ){}
	final public function getRequest ( ){}
	final public function getResponse ( ){}
	final public function getView ( ){}
	final public function getViewpath ( ){}
	final public function initView ( $options){}
	final public function redirect ( $url){}
	final public function setViewpath ( $view_directory){}
}