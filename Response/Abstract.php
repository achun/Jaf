<?php
namespace Jaf;
abstract class Response_Abstract {
	protected $_header ;
	protected $_body ;
	protected $_sendheader ;
	public function __construct (){}
	public function __destruct (){}
	private function __clone (){}
	private function __toString (){}
	public function setBody (){}
	public function appendBody (){}
	public function prependBody (){}
	public function clearBody (){}
	public function getBody (){}
	public function setHeader (){}
	protected function setAllHeaders (){}
	public function getHeader (){}
	public function clearHeaders (){}
	public function setRedirect (){}
	public function response (){}
}