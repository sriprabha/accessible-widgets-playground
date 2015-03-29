$(function(){
	$('.nav').setup_navigation();
});

$.fn.setup_navigation = function(settings) {
	settings = jQuery.extend({
		menuHoverClass: 'show-menu',
	}, settings);
	
	//setting role=presentation
	$(this).find('> li > ul >li').attr('role','presentation');

	//setting aria info
	$(this).find('> li > ul').attr('aria-hidden','true');

	// Set tabIndex to -1 so that links can't receive focus until menu is open
	$(this).find('> li > a').next('ul').find('a').attr('tabIndex',-1);
	
	//settings attributes on hover and on focus
	$(this).find('> li > a').hover(function(){
		$(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);
		$(this).next('ul').attr('aria-hidden','false');
	});
	$(this).find('> li > a').focus(function(){
	
		$(this).closest('ul').find('.'+settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1);
		$(this).next('ul').attr('aria-hidden','false')
			.addClass(settings.menuHoverClass)
			.find('a').attr('tabIndex',0);

	});
		
	
}