

$(".wrap-link-service>a").bind("mouseenter",function () {
    $(this).children(".background-red").css("display","block");
    $(this).children(".wrap-img").css({"transform":"scale(1.1)","transition":"all 500ms"});
});

$(".wrap-link-service>a").bind("mouseleave",function () {
    $(this).children(".background-red").css("display","none");
    $(this).children(".wrap-img").css({"transform":"none","transition":"all 500ms"});
});

$(".override-img").bind("mouseenter",function () {
    $(this).children(".override-img>h2").css("color","black");
});

$(".override-img").bind("mouseleave",function () {
    $(this).children(".override-img>h2").css("color","white");
});

$(".hd-menu").bind("mouseenter",function () {
    $(this).children(".Dropdown").hide();
    $(this).children(".Dropdown").slideDown();
})
$(".hd-menu").bind("mouseleave",function () {
    $(".Dropdown").hide();
})
//long

// $(".test-display-sile").bind("mouseenter",function () {
//     $(".list-place").hide();
//     $(".list-place").slideDown();
// })
// $(".place").bind("mouseleave",function () {
//     $(".list-place").hide();
// })
//
// $(".service").bind("mouseenter",function () {
//     $(".list-service").hide();
//     $(".list-service").slideDown();
// })
// $(".service").bind("mouseleave",function () {
//     $(".list-service").hide();
// })
//
// $(".member").bind("mouseenter",function () {
//     $(".list-member").hide();
//     $(".list-member").slideDown();
// })
// $(".member").bind("mouseleave",function () {
//     $(".list-member").hide();
// })
//
// $(".blog").bind("mouseenter",function () {
//     $(".list-blog").hide();
//     $(".list-blog").slideDown();
// })
// $(".blog").bind("mouseleave",function () {
//     $(".list-blog").hide();
// })