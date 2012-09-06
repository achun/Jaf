<?php
namespace Jaf;
final class Request_Simple extends Request_Abstract {
	public function getQuery (){}
	public function getRequest (){}
	public function getPost (){}
	public function getCookie (){}
	public function getFiles (){}
	public function get (){}
	public static function newInstance( $model ){
		if(is_array($model))
			$model=Request_Model::newInstance($model);

		if(!$model or !is_subclass_of($model,'Request_Simple'))
			return;
		return new self($model);
	}
}