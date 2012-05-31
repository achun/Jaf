<?php
namespace Jaf;
/**
 * # 构造单例的时候执行以 "_init" 开头的方法并传递构造参数
 */
trait Traits_Auto_Init_Instance {
	/**
	 * ## 实例构造方法
	 * 执行以 "_init" 开头的方法并传递构造参数
	 */
	final public function __construct() {
		$args = func_get_args();
		foreach (get_class_methods ( $this ) as $method) {
			if( 0===strpos( $method, '_init' ) )
				if(false===call_user_func_array( [ $this, $method ] , $args ))
					break;
		}
	}
}
