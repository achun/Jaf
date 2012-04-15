<?php
namespace Jaf;
/**
 * 过滤/校验特征
 */
trait Traits_Filter {
 /**
  * 根据 name 匹配到的成员函数对数据进行校验过滤
  * @note 数据被引用传递,如果 $name 过滤器返回 false 结束后续过滤
  * @return boolean
  */
 public function nameValueMethodFilter ($name , &$value){
	$self = $this;
	$name .= 'Filter';
	return array_walk( get_class_methods ( $this ), function ( $method ) use($self,$name,$value){
		if( 0===strpos( $method, $name ) )
			if(false===call_user_func_array( [ $self, $method ] , $value ))
				return false;
	});
 }
 private $_traits_filter=array();
 /**
  * 根据 name 匹配到 $_traits_filter 对数据进行校验过滤
  * @note 数据被引用传递,如果 $name 过滤器返回 false 结束后续过滤
  * @return boolean
  */
 public function nameValueFilter ($name , &$value){
	if(!isset($this->_traits_filter[$name])) return true;
	return array_walk( $this->_traits_filter[$name] , function ( $methods ) use($value){
		if( is_string( $methods ) )
			$methods = [ $methods ];
		foreach ($methods as $method)
			if(false===call_user_func_array( $method , $value ))
				return false;
	});
 }
 /**
  * 设置过滤器
  * @param string $name         数据名称
  * @param string|array $filterMethod 过滤器名称,完整的函数访问路径
  */
 public function setFilter($name,$filterMethod){
 	$this->_traits_filter[$name] = array_merge($this->_traits_filter[$name]?:[],$filterMethod);
 }
}