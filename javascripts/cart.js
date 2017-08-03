$(function(){
        // 数量减
        $(".gd-decrease").click(function() {
                var t = $(this).parent().parent().find('.good-num');
                t.text(parseInt(t.text()) - 1);
                if (t.text() <= 1) {
                        t.text(1);
                }
                TotalPrice();
        });
        // 数量加
        $(".gd-increase").click(function() {
                var t = $(this).parent().parent().find('.good-num');
                t.text(parseInt(t.text()) + 1);
                if (t.text() <= 1) {
                        t.text(1);
                }
                if (t.text() >= 99) {
                        t.text(99);
                }
                TotalPrice();
        });
            
        // 点击商品按钮
        $(".check").click(function() {
                var goods = $(this).parents(".goodcart-cont").find(".check"); //获取本店铺的所有商品
                var goodsC = $(this).parents(".goodcart-cont").find(".check:checked"); //获取本店铺所有被选中的商品
                var Shops = $(".order-checkpic"); //获取全选按钮
                if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
                Shops.prop('checked', true); //店铺全选按钮被选中
                TotalPrice();
             
                } else { //如果选中的商品不等于所有商品
                // Shops.prop('checked', false); //店铺全选按钮不被选中
                Shops.prop('checked', false); //全选按钮也不被选中
                // 计算
                TotalPrice();
                // 计算
                }
        });
  
        // 点击全选按钮
        $(".order-checkpic").click(function() {
                if ($(this).prop("checked") == true) { //如果全选按钮被选中
                        $(".check").prop('checked', true); //所有按钮都被选中
                        TotalPrice();
                } else {
                        $(".check").prop('checked', false); //else所有按钮不全选
                        TotalPrice();
                }
                $(".order-checkpic").change(); //执行店铺全选的操作
        });
        //计算
        function TotalPrice() {
                var allprice = 0; //总价
                $(".goodcart-ls").each(function() { //循环每个店铺
                        var oprice = 0; //该类商品总价
                        var num = 0; // 该类商品数量
                        var price = 0; // 该类商品单价
                        var total = 0; // 单类商品的总价，未格式化

                        
                        if ($(this).find(".check").is(":checked")) { //如果该类商品被选中
                                // console.log($(this).parents(".goodcart-ls").find(".good-num").text());
                                num = parseInt($(this).find(".good-num").text()); //得到该类商品的数量
                                console.log(num)
                                price = parseFloat($(this).find(".good-t2").text()); //得到该类商品的单价
                                console.log(price)
                                total = price * num; //计算单类商品的总价
                        }
                        console.log('total:'+ total)
                        // oprice += total; //计算全部商品的总价
                        // $(this).parents(".shop-group-item").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价

                        oprice = parseFloat(total.toFixed(2)); //得到全部商品的总价
                        allprice += oprice;
                });
                $(".order-price").text(allprice.toFixed(2)); //输出全部总价,保留两位小数
        }
});
