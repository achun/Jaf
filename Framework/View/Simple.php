<?php
namespace Jaf;
final class View_Simple implements View_Interface {
	protected $_tpl_vars ;
	protected $_tpl_dir ;
	public function __construct ( $tempalte_dir, $options){}
	public function __isset ( $name){}
	public function get ( $name){}
	public function assign ( $name, $value){}
	public function render ( $tpl, $tpl_vars){}
	public function display ( $tpl, $tpl_vars){}
	public function assignRef ( $name, $value){}
	public function setScriptPath ( $template_dir){}
	public function getScriptPath ( ){}
	public function __get ( $name){}
	public function __set ( $name, $value){}
}