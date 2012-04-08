<?php
namespace Jaf;
final class Route_Simple implements Route_Interface {
	protected $controller ;
	protected $module ;
	protected $action ;
	public function __construct ( $module_name, $controller_name, $action_name){}
	public function route ( $request){}
}