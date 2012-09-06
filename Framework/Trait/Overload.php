<?php
namespace Jaf;
/**
 * 成员重载
 */
trait Trait_Overload {
  /**
   * 保存数据
   */
  private $_trait_overload_vars = array();
  /**
   * 赋值合法性检测处理方法
   */
  public $setValidate;

  /**
   * 可以覆盖此方法对赋值进行提前处理
   */
  private function _overloadDataConstruct(&$data){ return $data;}

  /**
   * 设置值并进行合法性检查
   * @note setValidate($data,$name) 是合法性检查,注意参数次序
   * @param string $name
   * @param mixed  $data
   * @return mixed
   */
  public function __set($name, $data) {
    if (is_callable([$this,'setValidate'] ) and
      false === call_user_func([$this,'setValidate'],$data,$name) )
      return;
    if(null===$name){
      $this->_trait_overload_vars = $this->_overloadDataConstruct($data);
    }else
      $this->_trait_overload_vars[$name] = $this->_overloadDataConstruct($data);
    return $data;
  }

  public function __get($name) {
    if( null===$name ) return $this->_trait_overload_vars;
    if (isset($this->_trait_overload_vars[$name])) 
      return $this->_trait_overload_vars[$name];
  }

  public function __isset($name) {
    return isset($this->_trait_overload_vars[$name]);
  }

  public function __unset($name) {
    unset($this->_trait_overload_vars[$name]);
  }
}