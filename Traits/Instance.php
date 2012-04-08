<?php
namespace Jaf;
/**
 * 单例特征
 */
trait Traits_Instance {
	protected static $_traits_instance ;
	public static function getInstance (){
        if (!isset(self::$_traits_instance)) {
            self::$_traits_instance = (new \ReflectionClass( __CLASS__ ))->newInstanceWithoutConstructor( );
            call_user_func_array( [ self::$_traits_instance, '__construct' ] , func_get_args() );
        }
        return self::$_traits_instance;
	}
}