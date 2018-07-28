
$(document).ready(function () {
    $('#main-menu').slicknav();
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