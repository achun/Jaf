<?php
namespace Jaf;
/**
 * 请求接口定义
 */
interface Request_Interface {
	/**
	 * 快捷方法,带模型检查的生成实例
	 */
	public static function newInstance($model);

}