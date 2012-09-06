<?php
namespace Jaf;
final class Config_Array implements Config_Interface,Iterator,Traversable,ArrayAccess,Countable {
	protected $_config ;
	protected $_readonly ;

	use Trait_Overload,Trait_Validate;

	public function __construct ( $config_file, $section){}
	public function get ( $name){}
	public function set ( $name, $value){}
	public function count ( ){}
	public function offsetUnset ( $name){}
	public function rewind ( ){}
	public function current ( ){}
	public function next ( ){}
	public function valid ( ){}
	public function key ( ){}
	public function readonly ( ){}
	public function toArray ( ){}
	public function offsetGet ( $name){}
	public function offsetExists ( $name){}
	public function offsetSet ( $name, $value){}
}