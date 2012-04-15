<?php
namespace Jaf;
abstract class Plugin_Abstract {
	public function routerStartup ( $request, $response){}
	public function routerShutdown ( $request, $response){}
	public function dispatchLoopStartup ( $request, $response){}
	public function dispatchLoopShutdown ( $request, $response){}
	public function preDispatch ( $request, $response){}
	public function postDispatch ( $request, $response){}
	public function preResponse ( $request, $response){}
}