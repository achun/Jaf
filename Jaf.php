<?php
/**
 * # Just Another Framework
 * 
 * ## Jaf 的思想来自 Laruence 的 [Yaf] (http://yaf.laruence.com/manual/index.html)
 * 
 * @note 虽然 Jaf 源自 Yaf,但是 Jaf 并不追求与 Yaf 完全兼容  
 * @license under the [Creative Commons 3.0 BY](http://creativecommons.org/licenses/by/3.0/)  
 * @author  achun (achun@qq.com)  
 */
namespace Jaf;

/**
 * 
 */
class Jaf {

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
if(!function_exists('Jaf\autoload')){
	/**
	 * Jay 自己的类库自动载入
	 */
	function autoload($class) {
		if (0!==stripos($class, 'Jaf\\')) return false;
		$file =__DIR__.'/'.preg_replace('#_#','/', substr($class,4),1 ).'.php';
		if(!file_exists($file)){
			return;
		}
		require_once($file);
	}
	spl_autoload_register('Jaf\autoload');
}
if( !class_exists('Bootstrap') and file_exists(APP_PATH.'/Bootstrap.php')){
	require_once APP_PATH.'/Bootstrap.php';
}
if( class_exists('Bootstrap') and 
	is_subclass_of('Bootstrap', 'Jaf\Bootstrap_Abstract')){
	\Bootstrap::_bootstrap('Bootstrap');
}

