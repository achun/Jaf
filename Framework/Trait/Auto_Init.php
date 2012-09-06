<?php
namespace Jaf;
/**
 * 在构造函数期自动执行实例中所有以 "_init" 开头的方法并传递构造参数
 * @note 如果方法返回false,将结束后续方法调用,参数无法引用传递
 */
trait Trait_Auto_Init {
	/**
	 * 实例构造方法
	 * 执行以 "_init" 开头的方法并传递构造参数
	 */
	final public function __construct() {
		$args = func_get_args();
		foreach (get_class_methods ( $this ) as $method) {
			if( 0===strpos( $method, '_init' ) )
				if(false===call_user_func_array( [ $this, $method ] , $args ))
					return false;
		}
	}
}
