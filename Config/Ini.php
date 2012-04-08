<?php
namespace Jaf;
final class Config_Ini extends Config_Abstract implements Iterator,Traversable,ArrayAccess,Countable {
	public function __construct ( $config_file, $section){}
	public function __isset ( $name){}
	public function get ( $name){}
	public function set ( $name, $value){}
	public function count ( ){}
	public function rewind ( ){}
	public function current ( ){}
	public function next ( ){}
	public function valid ( ){}
	public function key ( ){}
	public function toArray ( ){}
	public function readonly ( ){}
	public function offsetUnset ( $name){}
	public function offsetGet ( $name){}
	public function offsetExists ( $name){}
	public function offsetSet ( $name, $value){}
	public function __get ( $name){}
	public function __set ( $name, $value){}
}