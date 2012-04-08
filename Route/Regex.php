<?php
namespace Jaf;
final class Route_Regex extends Route_Interface implements Route_Interface {
	protected $_route ;
	protected $_default ;
	protected $_maps ;
	protected $_verify ;
	public function __construct ( $match, $route, $map, $verify){}
	public function route ( $request){}
}