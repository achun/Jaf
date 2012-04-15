<?php
namespace Jaf;
/**
 * 单例特征
 * @note 其他代码需要 private function __construct(){} 的声明
 */
trait Traits_Instance {
	protected static $_traits_instance ;
	/**
	 * 获取单例
	 * @return Object
	 */
	final public static function getInstance (){
        if (!isset(self::$_traits_instance)) {
            self::$_traits_instance = (new \ReflectionClass( __CLASS__ ))->newInstanceWithoutConstructor( );
            call_user_func_array( [ self::$_traits_instance, '__construct' ] , func_get_args() );
        }
        return self::$_traits_instance;
	}
	final public static function getInstanceBy ($className){
        if (!isset(self::$_traits_instance)) {
            self::$_traits_instance = (new \ReflectionClass( $className ))->newInstanceWithoutConstructor( );
            call_user_func_array( [ self::$_traits_instance, '__construct' ] , array_slice(func_get_args(),1) );
        }
        return self::$_traits_instance;
	}	
}