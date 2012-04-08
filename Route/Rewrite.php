<?php
namespace Jaf;
final class Route_Rewrite extends Route_Interface implements Route_Interface {
	protected $_route ;
	protected $_default ;
	protected $_verify ;
	public function __construct ( $match, $route, $verify){}
	public function route ( $request){}
}