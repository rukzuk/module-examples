DynCSS.defineModule('mycompany_textfield', function (api, v, context) {
	return {
		// this gets applied to the module itself
		color: api.getColorById(v.cssBackgroundColor),

		// these styles are for child elements with the class "anchor"
		'& > .anchor': {
			textAlign: v.cssVisualHelperValign,
			backgroundImage: 'url(' + api.getImageUrl(v.cssBackgroundImage, v.cssBackgroundImageSize) + ')'
		}
	};
});