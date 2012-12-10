<?php
namespace Jaf;
/**
 * 应用控制主体
 */
final class Application {
	use Trait_Instance,Trait_Prefix_Run;
	protected $conf ;
	protected $runing;		//运行期存储的数据
	protected $requests=[];//请求队列,生成控制器
	protected $actions=[];//Action队列,有控制器生成
	protected $responses=[];//响应
	protected $callbacks=[];//后期处理
	/**
	 * 构造
	 * @param string $conf 配置文件绝对路径,必须给出
	 * @param string $section 配置文件中采用的段,如果没设定将采用
	 */
	private function __construct ( $conf){
		$this->conf=$conf;
	}
	/**
	 * app 开始执行
	 * @param  array  $conf 附加的配置项
	 * @return [type]       [description]
	 */
	public function run ( array $conf = []){
		if(null !== $this->runing ) return false;
		$this->runing = [];
		if($conf){
			$this->conf = array_merge($this->conf,$conf);
		}
		return $this->prefixRun();
	}
	/**
	 * 获取当前配置只读
	 */
	public function getConfig ( ){
		return $this->conf;
	}
	/**
	 * 设定路由
	 * @param array $routes [description]
	 */
	public function setRoutes(array $routes){
		$this->conf['routes'] = $routes;
	}

	public function getDispatcher ( ){
		return $this->dispatcher;
	}

	/**
	 * 生成控制器实例
	 * 如果没有配置控制器名称,默认使用 IndexController
	 * @note 在多个实例情况下,注意实例类相同,可能实例不同,可以把控制器定义成单例模式解决此问题
	 * Jaf 通过控制器是否有 getInstance 方法判断是否单例模式
	 * @param  Request_Abstract $req
	 * @return [type]                    [description]
	 */
	public function newController(Request_Abstract $req){
		$this->runing['reqModel'] = $req->getModel();
		$ns = $this->runing['appns'];
		$dir = $this->runing['appdir'];
		$libs = $this->runing['applib'];
		$moduleName = $this->runing['reqModel']['module']?:'';
		$controllerName = $this->runing['reqModel']['controller']?:'Index';
		if ($moduleName) {
			$f = "$dir/modules/$moduleName/Controller/$controllerName";
		}elseif( substr($controllerName, 0,1) ==='/' ){
			//绝对路径
			$f = $controllerName;
		}else{
			//相对路径
			$f = "$dir/Controller/$controllerName";
		}
		$f .= '.php';
		$class = ($ns ? $ns .'\\' : ''). $controllerName .'Controller';
		$this->runing['activeFile'] = $f;
		$this->runing['activeClass'] = $class;
		//支持单例模式
		if(method_exists($class,'getInstance')){
			return $class::getInstance($req);
		}
		return new $class($req);
	}
	/**
	 * Action 入队列
	 * @param  Action_Abstract $action
	 * @return
	 */
	public function pushAction( Action_Abstract $action ){
		$this->actions[]=$action;
	}
	/**
	 * Response 入队列
	 * @param  Response_Abstract $res
	 * @return
	 */	
	public function pushResponse( Response_Abstract $res){
		$res->setId($id=count($this->responses));
		$this->responses[$res->getId()]=$res;
	}
	/**
	 * 获取指定id的响应
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function getResponse( $id ){
		return $this->responses[$id];
	}
	/**
	 * 获取指定id的请求
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function getRequest( $id ){
		return $this->requests[$id];
	}
	/**
	 * 在结束时调用 $callback
	 * @param  function $callback [description]
	 * @return [type]             [description]
	 */
	public function pushEnd( $cb ,$param_arr=[]){
		$this->callbacks[]=[$cb,$param_arr];
	}
	/**
	 * 应用类加载器
	 * @return [type] [description]
	 */
	private function appLoader($clas){
		if($clas===$this->runing['activeClass'] and is_file($this->runing['activeFile'])){
			$f=$this->runing['activeFile'];
			$this->runing['activeFile']=$this->runing['activeClass']='';
			require $f;
			return;
		}
		//加载应用中的其他类,支持 application.directory 和 application.librarys 的搜索
		$ns=$this->runing['appns'];
		if($ns and 0!==stripos ($clas,"$ns\\")) return;

		$class=$ns?substr($clas,count($ns)+1):$clas;

		//application.directory
		//filenamePath 模式
		if(preg_match('#(.+)([A-Z][a-z]+)$#',$class,$match)){
			list(,$class,$path)=$match;
			$dir = $this->runing['appdir'];
			$f="$dir/$path/$class.php";
			if(is_file($f)){
				require $f;
				return;
			}
		}
		//pathPathPathFilename 模式
		if(preg_match_all('#[A-Za-z][a-z0-9]+#',$class,$match)){
			$dir = $this->runing['appdir'];
			$f=$dir.'/'.implode('/',$match[0]).'.php';
			if(is_file($f)){
				require $f;
				return;
			}
		}
		$libs = $this->runing['applib'];
		//application.librarys
		//librarys/clas/clas.php 模式
		foreach ($libs as $lib) {
			$f="$lib/$clas/$clas.php";
			if(is_file($f)){
				require $f;
				return;
			}
		}
	}
	/**
	 * 开始前的准备
	 */
	private function _run(){
		spl_autoload_register(array($this, 'appLoader'));
		$run = [];
		$_SERVER['PATHINFO']=$run['pathinfo'] = \Jaf::pathInfo($_SERVER['DOCUMENT_URI']);
		$run['requestParams'] = & $_REQUEST;
		$run['appns'] = $this->conf['application']['namespace']?:'';
		$run['appdir']= $this->conf['application']['directory'];
		$run['applib']= $this->conf['application']['librarys']?:[];
		$this->runing = $run;
	}
	/**
	 * 开始路由匹配
	 * Jaf 路由匹配是按配置中的顺序进行的
	 * 如果 conf 没有配置路由,使用 Uri 路由
	 * 由第一个匹配到的路由生成入口 request
	 */
	private function _runRouterStartup(){
		$run = & $this->runing;
		$routes = $this->conf['routes'];
		if(!$routes or !is_array($routes)){
			/**
			 * 如果没有配置路由,使用默认的 Uri 路由
			 */
			$routes=[
				'/'=>[
					'class'=>'Uri'
				]
			];
		}
		foreach ($routes as $match => $mca) {
			$class= $mca['class']?:'Uri';
			$p = substr($class, 0,1);

			if($p === '\\'){
				//绝对路径的class
			}elseif($p==='/'){
				//应用自定义路由
				$class='';
			}else
				$class='Jaf\Route_'.$class;
			$mca['module']=$mca['module']?:'';
			$mca['controller']=$mca['controller']?:'';
			$mca['action']=$mca['action']?:'';
			if( $RequestModel = $class::match($match,$mca,$run['pathinfo'],$run['requestParams'])) {
				//匹配成功,目前仅支持 Request_Simple
				$this->requests[]=new Request_Simple($RequestModel);
				return;
			}
		}
	}
	/**
	 * 结束路由匹配
	 * 如果没有匹配到路由,使用默认 Controller notMatchAction
	 */
	private function _runRouterShutdown(){
		if(!$this->requests){
			/**
			 * 没有匹配,产生默认 Controller notMatchAction
			 */
			$run = & $this->runing;
			$mca=['class'=>'Uri','module'=>null,'controller'=>'','action'=>'notMatch'];
			$route='Jaf\Route_Uri';
			if($RequestModel = $route::match('|/|',$mca,$run['pathinfo'],$run['requestParams'])) {
				$this->requests[]=new Request_Simple($RequestModel);
			}
		}
		
		if( !$this->requests ) return false;
	}
	/**
	 * 循环分发请求
	 * 虽然路由匹配只生成了一个入口请求
	 * 但是分发过程中控制器可以生成新的请求
	 */
	private function _runDispatch(){
		//dispatchLoopStartup
		$i = 0;
		$reqs = & $this->requests;
		while ($req=$reqs[$i]) {
			$req->setId($i++);
			if(false===$this->dispatch($req))
				break;
		}
		//dispatchLoopShutdown
	}
	/**
	 * 分发请求单体
	 * 根据请求构造控制器,控制器生成 Action 和新请求
	 * @param  Request_Abstract $req [description]
	 * @return boolean
	 */
	public function dispatch(Request_Abstract $req){
		//preDispatch
		$this->newController( $req );
		//postDispatch
	}
	/**
	 * 执行生成的 Actions
	 * Action 生成响应数据,响应数据要和视图绑定
	 */
	private function _runAction(){
		//actionLoopStartup
		$i = 0;
		$actions = & $this->actions;
		while ($action=$actions[$i++]) {
			if(false===$action->execute()){
				break;
			}
		}
		//actionLoopShutdown
	}
	/**
	 * 从响应得到输出
	 * 一般情况下响应就是一个渲染视图
	 */
	private function _runOut(){
		//preOut
		foreach ($this->responses as $key=>$res) {
			if(false===$res->getOut()){
				break;
			}
		}
		//postOut
	}
	/**
	 * 结束
	 * 一般而言,结束指的是响应已经发出,但是后台仍然可以做一些处理
	 */
	private function _runEnd(){
		foreach ($this->callbacks as $callback) {
			if(false=== call_user_func_array($callback[0],$callback[1]) ){
				break;
			}
		}
	}
}
