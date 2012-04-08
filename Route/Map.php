<?php
namespace Jaf;
final class Route_Map implements Route_Interface {
	protected $_ctl_router ;
	protected $_delimeter ;
	public function __construct ( $controller_prefer, $delimiter){}
	public function route ( $request){}
}