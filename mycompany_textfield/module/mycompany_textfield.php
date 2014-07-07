<?php
namespace Rukzuk\Modules;

class mycompany_textfield extends SimpleModule {

	/**
	 * @param $renderApi
	 * @param \Render\Unit $unit
	 * @param \Render\ModuleInfo $moduleInfo
	 */
	public function renderContent($renderApi, $unit, $moduleInfo)
	{
		echo "<div><span>My Text</span></div>";
		$renderApi->renderChildren($unit);
	}
}
