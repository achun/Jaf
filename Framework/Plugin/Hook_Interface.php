<?php
namespace Jaf;
/**
 * 插件接口定义
 */
interface Plugin_Hook_Interface {
	/**
	 * 路由匹配之前触发
	 */
	public function routerStartup ( $request, $response);
	/**
	 * 路由匹配之后触发
	 */
	public function routerShutdown ( $request, $response);
	/**
	 * 分发循环之前触发
	 */
	public function dispatchLoopStartup ( $request, $response);
	/**
	 * 分发之前触发
	 */
	public function preDispatch ( $request, $response);
	/**
	 * 分发之后被触发
	 */
	public function postDispatch ( $request, $response);
	/**
	 * 分发循环之后触发
	 */
	public function dispatchLoopShutdown ( $request, $response);
	public function preResponse ( $request, $response);
}