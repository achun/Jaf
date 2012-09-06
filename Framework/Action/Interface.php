<?php
namespace Jaf;
/**
 * Action 接口定义
 */
interface Action_Interface {
	public function __construct (Controller_Abstract $controller,$actionName,array $params);
}