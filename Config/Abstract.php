<?php
namespace Jaf;
abstract class Config_Abstract {
	protected $_config ;
	protected $_readonly ;
	abstract public function get (){}
	abstract public function set (){}
	abstract public function readonly (){}
	abstract public function toArray (){}
}