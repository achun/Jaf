<?php
namespace Jaf;
/**
 * 控制器抽象类
 * 控制器的任务包括:
 * - 包含 Action 方法并处理,最简单的方法是直接输出结果
 * - 在 init 方法中新建 Action 或者 Request 到 Jaf 分发队列
 * - 在 Action 中新建 Action 到 Jaf 分发队列
 * - 在 Action 中生成 绑定视图文件的 Response  到 Jaf 响应队列
 */
abstract class Controller_Abstract implements Controller_Interface{
	/**
	 * 拆分 action,以单独的文件完成action执行
	 * $actions 是一个数组,以action=>actionfile.php组成
	 */
	public $actions ;
	protected $_reqData;		//原始请求模型数据,控制器总是从一个原始请求开始
	protected $_reqId;			//原始请求ID
	final public function __construct (Request_Abstract $req,$init=true){
		$this->_reqData=$req->getModel();
		$this->_reqId=$req->getId();
		if(is_string($init))
			$this->_reqData['action']=$init;
		if($init)
			$this->init();
	}
	/**
	 * 控制器初始化
	 * 实例在这里生成 Action 或者 Request 到分发队列
	 * 默认行为是根据原始请求模型数据生成一个 action 到分发队列
	 */
	protected function init(){
		\Jaf::pushNA($this,$this->_reqData['action'],$this->_reqData['params']);
	}
	public function getReqData(){
		return $this->_reqData;
	}
	public function getReqID(){
		return $this->_reqId;
	}
	public function getReq(){
		return \Jaf::App()->getRequest($this->_reqId);
	}
}