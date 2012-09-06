<?php
namespace Jaf;
/**
 * 响应接口定义
 * 这里的 Response 是由 Action 生成的数据封装,并非 http Response
 * 主要完成对数据的操作
 */
interface Response_Interface {
	/**
	 * 构造
	 * @param string $viewName 视图名
	 * @param mixed  $data     响应数据
	 */
	public function __construct	( $viewName,$data );
	/**
	 * 转换到字符串
	 */
	public function __toString ();
	/**
	 * 数据入 Jaf 数据队列
	 * @param string|null $id 顺便设定 id
	 * @return $this
	 */
	public function push($id);
	/**
	 * 设定视图(文件)名
	 * 可以是相对路径或者绝对视图路径
	 * @param String $viewName
	 */
	public function setViewName( $viewName );
	/**
	 * 返回构造传入的 $data
	 * @return array
	 */
	public function getData();
	/**
	 * 输出结果
	 * @param mixed $mixed 传入的参数
	 * @return mixed
	 */
	public function getOut($mixed);
	/**
	 * 获取视图文件绝对路径
	 */
	public function getViewFile();
}