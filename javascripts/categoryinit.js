$(function () {
        $(".back").on("click", function () {
            window.history.go(-1);
        });
        // 侧栏切换样式
        $(document).on('click','.side-left a',function(){
            $(this).parent("li")
                .addClass('currentli')
                .siblings()
                .removeClass('currentli');
        });

        // 初始化
        var myScroll;
        function loaded () {
            myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });
        }
        loaded();
        document.addEventListener('touchmove', function (e) { 
            e.preventDefault(); 
        }, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        // 点击滚动到相应位置
        $(".tui").click(function() {
            myScroll.scrollToElement("#tuishow", 2500)
        })
        $(".tao").click(function() {
            myScroll.scrollToElement("#taoshow", 2500)
        })
        $(".jia").click(function() {
            myScroll.scrollToElement("#jiashow", 2500)
        })
        $(".dian").click(function() {
            myScroll.scrollToElement("#dianshow", 2500)
        })
        $(".wu").click(function() {
            myScroll.scrollToElement("#wushow", 2500)
        })
        $(".qing").click(function() {
            myScroll.scrollToElement("#qingshow", 2500)
        })
        $(".qi").click(function() {
            myScroll.scrollToElement("#qishow", 2500)
        })
        $(".yang").click(function() {
            myScroll.scrollToElement("#yangshow", 2500)
        })

        function isPassive() {
            var supportsPassiveOption = false;
            try {
                addEventListener("test", null, Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassiveOption = true;
                    }
                }));
            } catch(e) {}
            return supportsPassiveOption;
        }
        // myScroll顶部和底部回弹
        myScroll.on('scrollStart', function() {
            minY = this.y;
        });

        myScroll.on('scroll', function() {          
            minY = minY<this.y ? minY : this.y;
        });

        myScroll.on('scrollEnd', function() {
            minY = minY<this.y ? minY : this.y;
        });
})




