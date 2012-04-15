<?php
namespace Jaf;
final class Loader {
	protected $_local_ns ;
	protected $_library ;
	protected $_global_library ;
	private function __clone (){}
	private function __construct ( $local_library_path ){
		echo __METHOD__,$local_library_path;
	}
	private function __sleep (){}
	private function __wakeup (){}
	public function autoload ( $class_name){}
	public function clearLocalNamespace ( ){}
	public function getLibraryPath ( $is_global){}
	public function getLocalNamespace ( ){}
	public function isLocalName ( $class_name){}
	public function registerLocalNamespace ( $name_prefix){}
	public function setLibraryPath ( $library_path, $is_global){}
	public static function getInstance1 ( $local_library_path, $global_library_path){

	}
	public static function import ( $file){}
	use Traits_Instance;
}