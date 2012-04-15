<?php
namespace Jaf;
/**
 * Bootstrap 抽象类
 * 使用特征 Auto_Init_Instance 和 Instance  
 * Jaf 会自动执行继承类中 "_init" 开头的方法  
 * 应用必须继承此类,如果继承类存放于 APP_PATH/Bootstrap.php,
 * 会被 Jaf 加载并执行 Bootstrap::getInstance()
 */
abstract class Bootstrap_Abstract {
	use Traits_Auto_Init_Instance,Traits_Instance;
}