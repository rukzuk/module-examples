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
		$anchorName = $renderApi->getFormValue( $unit, 'anchorName' );
		echo "<div><span>{$anchorName}</span></div>";
		$renderApi->renderChildren($unit);
	}
}
