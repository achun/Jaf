<?php
namespace Jaf;
/**
 * PDO 返回结果断言
 */
class PDO_Assert {
	protected $pdo;
	protected $callback;//失败回调
	public function __construct(PDO_Base $pdo,callable $method=null){
		$this->pdo=$pdo;
		$this->callback = $method;
	}
	/**
	 * 设置断言失败回调
	 * @param  callable $method
	 * @return
	 */
	public function setCallback(callable $method){
		$this->callback = $method;
	}
	public function __call($method, $args) {
	    if ( method_exists( $this->pdo, $method ) ) {
	    	try {
	    		$ret= call_user_func_array( [$this->pdo, $method ], $args);
	    	} catch (\Exception $e) {
		    	if(is_callable($this->callback))
		    		return $this->callback($e,$name, $args);
				throw new Exception('数据操作失败:'.$e->getMessage());
	    	}
	    } else {
	    	throw new Exception_LoadFailed_Action($name);
	    }
	    if (false===$ret) {
	    	if(is_callable($this->callback))
	    		return $this->callback($name, $args);
			throw new Exception('数据操作失败');
	    }
	    return $ret;
	}
}