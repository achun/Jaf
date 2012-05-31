<?php
namespace Jaf;
/**
 * # 请求特征
 * @note 请求不一定是客户端原始请求,也可能是内部发起的请求  
 * 所以 Jaf 中的请求不再关心 URI
 */
trait Traits_Request {
	protected $_traits_request_module ;
	protected $_traits_request_controller ;
	protected $_traits_request_action ;
	protected $_traits_request_method ;	
	protected $_traits_request_params=array();

	/**
	 * 配合 [Traits_Auto_Init] 替代构造函数
	 */
	private function _initTraitsRequest ( ){
		switch ( func_num_args() ) {
			case 0:
				
				break;
			
			default:
				# code...
				break;
		}
		func_get_args()
	}
	/**
	 * ## 获取请求 URI 路径部分
	 */
	public function getRequestBaseUri ( ){

		return $this->_traits_request_base_uri;
	}
	/**
	 * ## 获取请求 URI
	 */
	public function getRequestUri (){
		return $this->_traits_request_uri;
	}
	/**
	 * ## 获取请求中的某个参数
	 * @param  String $name    参数名  
	 * @param  mixed  $default 没有此参数返回的默认值  
	 * @return mixed
	 */
	public function getRequestParam ( $name, $default){
		return
			isset($this->_traits_request_params[$name]) ?
			$this->_traits_request_params[$name] :
			$default;
	}
	/**
	 * ## 获取请求的参数
	 */
	public function getRequestParams ( ){
		return $this->_traits_request_params;
	}
	/**
	 * ## 获取原始请求使用的方法
	 * 可能的值:
	 * - GET
	 * - POST
	 * - PUT
	 */	
	public function getRequestMethod( ){}
}
