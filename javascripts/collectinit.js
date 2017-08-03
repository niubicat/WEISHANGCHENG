$(".back").on("click", function () {
    window.history.go(-1);
});


// 点击商品按钮
$(".check").click(function() {
        var mycollects = $(this).parents(".mycollect-cont").find(".check"); //获取所有收藏
        var mycollectsC = $(this).parents(".mycollect-cont").find(".check:checked"); //获取被选中的收藏
        var mycollectcheck = $(".order-checkpic"); //获取本次所有收藏
         if (mycollects.length == mycollectsC.length) { //如果选中的商品等于所有商品
                mycollectcheck.prop('checked', true); //店铺全选按钮被选中
 
         } else { //如果选中的商品不等于所有商品
             mycollectcheck.prop('checked', false); //全选按钮也不被选中
         }
});

  // 点击全选按钮
$(".order-checkpic").click(function() {
        if ($(this).prop("checked") == true) { //如果全选按钮被选中
                $(".check").prop('checked', true); //所有按钮都被选中
        } else {
                $(".check").prop('checked', false); //else所有按钮不全选
         }
        $(".order-checkpic").change(); //执行店铺全选的操作
 });

// 删除按钮弹窗
$('.bt-submit').on('click',function(){
        var mycollectsC = $(".check").parents(".mycollect-cont").find(".check:checked"); //获取被选中的收藏
        if (mycollectsC.length == 0) {
            return;
        } else {
            // console.log($('.mycollect-win'))；
            $('.mycollect-win').show();
        }
})

$('.mycollect-cancle').on('click',function(){
    $('.mycollect-win').hide();
})
$('.mycollect-submit').on('click',function(){
    $(".check:checked").parent().parent().parent().parent().remove();
    $('.mycollect-win').hide();
})

