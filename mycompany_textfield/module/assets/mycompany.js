define(['jquery'], function ($) {
	return {
		init: function () {
			var mycompany = function(element){
				var elementId = $(element).prop('id');
				alert(elementId);
			};

			$('.mycompany_textfield').on('click', function(){
				$(this).addClass('mycompany_class');
				mycompany(this);
			});
		}
	};
});
