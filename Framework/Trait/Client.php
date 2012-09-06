<?php
namespace Jaf;
/**
 * 客户端特征
 */
trait Trait_Client {
	/**
	 * 获取客户端名称
	 * 可能的结果
	 * 浏览器名称:如果有的话
	 * CLI:命令行下
	 */
	public function getClientName ( ){
	}

	/**
	 * 获取客户端语言
	 */
	public function getClientLanguage ( ){
	}
	/**
	 * 获取客户端版本
	 */
	public function getClientVer ( ){

	}
	/**
	 * 获取客户端期望返回的数据类型
	 */
	public function getClientDataType ( ){

	}
}