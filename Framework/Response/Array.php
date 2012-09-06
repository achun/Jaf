<?php
namespace Jaf;
class Response_Array implements Response_Abstract {
	public function __toString (){
		return $this->toString();
	}
}