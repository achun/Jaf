<?php
namespace Jaf;
/**
 * 路由接口定义
 * 路由匹配是 Jaf 应用运行的第一步
 * 路由配置由用户定义,路由类被 Jaf 内部调用,因此 Jaf 路由是 Jaf内部自维护的,接口变更与无关应用层
 * Jaf 路由的目的是生成请求体,所以被设计为static方法调用,Jaf路由实际上是对函数进行类包装
 */
interface Route_Interface {
	/**
	 * 路由匹配
	 * @param  String $match    路由定义中的key
	 * @param  array  $mca      包含 module,controller,action的路由定义
	 * @param  array  $pathinfo 经由 Jaf::pathInfo 对 URI 进行的 pathinfo 分析
	 * @param  array  $params   客户端传入的参数
	 * @return Request_Model    匹配成功返回 Request_Model 实例,包含 module,controller,action,params (mcap)信息
	 */
	public static function match ( $match, array $mca,array $pathinfo,array $params );
}