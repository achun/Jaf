<?php
namespace Jaf;
/**
 * 后缀是 Action 的函数重载
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