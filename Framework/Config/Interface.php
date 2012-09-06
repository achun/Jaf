<?php
namespace Jaf;
interface Config_Interface {
	public function get ();
	public function set ();
	public function readonly ();
	public function toArray ();
	public function save($to);
}