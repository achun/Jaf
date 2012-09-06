<?php
namespace Jaf;
/**
 * 单例特征
 * @note 其他代码需要 private|protected function __construct(){} 的声明
 */
trait Trait_Instance {
	protected static $_trait_instance ;
	/**
	 * 获取单例
	 * @return Object
	 */
	final public static function getInstance (){
        if (!isset(self::$_trait_instance)) {
            $className = get_called_class();
            self::$_trait_instance = (new \ReflectionClass( $className ))->newInstanceWithoutConstructor( );
            $ret=call_user_func_array( [ self::$_trait_instance, '__construct' ] , func_get_args() );
            if(false===$ret)
                return false;
        }
        return self::$_trait_instance;
	}
}