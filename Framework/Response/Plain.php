<?php
namespace Jaf;
/**
 * Response 简单数据
 */
class Response_Plain extends Response_Abstract {
	public function __toString (){
		return $this->toString();
	}
}