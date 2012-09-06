<?php
namespace Jaf;
/**
 * 执行实例中所有以 $prefix 开头的方法,调用 prefixRun 批量执行方法
 * @note 如果方法返回false,将结束后续方法调用,参数无法引用传递
 */
trait Trait_Prefix_Run {
	/**
	 * 实例构造方法
	 * 执行以 $prefix 开头的方法并传递参数
	 * @param string $prefix _run  方法前缀
	 * @param array  $args   []    方法参数
	 * @return mixed false|null
	 */
	final public function prefixRun($prefix='_run', array $args=[] ) {
		foreach (get_class_methods ( $this ) as $method) {
			if( 0===strpos( $method, $prefix ) )
				if(false===call_user_func_array( [ $this, $method ] , $args ))
					return false;
		}
	}
}
