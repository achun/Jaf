<?php
/**
 * Just Another Framework
 * 
 * Jaf 的思想来自 Laruence 的 [Yaf](http://yaf.laruence.com/manual/index.html)
 * 
 * @note 虽然 Jaf 源自 Yaf,但是 Jaf 并不追求与 Yaf 完全兼容  
 * @license under the [Creative Commons 3.0 BY](http://creativecommons.org/licenses/by/3.0/)  
 * @author  achun (achun.shx@qq.com)  
 */
namespace Jaf;
/**
 * Jaf
 * 事实上是启动 Jaf 的一个独立 Bootstrap 实现  
 * 提供一些快捷的方法访问某些对象
 */
final class Jaf {
	private static $config;//原始配置
	private static $conf;//生效的配置
	private static $instance;
	private function __construct($conf,$section) {
		if(false===$this->init($conf,$section)) return;
		foreach (get_class_methods ( $this ) as $method) {
			if( 0===strpos( $method, '_init' ) )
				if( false===$this->$method() )
					break;
		}
	}
	/**
	 * 环境检测
	 */
	protected function init($config,$section){
		error_reporting(error_reporting() ^ E_NOTICE ^ E_WARNING );
		if(!$config or !is_file($config)){
			echo 'Yaf 运行需要一个配置文件参数';
			return false;
		}
		$conf= include($config);
		if( !$conf ){
			echo '无效的配置文件:'.$config;
			return false;
		}
		if(!$section){
			$section = array_keys(array_slice($conf,0,1))[0];
		}
		self::$config = $conf;
		$conf = $conf[$section];
		if( $pos=strpos(':', $section) ){
			$pos = trim(substr($section, $pos+1));
			if( self::$config[$pos] )
				self::$conf = array_merge(self::$config[$pos],$conf);
		}		
		

		if( !$conf['directory'] )
		{
			echo '配置文件必须设定应用目录:[section=>[directory=>"有效app目录"]]';
			return false;
		}
		if( !is_dir($conf['directory'])	){
			echo '无效应用目录设定:',$conf['directory'];
			return false;
		}

		if( !class_exists('Bootstrap') and file_exists($conf['directory'].'/Bootstrap.php')){
			require $conf['directory'].'/Bootstrap.php';
		}

		if( !class_exists('Bootstrap') or
			!is_subclass_of('Bootstrap', 'Jaf\Bootstrap_Abstract')){
			echo 'APPPATH/Bootstrap.php 需要定义 class Bootstrap extends Jaf\Bootstrap_Abstract';
			return false;
		}
		self::$conf=$conf;
	}

	protected function _initApp(){
		Application::getInstance(self::$conf);
	}

    protected function _initBootstrap() {
    	\Bootstrap::getInstanceBy('Bootstrap');
    }

    protected function _initRouterStartup() {
    }

    protected function _initRouterShutdown() {
    }

    protected function _initDispatchLoopStartup() {
    }

    protected function _initPreDispatch() {
    }

    protected function _initPostDispatch() {
    }
  
    protected function _initDispatchLoopShutdown() {
    }
  
    protected function _initPreResponse() {
    }

    protected function _initPostResponse() {
    	//pre(self::app());
    }

	/**
	 * Jay 类库自动载入
	 */
	protected static function autoLoad($class) {
		if (0!==stripos($class, 'Jaf\\')) return false;
		$file =__DIR__.'/'.preg_replace('#_#','/', substr($class,4),1 ).'.php';
		if(file_exists($file)){
			require $file;
		}
	}

	public function App($conf,$section=''){
        if (!isset(self::$instance)) {
			spl_autoload_register('Jaf\Jaf::autoLoad');        	
            self::$instance = new Jaf($conf,$section) ;
        }
        return Application::getInstance();
	}
}

/**
 * 调试用pre输出
 */
function pre()
{
  $args=func_num_args()?func_get_args():array($GLOBALS);
  echo '<pre>';
  foreach ($args as $value) {
    echo PHP_EOL;
    echo htmlspecialchars( print_r($value,1) );
  }
  echo '</pre>';
}



