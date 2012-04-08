<?php
namespace Jaf;
/**
 * 重载特征
 */
trait Traits_Overload {
  private $_traits_overload_vars = array();

  public function __set($name, $data) {
      $this->_traits_overload_vars[$name] = $data;
  }

  public function __get($name) {
    if (isset($this->_traits_overload_vars[$name])) 
      return $this->_traits_overload_vars[$name];
  }

  public function __isset($name) {
    return isset($this->_traits_overload_vars[$name]);
  }

  public function __unset($name) {
    unset($this->_traits_overload_vars[$name]);
  }
}