

$('#main-menu').slicknav({
	label: '<i class="fa fa-bars" aria-hidden="true"></i>',
    closedSymbol: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    openedSymbol : '<i class="fa fa-angle-up" aria-hidden="true"></i>',
	duration: 200,
	closeOnClick : true,
	allowParentLinks  : true,
});


$('document').ready(function() {
    $('.main-heder .main-menu ul#main-menu > li > ul').css({'min-height': $('.main-heder .main-menu ul#main-menu > li > ul > li > ul').innerHeight()});
});


$(".search-here").click(function(){
    $(".search-form").addClass("show");
    $(".main-menu").addClass("rid-main-menu");
    $(".search-here").addClass("hide-search-here");
});

$(".fa-times").click(function(){
    $(".search-form").removeClass("show");
    $(".main-menu").removeClass("rid-main-menu");
    $(".search-here").removeClass("hide-search-here");
});