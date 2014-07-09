define(['jquery', 'CMS'], function ($, CMS) {
	return {
		init: function () {
			$('.mycompany_textfield').on('click', function(){
				var unitId     = $(this).attr('id');
				var anchorName = CMS.get(unitId).formValues.anchorName.value
			});
		}
	};
});