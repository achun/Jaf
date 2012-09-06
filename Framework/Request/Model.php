<?php
namespace Jaf;
/**
 * 请求体模型
 */
final class Request_Model {
	protected $_model;
	protected function __construct( array $model ){
		$this->_model=$model;
	}
	public function get(){
		return $this->_model;
	}
	public static function newInstance( array $model ){
		//模型结构用于检查数据结构合法性
		static $_model=[
			'module'=>0,
			'controller'=>0,
			'action'=>0,
			'params'=>0
		];
		if( 4 !== count(array_intersect_key ($_model,$model)) ){
			return;
		}
		return new Request_Model($model);
	}
}