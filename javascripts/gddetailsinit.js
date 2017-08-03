
$(function () {
    // 遮罩层
    $(".good-cart-p2,  .good-cart-p3, .good-option").click(function () {
        $("html").css("position", "relative");
        $(".goodmask").css({
            "display":  "block",
            "z-index": 99
        });
        $(".goodshop").css({
            "display":  "block",
            "position": "absolute",
            "bottom": 0,
            "left": 0
        });
    })

    // 加入购物车弹窗
    $(".goodshop-del").click(function () {
        $("html").css("position", "");
        $(".goodmask").css({
            "display":  "none"
        });
        $(".goodshop").css({
            "display":  "none"
        });
    })

    // 商品加减
    // 数量减
    $(".goodshop-count-de").click(function() {
        var t = $(this).parent().find('.goodshop-count-num');
        t.text(parseInt(t.text()) - 1);
        if (t.text() <= 1) {
            t.text(1);
        }
    });
    // 数量加
    $(".goodshop-count-in").click(function() {
        var t = $(this).parent().find('.goodshop-count-num');
        t.text(parseInt(t.text()) + 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        if (t.text() >= 99) {
            t.text(99);
        }
    });

});

// 虚实卡切换
$(".goodshop-lei2").click(function () {
    if ($(".goodshop-lei3.xushi").length == 0) {
        $(".goodshop-lei2").toggleClass("xushi");
    } else {
        return;
    }
});

$(".goodshop-lei3").click(function () {
    if ($(".goodshop-lei2.xushi").length == 0) {
        $(".goodshop-lei3").toggleClass("xushi");
    } else {
        return;
    }
});

