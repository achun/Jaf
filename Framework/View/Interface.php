<?php
namespace Jaf;
/**
 * 视图接口
 */
interface View_Interface {
	public function render();
	public function display();
	public function getBasePath();
	public function setBasePath($basepath);
	public function genFilePath($fileName);
}