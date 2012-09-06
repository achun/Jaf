<?php
/**
 * Just Another Framework
 * 仅是一个框架
 * Jaf 的思想来自 Laruence 的 [Yaf](http://yaf.laruence.com/manual/index.html)
 * 
 * @note 虽然 Jaf 源自 Yaf,但是 Jaf 并不追求与 Yaf 兼容
 * @license under the [Creative Commons 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
 * @author  achun (achun.shx@qq.com)
 */

/**
 * Jaf
 * 实际上起到 Jaf 命名空间的作用,以单例模式工作
 * 进行一些必要的初始化
 * 提供快捷的方法访问 Jaf 的功能
 */
final class Jaf {
	private static $config;		//原始配置
	private static $conf;		//生效的 APP 配置
	private static $instance;	//Jaf 单例
	private static $App;		//App
	private function __construct() {}

	/**
	 * 配置应用并进行初始化工作,也可以获取当前应用实例
	 * @note 配置应用并不会立即运行应用,而是进行前期的一些准备工作,比如载入并构建应用的 bootstrap 实例
	 * 运行应用需要显示调用 Jaf::App()->run(),比如在应用的 bootstrap 方法中执行 Jaf::App()->run()
	 * 初始化实际是在init方法完成后批量执行以 _init 开头的方法,按定义次序进行
	 * @param string $confile 初次调用必须给出配置文件绝对路径
	 * @param string $section 配置文件中采用的段,如果没设定将采用
	 */
	public static function App($confile,$section){
        if (!isset(self::$instance)) {
        	spl_autoload_register('Jaf::JafLoader');
        	$conf=self::init($confile,$section);
	        self::$instance = new Jaf() ;
        	self::$App = Jaf\Application::getInstance($conf);	        
			foreach (get_class_methods ( self::$instance ) as $method) {
				if( 0===strpos( $method, '_init' ) )
					if( false===self::$instance->$method() )
						break;
			}
        }
        return self::$App;
	}
	/**
	 * 一切从BootStrap开始,这是启动App的另一种方法
	 * 载入配置和app->run()都在BootStrap 类中控制
	 * 加载配置是 BootStrap 应该确定的第一件工作
	 */
	public static function BootStrap( $file ){
		if (!isset(self::$instance)) {
			spl_autoload_register('Jaf::JafLoader');
			if($file and is_file($file)){
				require_once $file;
			}
			self::$instance = new Jaf() ;
		}
	}
	/**
	 * Jaf 类库自动载入
	 */
	protected static function JafLoader($class) {
		if (0===stripos($class, 'Jaf\\')){
			$cls = substr($class,4);
		}elseif(0===stripos($class, 'Jaf_')){
			$cls = $class;
		}else{
			return;
		}
		$file =__DIR__.'/'.preg_replace('#_#','/', $cls,1 ).'.php';
		if(is_file($file)){
			try {
				require $file;	
			} catch (Exception $e) {
				throw $e;
			}
			if( !class_exists($class,false) and 
				!trait_exists($class,false) and 
				!interface_exists($class,false))
				throw new Jaf\Exception_LoadFailed( "类加载错误: $class 未定义 in $file" );
		}else{
			throw new Jaf\Exception_LoadFailed( "类加载错误: 未定义文件 $file" );			
		}
		return;
	}
	/**
	 * 内部初始化,检查配置的可执行性
	 * @note 初始化是在所有 Jaf 类构造实例之前,只执行一次,如果失败,抛出异常
	 * @param string $confile 配置文件绝对路径
	 * @param string $section 生效的配置段
	 * @return array 提取后的生效配置
	 */
	protected static function init($confile='',$section=''){
		if( !class_exists('Jaf\Exception_LoadFailed',false) ){
			$file = __DIR__.'/Exception/LoadFailed.php';
			try {
				require $file;
			} catch (Exception $e) {
				throw new Exception( '初始化错误:'.$e->getMessage(),500,$e );
			}
			if( !class_exists('Jaf\Exception_LoadFailed',false) )
				throw new Exception( '初始化错误: Jaf\Exception_LoadFailed 未定义 in '.$file,500,$e );
		}
		if(!$confile or !is_file($confile)){
			throw new Exception( '初始化错误:运行需要一个有效的配置文件'.$confile );
		}
		//配置加载,目前仅支持php 数组配置
		$conf = include($confile);
		if( !$conf or !$conf['application'] or !$conf['application']['directory'] or !is_dir($conf['application']['directory'])){
			throw new Exception( '初始化错误:无效配置' );
		}
		self::$config = $conf;
		//合并配置段
		if ($section) {
			$conf = $conf[$section];
			if( $pos=strpos(':', $section) ){
				$pos = trim(substr($section, $pos+1));
				if( self::$config[$pos] )
					$conf = array_merge(self::$config[$pos],$conf);
			}			
		}

		if( !class_exists('Bootstrap') and is_file($conf['application']['directory'].'/Bootstrap.php')){
			require $conf['application']['directory'].'/Bootstrap.php';
		}

		if( !class_exists('Bootstrap') ){
			throw new Exception( '初始化错误:未定 Bootstrap extends Jaf\Bootstrap_Abstract' );
		}

		if( !is_subclass_of('Bootstrap', 'Jaf\Bootstrap_Abstract') ){
			throw new Exception( '初始化错误: '.'Bootstrap 必须定义并继承自 Jaf\Bootstrap_Abstract' );
		}
		return $conf;
	}
	/**
	 * App已经生效后的内部初始化
	 * @return [type] [description]
	 */
	protected static function _init(){
		self::$conf = self::App()->getConfig();
	}
	/**
	 * 生成 Bootstrap 单例,执行 Bootstrap _init 方法
	 * 在app run之前运行,此时 app 单例已经生成
	 */
    protected function _initBootstrap() {
    	return Bootstrap::getInstance();
    }
    /**
     * 此时 bootstrap _init 已经执行完毕
     * @return [type] [description]
     */
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
	 * Jaf pathinfo,支持中文
	 * 该方法支持对 URL 的解析
	 * Jaf::Application 仅对 DOCUMENT_URI 进行了处理并保存至 $_SERVER['PATH_INFO']
	 * @note Jaf 的 pathInfo 结果与 php\pathinfo 略有不同
	 *   增加了query,fragment,scheme,host,uri,extension,相当于parse_url ,parse_str ,phpinfo 的合体
	 * @param string $uripath 一个以 / 进行分割的文件路径
	 * @return array @see php\pathinfo
	 */
	public static function pathInfo($uripath) {
		if(!$uripath) return [];
		$path = array ();
		$qpos = strpos($uripath, "#"); 
		if ($qpos!==false){
			$path['fragment']=substr($uripath, $qpos+1);
			$uripath = substr($uripath, 0, $qpos);
		}
		$qpos = strpos($uripath, "?"); 
		if ($qpos!==false){
			$path['query']=substr($uripath, $qpos+1);
			$uripath = substr($uripath, 0, $qpos);
			parse_str($path['query'],$path['query']);
		}
		$ofile=false;

		while ($ofile!==$uripath) {
			$ofile=$uripath;
			$uripath=str_replace(['\\','//'],'/',$ofile);
		}
		$paths = explode('/',$uripath);
		$uripath=[];
		for ($i=count($paths)-1; $i >=0 ; $i--) { 
			if($paths[$i]==='.') continue;
			if($paths[$i]==='..'){
				$i--;
				continue;
			}
			$uripath[]=$paths[$i];
		}
		$a=array_reverse($uripath);
		
		// URL 存储 uri
		if(in_array($a[0], ['http:','https:','ftp:'])){
			$path['scheme']=substr($a[0], 0,-1);
			$path['host']=$a[1];
			$path['uri']='/'.implode('/', array_slice($a,2));
		}		
		$path ['path']= implode('/', $a);
		$path ['filename']=array_pop($a);
		$pos=strrpos ( $path ['filename'],'.');
		$path ['basename'] = $pos===false?$path ['filename']:substr ( $path ['filename'], 0,$pos);
		$path ['extension'] = false!==$pos?substr ( $path ['filename'], $pos+1):'';
		$path ['dirname']=implode('/', $a);
		return $path;
	}
	/**
	 * 快捷方式 App->newController
	 */
	public static function newC( Jaf\Request_Abstract $req){
		return self::$App->newController($req);
	}
	/**
	 * 快捷方法 newAction
	 */
	public static function newA( Jaf\Controller_Abstract $c,$actionName,array $params){
		return new Jaf\Action($c,$actionName,$params);
	}	
	/**
	 * 快捷方式 App->pushAction
	 */
	public static function pushA( Jaf\Action_Abstract $action){
		return self::$App->pushAction($action);
	}
	/**
	 * 快捷方式 newA >>> pushA
	 */
	public static function pushNA( Jaf\Controller_Abstract $c,$actionName,array $params=[]){
		return self::$App->pushAction( new Jaf\Action($c,$actionName,$params) );
	}
	/**
	 * 快捷方式 App->dispatch
	 */
	public static function dispatch( Jaf\Request_Abstract $req){
		return self::$App->dispatch($req);
	}
	/**
	 * 快捷方法 new Response_Simple
	 */
	public static function newRes( $viewName,$data){
		return new Jaf\Response_Simple($viewName,$data);
	}
	/**
	 * 快捷方式 App->pushResponse
	 */
	public static function pushRes( Jaf\Response_Abstract $res){
		self::$App->pushResponse( $res );
		return $res;
	}
	/**
	 * 快捷方式 App->getResponse
	 */
	public static function getRes( $id ){
		return self::$App->getResponse( $id );
	}	
	/**
	 * 快捷方法 View_Simple 渲染
	 */
	public static function view(Jaf\Response_Abstract $res,$method){
		static $view,$viewMethod;
		$conf=self::App()->getConfig();
		if(!$view){
			$view = new Jaf\View_Simple();
			$viewMethod = $conf['view']['method']?:'display';
		}
		if(!$method)
			$method = $viewMethod;
		$view->setBasePath($conf['application']['directory'].'/views');
		return $view->{$method}($res->viewName,$res->data);
	}
	public static function viewDisplay(Jaf\Response_Abstract $res){
		self::view( $res,'display');
	}
	public static function viewRender(Jaf\Response_Abstract $res){
		self::view( $res,'render');
	}

}
