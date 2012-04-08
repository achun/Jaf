<?php
namespace Jaf;
abstract class Action_Abstract extends Controller_Abstract {
	protected $_controller ;
	abstract public function execute (){}
	public function getController (){}
}