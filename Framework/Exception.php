<?php
namespace Jaf;
/**
 * Jaf 异常
 * Jaf 在遇到异常的时候会:
 * - 发送 http head ServerStatus: $code|500
 * - 如果 display_errors = 0 ,输出异常信息
 */
class Exception extends \Exception {
	public function __construct ( $message, $code=500, $previous){
		$message=$message.($previous?$previous->getMessage():'');
		parent::__construct ( $message, $code, $previous);
		header('ServerStatus: '.($code?:500));
		if(method_exists($this, 'onException'))
			$this->onException();
		elseif(!ini_get('display_errors'))
			echo $this->getMessage();
	}
	public function __toString (){
		return $this->getMessage();
	}
}