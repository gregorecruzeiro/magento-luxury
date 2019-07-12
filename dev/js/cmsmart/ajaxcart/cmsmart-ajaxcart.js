$j(function($) {
	if (typeof CMSMART == 'undefined') CMSMART = {};
	CMSMART.ajaxcart = {
		'button': $('a.gbtn[onclick^=setLocation]')

	};
	var favicon = new Favico({
		position  :'up',
		animation :'popFade',
		bgColor   :'#dd2c00',
		textColor :'#fff0e2'
	});
	function showFaviconBadge() {
		var lx_qty = $('.count_new').html() ;
		favicon.badge(lx_qty);
	};
	var wd = $(window).width(); 
	var wh = $(window).height();
	var ajdropHide = true; //can hide drop down cart?
	var linkcart = $(cartlinkclass);
	var pos_lc = linkcart.offset();
	var myajaxcart = baseUrlAjax + 'ajaxcart/index/index/id/';
	var urladdajaxcart =  baseUrlAjax + 'ajaxcart/index/index/';
	var checkouturl =  baseUrlAjax + 'checkout/cart/add/';
	var ajopacity = '<div id="ajopacity"></div>';
	function urlajaxcart(mypath){
		if(mypath){
			//if(mypath[mypath.length-1]=="/") mypath = mypath.substring(0,mypath.length-1);
			if(mypath.charAt(mypath.length-1)=="/") mypath = mypath.substring(0,mypath.length-1);
			return mypath.split('/').pop();
		}
		return '';	

	}
	
	$('body').append('<a id="ajaxcartloading"></a>');
	
	var ajaxcartmsg = $("#ajaxcartmsg");
	var ajaxallct = $("#ajaxallct");
	ajaxallct.click(function(e){
		if($(e.target).is('#ajaxcartmsg, #ajaxcartmsg *')) return;
		ajaxallct.hide();

	});
	ajaxcartmsg.css('max-height', (wh - 60) + 'px');
	ajmsgc = $('#ajaxcartmsgc');

	
	//linkcart.after('<div id="ajaxcart" class="ajaxcart"></div>');
	/* $('.ajaxcartbl').appendTo($('#ajaxcart')); *///04-01-16
        
        
	var ldajaxcart = $("#ajaxcartloading");
	var ajSi = $('#ajaxscicon').size();
	var ajSip = $('#ajaxscicon').offset();
	//$(window).resize()
	ldajaxcart.css('top', ($(window).height() / 2 - ldajaxcart.height() / 2) + "px");
	ldajaxcart.css('left', ($(window).width() / 2 - ldajaxcart.width() / 2) + "px");
	var hoveritem = 1;
	
	$('#ajaxscicon').append('<br/><div class="upajax">&nbsp;</div>');
	linkcart.after('<div class="upajax">&nbsp;</div>');
	change_action('#product_addtocart_form');	
	var	upajax = $('.upajax');
	var prajax = linkcart.parent('ul.links li');
	linkcart.mouseover(function(e) {
		if($("#ajaxcart").css('display') == 'block' && hoveritem == 1) return;
		$("#ajaxcart").css('position', 'absolute');
		hoveritem = 1;
		$('.upajax ').hide();
		$('.upajax ', prajax).show();
		if(($("#ajaxcart").width() + linkcart.eq(0).offset().left) > $(window).width()){
			$("#ajaxcart").css('right', '10px');
		}else{
			$("#ajaxcart").css('left', (linkcart.eq(0).offset().left - 110) + 'px');
		}
		
		$("#ajaxcart").css('top', (linkcart.eq(0).offset().top + $(this).height() + 14) + 'px');
		//$("#ajaxcart").fadeIn(300);
		$("#ajaxcart").slideDown(500);
		ajdropHide = false;
	});
	
	//Close PopUp
	$('#cmsmart_ajaxcart_button_close').click(function(e){
		ajaxallct.hide(); 
	});
	
	$('body').click(function(e){ 
		if($(e.target).is('#ajaxcart, #ajaxcart *')) return;
		if($(e.target).is('#ajaxscicon, #ajaxscicon *')) return;
		if($(e.target).is(cartlinkclass)) return;
		$('.upajax ').hide();
		$("#ajaxcart").fadeOut(300); 
	});
	//icon cart action
	
	$('#ajaxscicon').mouseover(function(e) {
		var topic = $('#ajaxscicon').offset().top;
		if($("#ajaxcart").css('display') == 'block' && hoveritem == 2) return;
		hoveritem = 2;
		$('.upajax ').hide();
		$('.upajax ', $(this)).show();
		var os = $(this).offset();
		var ajc = $("#ajaxcart");
		ajc.fadeOut(1);
		if(os.left < wd/2)
		{
			ajc.css('left', os.left + 'px');
		}
		else
		{
			ajc.css('left', (os.left + $(this).width() - ajc.width()  + 5) + 'px');
		}		
		if(topic < wh/2) {
			//ajc.css('top', (os.top + $(this).height() + 14)+ 'px');
			ajc.css('top', (ajSip.top + $(this).height() + 14)+ 'px');
		}else{
			ajc.css('top', (ajSip.top - ajc.height() - 15) + 'px'); 
		}
				$("#ajaxcart").css('position', 'fixed');
		//upajax.css('margin-left', (os.left - ajc.offset().left - 35)+ 'px');	
		ajc.fadeIn(400);
		//$("#ajaxcart").slideDown(500);
	});
	
	CMSMART.ajaxcart.button.each(function(){
		var ocl = $(this).attr('onclick').replace("setLocation('", "").replace("')", "").replace("?options=cart", "");
		$(this).attr('data', ocl);
		ocl = ocl.split('form_key').shift();

		$(this).attr('onclick', 'return false;');
		
		$(this).click(function(e){
			console.log("teste");
			$(".ajaxcartanimate").css('top', $(this).offset().top + 'px');
			$(".ajaxcartanimate").css('left', e.clientX + 'px');
			$(this).parentsUntil('li.item').parent().find('img').eq(0).clone().appendTo($(".ajaxcartanimate").html(''));	
			ajpath = urlajaxcart(ocl);
			ldajaxcart.css('display', 'block');
			ldajaxcart.css('top', (e.clientY - ldajaxcart.height() / 2) + "px");
			ldajaxcart.css('left', (e.clientX - ldajaxcart.width() / 2) + "px");
			//tryFly();
			$.ajax({
				url: myajaxcart + encodeURIComponent(ajpath),
				cache: false
			}).done(function( data ) {
				/* console.log("test 1"); */
				ldajaxcart.css('display', 'none');
				var getData = $.parseJSON(data);
				/* if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
				if(getData.ajaxCountItem) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
				if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar);
				if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart);*/
				/* fixcode */
				$('#lx-popup-message-content').html(getData.lx_msg);
				$j('.lx-popup-message').removeClass('lx-popup-message-hidden');
				//console.log("teste 01");
				
				if(getData.ajaxCountItem) jQuery('.count_new').html(getData.ajaxCountItem);
				if(getData.ajaxcart) $("#header-cart").html(ajopacity + getData.ajaxcart);
				showFaviconBadge();
				if(getData.ajaxcartmsg) {

					ajmsgc.html(getData.ajaxcartmsg);
					/* ajaxallct.css('display', 'block'); */ //4/1/16
					autoct(ajaxcartmsg);
					change_action('#product_addtocart_form');
          //console.log("test 2");                   
					
				}else{
					if(getData.ajaxcontinue){
						ajmsgc.html(getData.ajaxcontinue);
						ajaxallct.css('display', 'block');
						ajaxallct.addClass('ajaxcontinue');
						autoct(ajaxcartmsg);
						$('button.closemsg').click(function(){ ajaxallct.hide(); });
						ajaxallct.delay(4500).fadeOut(200, function() {
							ajaxallct.removeClass('ajaxcontinue');

						});
						/* console.log("test 3"); */
					}	
					AjReloadAll();
					aj_s2();
				}
			});
			return false;
		});
	})

	var wishlistfm = $('form#wishlist-view-form');
	//wishlist form
	if(wishlistfm.size() > 0){
		
		//update form per item
		$('button.btn-cart', wishlistfm).each(function(){ $(this).attr('onclick', '');});
		
		$('button.btn-cart', wishlistfm).click(function(e){
			$(".ajaxcartanimate").css('top', $(this).offset().top + 'px');
			$(".ajaxcartanimate").css('left', e.clientX + 'px');
			pritem = $(this).parentsUntil('tr').parent();
			pritem.find('a.product-image img').eq(0).clone().appendTo($(".ajaxcartanimate").html(''));
			lk = $('a', pritem).eq(0);
			ajpath = urlajaxcart(lk.attr('href')) + '?qty=' + $('input.qty', pritem).eq(0).val();
			ldajaxcart.css('display', 'block');
			ldajaxcart.css('top', (e.clientY - ldajaxcart.height() / 2) + "px");
			ldajaxcart.css('left', (e.clientX - ldajaxcart.width() / 2) + "px");
			tryFly();
			$.ajax({
				url: myajaxcart + ajpath,
				cache: false
			}).done(function( data ) {
				ldajaxcart.css('display', 'none');
                                
				var getData = $.parseJSON(data);
				if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
				if(getData.ajaxCountItem) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
				/* if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar); *///04/01/16
				if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart);
				if(getData.ajaxcartmsg) {
					ajmsgc.html(getData.ajaxcartmsg);
					ajaxallct.css('display', 'block');
					autoct(ajaxcartmsg);
					change_action('#product_addtocart_form');
					
				}else{
					if(getData.ajaxcontinue){
						ajmsgc.html(getData.ajaxcontinue);
						ajaxallct.css('display', 'block');
						ajaxallct.addClass('ajaxcontinue');
						autoct(ajaxcartmsg);
						$('button.closemsg').click(function(){ ajaxallct.hide(); });
						ajaxallct.delay(1500).fadeOut(200, function() {
							ajaxallct.removeClass('ajaxcontinue');

						});
					}	
					AjReloadAll();
					aj_s2();
				}
			});
		});
		
	}
	
	//end wishlist form
	
//end install

	function AjReloadAll(){		
		
		//Update Qty all
		$('button.btajaxqtyall').click(function(e){
			var ajaxqty = '';
			$('input.ajaxqty').each(function() {
                ajaxqty += $(this).attr('name')+'=' + $(this).val() + '&';
            });
			ldajaxcart.css('display', 'block');
			ldajaxcart.css('top', (e.clientY - ldajaxcart.height() / 2) + "px");
			ldajaxcart.css('left', (e.clientX - 100 - ldajaxcart.width() / 2) + "px");
			ajop = $('#ajopacity');
			ajop.css('display', 'block');
			$.ajax({
				url: baseUrlAjax + 'ajaxcart/index/index/delete/udaj/',
				type: 'POST',
				data: ajaxqty,
				cache: false
			}).done(function( data ) {
				ldajaxcart.css('display', 'none');
				ajaxallct.css('display', 'none');
					
				var getData = $.parseJSON(data);
				if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart);
				if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
				if(getData.ajaxCountItem) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
				/* if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar); *///04/01/16
				ajop.css('display', 'none');
				AjReloadAll();
				aj_s();
			});
		});
		
		
		//Orther Action reload
		$('button.btajaxqty').click(function(e){
			var prev = $(this).prev();
			ldajaxcart.css('top', (e.clientY - ldajaxcart.height() / 2) + "px");
			//ldajaxcart.css('top', ($("#ajaxcart").offset().top + $("#ajaxcart").height()/2 - ldajaxcart.height() / 2) + "px");
			//ldajaxcart.css('left', (e.clientX - 50 - ldajaxcart.width() / 2) + "px");
			ldajaxcart.css('left', ($("#ajaxcart").offset().left + $("#ajaxcart").width()/2 - ldajaxcart.width() / 2) + "px");
			ldajaxcart.css('display', 'block');
			ajop = $('#ajopacity');
			ajop.css('display', 'block');
			$.ajax({
				url: baseUrlAjax + 'ajaxcart/index/index/delete/udaj/',
				type: 'POST',
				data: prev.attr('name')+'=' + prev.val(),
				cache: false
			}).done(function( data ) {
				ldajaxcart.css('display', 'none');
				ajaxallct.css('display', 'none');
					
				var getData = $.parseJSON(data);
				if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart);
				if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
				if(getData.ajaxCountItem) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
				/* if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar); *///04/01/16
				ajop.css('display', 'none');
				AjReloadAll();
				aj_s();
			});
		});
		
		$('a.ajrmbt').click(function() {
            ajaxcartDelItem($(this).attr('href'), ajaxConfirmMsgDelItem);
			return false;
        });
		
		$('button.ajetall').click(function() {
            ajaxcartDelItem($(this).val(), ajaxConfirmMsgEmpty);
			return false;
        });
	}
	
	
	AjReloadAll();
	
	//change action, and create action again when load data sucecced.
	function change_action(id){
		var  fsm = $(id);
		if(fsm && !(typeof productAddToCartForm == 'undefined')){
                
			productAddToCartForm.submit = function(button, url) {
        console.log("teste");
				if (this.validator.validate()) {
					var form = this.form;
					var oldUrl = form.action;
					if (url) {
					   form.action = url;
					}
					var e = null;
					try {
						//this.form.submit();
					} catch (e) {
					}
					this.form.action = oldUrl;
					if (e) {
						throw e;
					}
					if (button && button != 'undefined') {
						button.disabled = false;
					}
				}
			}.bind(productAddToCartForm);
                    
		if (fsm.attr('action')!== 'undefined') {
                   
                } else {
                   fsm.attr('action', fsm.attr('action').replace(checkouturl, urladdajaxcart));
                }
		//fsm.attr('action', fsm.attr('action').replace(checkouturl, urladdajaxcart));
                        $('button', fsm).click(function(e){

                        var checkrq = true;
                        var superpd = $('#super-product-table');
                        if(superpd.size() > 0){
                                var rq = true;
                                $('input', superpd).each(function(index, element) { 
                                if($(this).val() > 0) rq = false; else $(this).addClass('validation-failed');
                                });
                                if(rq) return;
                                }
                                $('.required-entry', fsm).each(function() {
                                if(!$(this).val()) checkrq = false;
                                });
				if(checkrq){
					$(".ajaxcartanimate").css('top', $(this).offset().top + 'px');
					$(".ajaxcartanimate").css('left', e.clientX + 'px');
					$('img#image').eq(0).clone().appendTo($(".ajaxcartanimate").html(''));
					tryFly();
					ldajaxcart.css('display', 'block');
					ldajaxcart.css('top', (e.clientY - ldajaxcart.height() / 2) + "px");
					ldajaxcart.css('left', (e.clientX - ldajaxcart.width() / 2) + "px");
				
					$.ajax({
						url: urladdajaxcart + "?" + fsm.serialize(),
						cache: false
					}).done(function( data ) {
						ldajaxcart.css('display', 'none');
						ajaxallct.css('display', 'none');	
						var getData = $.parseJSON(data);
						/* if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
						if(getData.ajaxCountItem) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
						if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar);
						if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart); */
						/* fixcode */
						if(getData.ajaxCountItem) jQuery('.count_new').html(getData.ajaxCountItem);
						if(getData.ajaxcart) $("#header-cart").html(ajopacity + getData.ajaxcart);
						//$(window).scrollTop(50);
						
							if(getData.ajaxcontinue){
								$('#lx-popup-message-content').html(getData.lx_msg);
								$j('.lx-popup-message').removeClass('lx-popup-message-hidden');
								
								//console.log('test 02');			
								ajmsgc.html(getData.ajaxcontinue);
								/* ajaxallct.css('display', 'block'); *///04/01/16
								ajaxallct.addClass('ajaxcontinue');
								autoct(ajaxcartmsg);
								$('button.closemsg').click(function(){ ajaxallct.hide(); });
								ajaxallct.delay(4500).fadeOut(200, function() {
									ajaxallct.removeClass('ajaxcontinue');

								});
								showFaviconBadge();
							}	
						AjReloadAll();
						aj_s2();
					});
				}
				return false;
			});
			fsm.submit(function(){ return false; });
		}
	}

	function aj_s(){ 
		if(ajSi == 0){
			$(window).scrollTop(50);
			$("#ajaxcart").show(300).delay(2500).fadeOut(200);
			//linkcart.mouseover();
		}
		
	}
	function aj_s2(){ $(window).scrollTop(50);
		//linkcart.mouseover();
		if(ajSi == 0){
			$(window).scrollTop(50);
			linkcart.mouseover();
			$("#ajaxcart").delay(2500).fadeOut(200);		
		}
	} 	
	//auto set middle position for html object 
	function autoct(o){	 
		 o.css('top', ($(window).height() - o.height()) / 2 + "px");
		 o.css('left', ($(window).width() - o.width()) / 2 + "px");
	 }
	 
	//Dellete item and empty cart.
	function ajaxcartDelItem(url, msg){
		if(confirm(msg)){
			ldajaxcart.css('display', 'block');	
			ajop = $('#ajopacity');
			ajop.css('display', 'block');
			$.ajax({
				url: url,
				cache: false
			}).done(function( data ) {
				ldajaxcart.css('display', 'none');
				ajaxallct.css('display', 'none');
					
				var getData = $.parseJSON(data);
				/* if(getData.ajaxcart) $("#ajaxcart").html(ajopacity + getData.ajaxcart);
				if(getData.ajaxSummaryCount) linkcart.html(getData.ajaxSummaryCount);
				if(getData.ajaxCountItem !== false) $('div#ajaxscicon > span').html(getData.ajaxCountItem);
				if(getData.ajaxsidebar) $('.sidebar .block-cart').html(getData.ajaxsidebar);*/				
				/* fixcode */
				if(getData.ajaxCountItem) jQuery('.count_new').html(getData.ajaxCountItem);
				if(getData.ajaxcart) $("#header-cart").html(ajopacity + getData.ajaxcart);
				ajop.css('display', 'none'); 
				AjReloadAll();
				//aj_s();
			});
		}
		return false;
	}
	 	 
	//fly to cart effect
	function tryFly(){
		return;
		/* if(ajSi > 0) pos_lc = $('#ajaxscicon').offset();
		$(".ajaxcartanimate").css('display', 'block');
		$(".ajaxcartanimate").animate({"left": (pos_lc.left - 80) + "px", "top": pos_lc.top + "px", opacity: "toggle"}, 1000);
 */	}
	
});