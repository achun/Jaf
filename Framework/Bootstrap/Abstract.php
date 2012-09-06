<?php
namespace Jaf;
/**
 * Bootstrap 抽象类
 * 使用特征 Auto_Init 和 Instance
 * 当第一次使用 Jaf::App()的时候会被实例化并执行实例中 "_init" 开头的方法
 * 应用必须继承此类,并置于 application.directory/Bootstrap.php
 */
abstract class Bootstrap_Abstract {
	use Trait_Auto_Init,Trait_Instance;
}