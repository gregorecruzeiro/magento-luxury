jQuery(document).ready(function() {
	
	jQuery('.dropdown-menu li.level0').addClass('col-md-3 col-sm-6');
	jQuery('#mega-dropdown-slider ul li:first-child').addClass('active');
	jQuery(".picker_close").on("click",function()
		{
			jQuery("#choose_color").toggleClass("position");
		});
		
	jQuery('#back-to-top').click(function()
	{
		// When arrow is clicked
		jQuery('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});	
	jQuery('.s-filter').change( function() {
      location.href = jQuery(this).val();
    });
	jQuery('.lx-state-pro input').addClass('form-control');
	jQuery( "#account-nav-title" ).on( "click", function() {		
		var check = jQuery('#account-nav-content');
		if(check.css('display') == 'block'){			
			jQuery('#account-nav-title span').html('<i class="fa fa-chevron-down"></i>');
		}else{			
			jQuery('#account-nav-title span').html('<i class="fa fa-chevron-up"></i>');
		};
		jQuery( "#account-nav-content" ).toggle(500);
	});
	jQuery.ias({
        container : ".category-products",
        item : "div.products-grid",
        next : "a.next",
        pagination : '.pages',
        loader : img_load,
        triggerPageThreshold : 0
    });
	jQuery('.shopping-cart-table #shopping-cart-table  input.input-text.qty').focus(function(){
		//alert("ssss");
		jQuery(this).parent().find('button').show();
	});
	jQuery('.shipping-form #shipping-zip-form select#country').addClass('form-control minimal');
	jQuery('.shipping-form #shipping-zip-form select#region_id').addClass('form-control minimal');
	jQuery('.shipping-form #shipping-zip-form input#region').addClass('form-control');
	var width = jQuery( window ).width()/2 -200;
	var height = jQuery( window ).height()/2 -100;
	jQuery('.lx-popup-message').css({'left':width + 'px' ,'top': height + 'px'})
	jQuery('#lx-popup-message-close').on('click',function(){
		jQuery('.lx-popup-message').addClass('lx-popup-message-hidden');
		jQuery('#lx-popup-message-content').html('A quantidade solicitada não está disponível.');
	});
	jQuery('body').click(function(e){ 
		jQuery('.lx-popup-message').addClass('lx-popup-message-hidden');
		jQuery("#lx-popup-message-content").html("A quantidade solicitada não está disponível.");
	});
	jQuery('#multiship-addresses-table select').addClass('form-control');
	var screenW = jQuery(window).width();
	if(screenW > 1023){
		jQuery('.checkout-multishipping-address-newshipping .lx-div-fix').css({'width':'50%'});
		jQuery('.checkout-multishipping-address-newshipping #lx-div-addition').removeClass('no-display');
		jQuery('.checkout-multishipping-address-editshipping .lx-div-fix').css({'width':'50%'});
		jQuery('.checkout-multishipping-address-editshipping #lx-div-addition').removeClass('no-display');		
		jQuery('.checkout-multishipping-address-editaddress .lx-div-fix').css({'width':'50%'});
		jQuery('.checkout-multishipping-address-editaddress #lx-div-addition').removeClass('no-display');			
	} else {
		jQuery('.checkout-multishipping-address-newshipping .lx-div-fix').css({'width':'100%'});
		jQuery('.checkout-multishipping-address-editshipping .lx-div-fix').css({'width':'100%'});		
		jQuery('.checkout-multishipping-address-editaddress .lx-div-fix').css({'width':'100%'});		
	}
	jQuery('.checkout-multishipping-address-newshipping .lx-div-fix').addClass('col-md-6');
	jQuery('.checkout-multishipping-address-newshipping .col-main').addClass('container');
	jQuery('.checkout-multishipping-address-editshipping .lx-div-fix').addClass('col-md-6');
	jQuery('.checkout-multishipping-address-editshipping .col-main').addClass('container');
	jQuery('.checkout-multishipping-address-editaddress .lx-div-fix').addClass('col-md-6');
	jQuery('.checkout-multishipping-address-editaddress .col-main').addClass('container');	
	jQuery('#newsletter_popup_button').on('click',function(){
		jQuery('.fancybox-overlay').remove();
		jQuery('body').css({'overflow':'auto'});
	});
	jQuery('.toggle-to-reviews').on('click',function(){
		jQuery('.lx-form-add-review').fadeOut();
		jQuery('.lx-form-custom-review').toggle(500);
		jQuery('html, body').animate({
			scrollTop: jQuery("#reviews").offset().top
		}, 1000);			
	});
	jQuery('.toggle-to-review-form').on('click',function(){
		jQuery('.lx-form-custom-review').fadeOut();
		jQuery('.lx-form-add-review').toggle(500);
		jQuery('html, body').animate({
			scrollTop: jQuery("#reviews").offset().top
		}, 1000);		
	});
	jQuery('.dropdown-toggle').on('click',function(event){
		if(screenW > 1023) {
			event.stopPropagation();
		}
	});
	var skin_url = getSkinUrl();
	jQuery("#default").on("click",function()
	{
		jQuery("#color").attr("href", skin_url + "css/color-schemes/default.css");
		return false;
	});
	
	jQuery("#cyan").on("click",function()
	{
		jQuery("#color").attr("href", skin_url + "css/color-schemes/cyan.css");
		return false;
	});
	
	jQuery("#dark-blue").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/dark-blue.css");
		return false;
	});
	
	jQuery("#green").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/green.css");
		return false;
	});
	
	jQuery("#red").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/red.css");
		return false;
	});
	
	jQuery("#yellow").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/yellow.css");
		return false;
	});

	jQuery("#light-green").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/light-green.css");
		jQuery('.dial').trigger('configure',{"fgColor":"#64E294"});
		return false;
	});

	jQuery("#orange").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/orange.css");
		return false;
	});	
});
jQuery(document).on("click","#lx-checkout-1",function(){
	//alert('aaaaa');
	jQuery(this).parent().addClass('active');
	jQuery(this).parent().prevAll().removeClass('active');
	jQuery(this).parent().prevAll().addClass('active');
	jQuery(this).parent().nextAll().removeClass('active');
});
jQuery(document).on("click","#lx-checkout-2",function(){
	jQuery(this).parent().addClass('active');
	jQuery(this).parent().prevAll().removeClass('active');
	jQuery(this).parent().prevAll().addClass('active');
	jQuery(this).parent().nextAll().removeClass('active');
});
jQuery(document).on("click","#lx-checkout-3",function(){
	jQuery(this).parent().addClass('active');
	jQuery(this).parent().prevAll().removeClass('active');
	jQuery(this).parent().prevAll().addClass('active');
	jQuery(this).parent().nextAll().removeClass('active');
});
jQuery(document).on("click","#lx-checkout-4",function(){
	jQuery(this).parent().addClass('active');
	jQuery(this).parent().prevAll().removeClass('active');
	jQuery(this).parent().prevAll().addClass('active');
	jQuery(this).parent().nextAll().removeClass('active');
});
jQuery(document).on('load','#lx-checkout-2', function(){
	//alert('aaa');
});
jQuery(document).on("click",".product-box-inner ul > li:first-Child > a",function(event){
	//alert("aaaa");
	event.preventDefault();
	jQuery('.product-box-inner').magnificPopup({
		delegate: ' ul > li:first-Child > a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',				
		}
	});
	
});
/* jQuery( document ).on('click','.loading a', function(e) {
	$( ".category-box-main.new-categories" ).removeClass('animated slideInLeft');
	//$(".products-grid").removeClass('new-categories');
	$( ".category-box-main.new-categories" ).css( 'display','block' ).addClass("animated fadeInUp").delay( 7000 );
	//$(".loading").css("display","none");
	return false;
}); */