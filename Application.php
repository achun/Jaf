<?php
namespace Jaf;
final class Application {
	protected $config ;
	protected $dispatcher ;
	protected static $_app ;
	protected $_modules ;
	protected $_running ;
	protected $_environ ;
	protected $_err_no ;
	protected $_err_msg ;
	public function __construct ( $config, $envrion){}
	public function run ( ){}
	public function execute ( $entry /* , $... */){}
	static public function app ( ){}
	public function environ ( ){}
	public function bootstrap ( $bootstrap){}
	public function getConfig ( ){}
	public function getModules ( ){}
	public function getDispatcher ( ){}
	public function setAppDirectory ( $directory){}
	public function getAppDirectory ( ){}
	public function getLastErrorNo ( ){}
	public function getLastErrorMsg ( ){}
	public function clearLastError ( ){}
	public function __destruct (){}
	private function __clone (){}
	private function __sleep (){}
	private function __wakeup (){}
}