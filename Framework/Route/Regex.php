<?php
namespace Jaf;
/**
 * 正则路由
 */
final class Route_Regex implements Route_Interface {
	protected $_route ;
	protected $_default ;
	protected $_maps ;
	protected $_verify ;
	public function __construct ( $match, $route, $map, $verify){}
	public function route ( $request){}
}