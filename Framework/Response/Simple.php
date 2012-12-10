<?php
namespace Jaf;
/**
 * 简单响应
 * 简单响应是一个装配数据到视图的实现
 */
class Response_Simple extends Response_Abstract {
	public function __toString (){
		return $this->toString();
	}
	/**
	 * 装配数据到视图
	 * 只是一个对 \Jaf::view 调用的 实现
	 * @param  boolean $render 装配模式
	 * @return $this
	 */
	public function getOut($render){
		if($this->viewed) return $this;
		$this->viewed = 1;
		if($this->viewName[0]==='*') return $this;
		$id = $this->getId();
		if(!is_numeric($id)) $render = true;
		$this->out = \Jaf::view($this,$render?'render':'display');
		return $this;
	}
	public function getViewFile(){
		return \Jaf::view($this,'genFilePath');
	}
}