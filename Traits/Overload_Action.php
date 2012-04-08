<?php
namespace Jaf;
/**
 * 后缀 Action 重载函数特征
 */
trait Traits_Overload_Action {
  public function __call($name, $args) {
  	$method =$name . 'Action';
    if (isset( $this->$method ) and is_callable( $this->$method )) {
    	return call_user_func_array( [$this, $method ], $args);
    } else {
    	throw new Exception_LoadFailed_Action($name);
    }
  }
}