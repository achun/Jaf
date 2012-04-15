<?php
namespace Jaf;
final class Dispatcher {
	protected $_router ;
	protected $_view ;
	protected $_request ;
	protected $_plugins ;
	protected static $_instance ;
	protected $_auto_render ;
	protected $_return_response ;
	protected $_instantly_flush ;
	protected $_default_module ;
	protected $_default_controller ;
	protected $_default_action ;
	private function __construct (){}
	private function __clone (){}
	private function __sleep (){}
	private function __wakeup (){}
	public function enableView ( ){}
	public function disableView ( ){}
	public function initView ( $templates_dir, $options){}
	public function setView ( $view){}
	public function setRequest ( $request){}
	public function getApplication ( ){}
	public function getRouter ( ){}
	public function getRequest ( ){}
	public function setErrorHandler ( $callback, $error_types){}
	public function setDefaultModule ( $module){}
	public function setDefaultController ( $controller){}
	public function setDefaultAction ( $action){}
	public function returnResponse ( $flag){}
	public function autoRender ( $flag){}
	public function flushInstantly ( $flag){}
	static public function getInstance ( ){}
	public function dispatch ( $request){}
	public function throwException ( $flag){}
	public function catchException ( $flag){}
	public function registerPlugin ( $plugin){}
}