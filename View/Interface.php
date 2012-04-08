<?php
namespace Jaf;
/**
 * 视图接口
 */
interface View_Interface {
  public function assign ( $name, $value);
  public function display ( $tpl, $tpl_vars);
  public function getScriptPath ( );
  public function render ( $tpl, $tpl_vars);
  public function setScriptPath ( $template_dir);
}