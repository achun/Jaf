<?php
namespace Jaf;
/**
 * # Bootstrap 抽象类
 * Jaf 会自动执行继承类中 "_init" 开头的方法
 * 应用必须继承此类,如果继承类存放于 APP_PATH/Bootstrap.php,
 * 会被 Jaf 加载并执行 Bootstrap::_initXXX 开头的方法,不生成实例
 */
abstract class Bootstrap_Abstract {
	/**
	 * 执行继承类所有以 "_init" 开头的方法
	 * @param  [String] $subClass 继承类名称
	 * @return
	 */
	final public function _bootstrap($subClass){
		array_walk(get_class_methods($subClass),function ($v) use ($subClass){
			if( 0===strpos( $v, '_init' ) )
				$subClass::$v();
		});
		Loader::getInstance(333);
	}
}