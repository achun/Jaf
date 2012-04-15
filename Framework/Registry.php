<?php
namespace Jaf;
final class Registry {
	protected static $_instance ;
	protected $_entries ;
	private function __construct (){}
	private function __clone (){}
	static public function get ( $name){}
	static public function has ( $name){}
	static public function set ( $name, $value){}
	static public function del ( $name){}
}