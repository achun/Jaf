<?php
namespace Jaf;
/**
 * 简单视图
 * 原生 php 模版
 * 支持非装配数据
 */
class View_Simple implements View_Interface {
	protected static $_tmp;//临时变量,防止render污染
	protected $_basepath;//基础路径
	protected $_filepath;//最后一次计算出的模版文件绝对路径
	use Trait_Overload;
	/**
	 * 构造函数
	 * @param string $basepath 模版基础路径
	 */
	public function __construct($basepath) {
		$this->_basepath = $basepath?:'';
	}
	/**
	 * [getBasePath description]
	 * @return [type] [description]
	 */
	public function getBasePath() {
		return $this->_basepath;
	}
	public function setBasePath($basepath) {
		$this->_basepath=$basepath?:'';
		return $this;
	}	
	/**
	 * 渲染视图
	 * 基于 _basepath
	 * render('template_filename' [, $arraydata1 [, $arraydata2 [,...]]]);
	 * @param  string template_filename  模板文件
	 * @param  array  另外引入的数据 key=>value 数组
	 * @return string
	 */
	public function render() {
		ob_start();
		call_user_func_array([$this,'display'], func_get_args());
		return ob_get_clean();
	}
	/**
	 * 输出视图
	 */
	public function display() {
		if (!func_num_args() ) return;
		//如果没有视图模板文件返resOut
		if( !$this->genFilePath(func_get_arg(0)) ){
			$res = \Jaf::getRes(func_get_arg(0));
			if($res) echo $res->getOut();
			return;
		}
		//导出预定义参数
		self::$_tmp=$this->__get();
		if (is_array(self::$_tmp))
			extract(self::$_tmp, EXTR_SKIP);
		elseif(is_string(self::$_tmp)){
			echo self::$_tmp;
		}
		//导出传入参数
		self::$_tmp=func_get_arg(1);
		if (is_array(self::$_tmp))
			extract(self::$_tmp, EXTR_SKIP);
		elseif(is_string(self::$_tmp)){
			echo self::$_tmp;
		}
		if( !is_file($this->_filepath) ) return;
		include($this->_filepath);
	}
	/**
	 * 直接获取响应绑定的数据
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function resData($id){
		$res = \Jaf::getRes($id);
		if($res) return $res->getData();
	}
	/**
	 * 计算模板绝对路径
	 * @param  string $fileName 文件名
	 * @return string 返回绝对文件路径,无效返回空字符串
	 */
	public function genFilePath($fileName){
		if( !$fileName or '/'===substr($fileName,0,1) )
			$this->_filepath=$fileName;
		else
			$this->_filepath=$this->_basepath .'/'.$fileName.'.phtml';
		if( !is_file($this->_filepath) )
			$this->_filepath='';
		return $this->_filepath;
	}
}
