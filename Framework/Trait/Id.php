<?php
namespace Jaf;
/**
 * 唯一标识特征
 * 为对象设置唯一的标识
 */
trait Trait_Id {
	private $_trait_id;			//唯一标识
	final public function setId($id){
		if(null===$this->_trait_id and $id!==null)
			$this->_trait_id = $id;
		return $this;
	}
	final public function getId(){
		return $this->_trait_id;
	}
}