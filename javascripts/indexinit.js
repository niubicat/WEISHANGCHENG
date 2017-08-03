;(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // autoplay: 5000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        paginationClickable :true,
        loop : true
    })

    // $(".head-loc, .point").on("click", function() {
    //     $(".head-loc").find("li").siblings().addClass("active");
    //
    //     $(".head-loc").find("li").on("click", function (e) {
    //         $("li:not(e.target)").removeClass("hid").addClass("active");
    //         $("li:eq(e.target)").siblings().removeClass("active").addClass("hid");
    //     })
    // })


})();


