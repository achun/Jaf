<?php
namespace Jaf;
abstract class Request_Abstract {
	public $module ;
	public $controller ;
	public $action ;
	public $method ;
	protected $_exception ;
	protected $dispatched ;
	protected $routed ;
	public function getActionName ( ){return $this->action;}
	public function getControllerName ( ){return $this->controller;}
	public function getEnv ( $name, $default){}
	public function getException ( ){return $this->_exception;}
	public function getMethod ( ){return $this->method;}
	public function getModuleName ( ){return $this->module;}
	public function getServer ( $name, $default){}
	public function isDispatched ( ){}
	public function isHead ( ){}
	public function isOptions ( ){}
	public function isRouted ( ){return $this->routed;}
	public function isXmlHttpRequest ( ){}
	public function setActionName ( $action){}
	public function setBaseUri ( $uir){}
	public function setControllerName ( $controller){}
	public function setDispatched ( ){}
	public function setModuleName ( $module){}
	public function setParam ( $name, $value){}
	public function setRequestUri ( $uir){}
	public function setRouted ( $flag){}
}