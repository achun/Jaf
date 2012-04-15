<?php
namespace Jaf;
/**
 * Jaf 的路由器
 */
final class Router {
	protected $_routes ;
	protected $_current ;
	/**
	 * 构造
	 * @param array $conf 路由配置
	 */
	public function __construct ( $conf ){
		foreach ($conf as $route) {
			
		}
	}
	use Traits_Overload;
	public function addRoute (){}
	public function addConfig (){}
	public function route (){}
	public function getRoute (){}
	public function getRoutes (){}
	public function getCurrentRoute (){}
}