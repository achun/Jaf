<?php
namespace Jaf;
/**
 * 基本的PDO封装
 * 返回结果有两种值
 * false 		失败
 * PDOStatement 原生对象
 * 注意默认遇到问题抛出异常,析构提交未提交的数据
 */
class PDO_Base extends \PDO implements PDO_Interface {
	/**
	 * 构造
	 * 默认属性:
	 * FETCH_MODE	= FETCH_ASSOC | FETCH_NAMED
	 * CURSOR		= CURSOR_FWDONLY
	 * ERRMODE		= ERRMODE_EXCEPTION
	 * NAMES		= UTF8
	 */
	function __construct($dsn, $username, $password, array $options =[]){
		parent::__construct($dsn, $username, $password,$options);
		parent::setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE,\PDO::FETCH_ASSOC | \PDO::FETCH_NAMED);
		parent::setAttribute(\PDO::ATTR_CURSOR ,\PDO::CURSOR_FWDONLY);
		parent::setAttribute(\PDO::ATTR_ERRMODE ,\PDO::ERRMODE_EXCEPTION);
		//设置字符集
		parent::exec("SET NAMES 'UTF8'");
	}
	/**
	 * 析构
	 */
	function __destruct(){
		$this->autoCommit();
	}
	/**
	 * 没有错误发生并且有事务时自动提交
	 */
	protected function autoCommit(){
		if(parent::inTransaction() and parent::errorCode()==0)
			return $this->commit();
	}
	/*Prepare and Execute SQL with parameters*/
	protected function execute($sql, array $inputParameters=[]){
		$stmt = parent::prepare($sql);
		if (!$stmt) return false;
		if(!$stmt->execute($inputParameters)) return false;
		return $stmt;
	}

	/**
	 * 读操作
	 * @return mixed false | PDOStatement
	 */
	public function read($sql,array $inputParameters=[],$single=false){
		$stmt = $this->execute($sql,$inputParameters);
		if( $single and $stmt ) return $stmt->fetch();
		return $stmt;
	}	
	/**
	 * 写操作
	 * @return mixed false | 影响的记录数
	 */
	public function write($sql,array $inputParameters=[]){
		$stmt=$this->execute($sql,$inputParameters);
		if(!$stmt) return false;
		return $stmt->rowCount();
	}
	/**
	 * insert
	 * @param array $values 要插入的数据
	 * @param mixed $lastInsertId @see lastInsertId
	 */
	public function insert($into,array $values,$lastInsertId){
		if(!$values) return false;
		$f=implode('`,`',array_keys($values));
		$vs=implode(',:',array_keys($values));
		$sql="INSERT INTO `$into` (`$f`) VALUES (:$vs)";
		$re = $this->write($sql,$values);
		if ($re and $lastInsertId)
			return $this->lastInsertId($lastInsertId);
		return $re;
	}
	/**
	 * update
	 * @param string $into 表名
	 * @param string $where 完整的 where 字句
	 * @param array $values 要更新的数据
	 * @param array $merge 附加的数据
	 * @return mixed 影响的记录数
	 */
	public function update($into,$where,array $values=array(),array $merge=array()){
		$f='';
		foreach($values as $key=>$val){
			if(''==$f)
				$f.="`$key`=:$key";
			else
				$f.=",`$key`=:$key";
		}
		$sql="UPDATE `$into` SET $f $where;";
		return $this->write($sql,array_merge($values,$merge));
	}
	/**
	 * delete
	 * @param string $from 表名
	 * @param string $where 完整的 where 字句
	 * @param array $values where 对应的参数数据
	 * @return mixed 影响的记录数
	 */
	public function delete($from,$where,array $values=array()){
		if(!is_string($where)) {
			return false;
		}
		$sql="DELETE FROM `$from` $where;";
		return $this->write($sql,$values);
	}
	/**
	 * lastInsertId
	 * @param mixed $name 如果是字符串表示字段名
	 */
	public function lastInsertId($seqname = NULL){
		return parent::lastInsertId($seqname);
	}
	/**
	 * 按条件统计表中的记录数
	 * @param string $from 表名
	 * @param string $where 完整的 where 字句
	 * @param array $values where 对应的参数数据
	 */
	public function count($from,array $values,$where){
		if($values and !$where ){
			$where= $this->where($values);
		}
		if($where) $where ='WHERE '.$where;
		$sql = "SELECT count(*) as cnt FROM `$from` $where;";
		$stmt=$this->execute($sql,$values);
		if(!$stmt) return false;
		return $stmt->fetch()['cnt']+0;
	}
	/**
	 * 安全开启事务
	 */
	public function beginTransaction(){
		if(parent::inTransaction()) return false;
		return parent::beginTransaction();
	}
	/**
	 * where 字句生成,and规则
	 * @param  array  $d [description]
	 * @return string 不包含 WHER
	 */
	public function where(array $d){
		$sql=[];
		foreach ($d as $key => $value) {
			$sql[] = "`$key`=:$key";
		}
		return implode(' and ',$sql);
	}
}
