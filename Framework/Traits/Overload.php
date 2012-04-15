<?php
namespace Jaf;
/**
 * 成员重载
 */
trait Traits_Overload {

  private $_traits_overload_vars = array();

  /**
   * 可以覆盖此方法对赋值进行提前处理
   */
  private function _overloadDataConstruct(&$data){ return $data;}

  /**
   * 设置值并进行合法性检查
   * @param string $name
   * @param mixed  $data
   */
  public function __set($name, $data) {
    if ( method_exists($this,'keyValueValidate' ) and
      false === $this->keyValueValidate($name,$data) )
      return;

    $this->_traits_overload_vars[$name] = $this->_overloadDataConstruct($data);
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