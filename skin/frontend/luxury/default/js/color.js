var skin_url = getSkinUrl();
jQuery(document).ready(function()
{	
	/* showFaviconBadge(); */
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

	jQuery("#pink").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/pink.css");
		return false;
	});

	jQuery("#black").on("click",function()
	{
		jQuery("#color").attr("href",skin_url + "css/color-schemes/black.css");
		return false;
	});

});