define(['jquery', 'CMS', 'rz_root/notlive/js/baseJsModule'], function ($, CMS, JsModule) {
	return JsModule.extend({
		// alert when the user changed the form field 'anchorName'
		onFormValueChange: function (cfg) {
			if (cfg.key === 'anchorName') {
				alert(cfg.unitId);
			}
		},

		// alert when the user selects your module
		onUnitSelect: function (cfg) {
			alert(cfg.unitId);
		}
	});
});