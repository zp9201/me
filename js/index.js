$(function () {
    paopao();
    works();
    bindResize(document.getElementById('test'));
    changBg();
    navMove();
    tab();
    star();
    banner();
});
var pp = {
    pl: 0,
    color: ["ce4f6d", "ca4fce", "4f82ce", "4fce91", "ceca4f"],
    c: 0,
    step: 500
};
function paopao() {

    var html = '<div class="paopao iconfont fa fa-heart-o" style="left: ' + pp.pl + 'px;color: #' + pp.color[pp.c] + '"></div>';
    $(".pao").append(html);

    pp.c++;
    if (pp.c >= pp.color.length) {
        pp.c = 0;
    }

    pp.pl = Math.round(Math.random() * 100 / 3);


    $(".paopao").each(function () {

        if ($(this).index() % 2 == 0) {
            pp.step = 100;
        } else if ($(this).index() % 3 == 0) {
            pp.step = 200;
        } else {
            pp.step = 300;
        }

        if (!$(this).is(":animated")) {
            $(this).animate({
                    top: "-300px",
                    fontSize: "60px",
                    opacity: "0"
                }, (500 - pp.step) * 10,
                function () {
                    $(this).remove();
                })
        }
    });

    setTimeout(paopao, pp.step);
}

function works() {
    $("#btn01").click(function () {
        document.querySelector("div[class~=move]").style.animation = "move 15s linear infinite";
    })
    $("#btn02").click(function () {
        document.querySelector("div[class~=move]").style.animationPlayState = "paused";
    })
    $("#btn03").click(function () {
        document.querySelector("div[class~=move]").style.animationPlayState = "running";
    })
    $("#btn04").click(function () {
        document.querySelector("div[class~=move]").style.animation = "null";
    })
}

function bindResize(el) {

    var els = el.style,

        x = y = 0;
    $(el).mousedown(function (e) {

        x = e.clientX - el.offsetWidth,
            y = e.clientY - el.offsetHeight;

        el.setCapture ? (

                el.setCapture(),

                    el.onmousemove = function (ev) {
                        mouseMove(ev || event)
                    },
                    el.onmouseup = mouseUp
            ) : (

                $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
            )

        e.preventDefault()
    });

    function mouseMove(e) {

        els.width = e.clientX - x + 'px',
            els.height = e.clientY - y + 'px'
    }


    function mouseUp() {

        el.releaseCapture ? (

                el.releaseCapture(),

                    el.onmousemove = el.onmouseup = null
            ) : (

                $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
            )
    }
}

function changBg() {

    (function ($, h, c) {

        var a = $([]),

            e = $.resize = $.extend($.resize, {}),

            i,

            k = "setTimeout",

            j = "resize",

            d = j + "-special-event",

            b = "delay",

            f = "throttleWindow";

        e[b] = 250;

        e[f] = true;

        $.event.special[j] = {

            setup: function () {

                if (!e[f] && this[k]) {

                    return false;

                }

                var l = $(this);

                a = a.add(l);

                $.data(this, d, {

                    w: l.width(),

                    h: l.height()

                });

                if (a.length === 1) {

                    g();

                }

            },

            teardown: function () {

                if (!e[f] && this[k]) {

                    return false;

                }

                var l = $(this);

                a = a.not(l);

                l.removeData(d);

                if (!a.length) {

                    clearTimeout(i);

                }

            },

            add: function (l) {

                if (!e[f] && this[k]) {

                    return false;

                }

                var n;

                function m(s, o, p) {

                    var q = $(this),

                        r = $.data(this, d);

                    r.w = o !== c ? o : q.width();

                    r.h = p !== c ? p : q.height();

                    n.apply(this, arguments);

                }

                if ($.isFunction(l)) {

                    n = l;

                    return m;

                } else {

                    n = l.handler;

                    l.handler = m;

                }

            }

        };

        function g() {

            i = h[k](function () {

                    a.each(function () {

                        var n = $(this),

                            m = n.width(),

                            l = n.height(),

                            o = $.data(this, d);

                        if (m !== o.w || l !== o.h) {

                            n.trigger(j, [o.w = m, o.h = l]);

                        }

                    });

                    g();

                },

                e[b]);

        }

    })(jQuery, this);
    var w;
    $("#test").resize(function () {
        w = $("#test").outerWidth();
        if (w <= 600) {
            $("#test").css("background", "url('img/small.png') no-repeat top center/cover");
            $(".fa-mobile-phone").css("color", "yellow");
            $(".fa-tablet").css("color", "white");
            $(".fa-television").css("color", "white");
        }
        if (w > 600 && w <= 1000) {
            $("#test").css("background", "url('img/middle.png') no-repeat top center/cover");
            $(".fa-mobile-phone").css("color", "white");
            $(".fa-tablet").css("color", "yellow");
            $(".fa-television").css("color", "white");
        }
        if (w > 1000) {
            $("#test").css("background", "url('img/large.png') no-repeat top center/cover");
            $(".fa-mobile-phone").css("color", "white");
            $(".fa-tablet").css("color", "white");
            $(".fa-television").css("color", "yellow");
        }

        //console.log(w);
    })


}

function navMove() {
    $("#div #ul1 .li0 .div1").css("margin-top", "0px");
    var $L = $("#div #ul1 .li0");

    $(document).keydown(function (event) {
        //a65 s83 d68 f70 g71 h72 j74 k75 l76
        if (event.keyCode == 65) {
            playmusic(0);
        } else if (event.keyCode == 83) {
            playmusic(1);
        }
        else if (event.keyCode == 68) {
            playmusic(2);
        }
        else if (event.keyCode == 70) {
            playmusic(3);
        }
        else if (event.keyCode == 71) {
            playmusic(4);
        }
        else if (event.keyCode == 72) {
            playmusic(5);
        }

    });

    function playmusic(i) {
        $L.eq(i).children("div").stop().animate({marginTop: '-38px'}, 200);
        var a = i + 1 + ".ogg";
        $("audio").eq(i).attr("src", a);
        $L.eq(i).children("div").animate({marginTop: '0'}, 200, '', function () {
            $(this).children("div").css("margin-top", "0px");
        });
    }

    $.each($L, function (i) {
        $(this).hover(function () {
            $(this).children("div").stop().animate({marginTop: '-38px'}, 200);
            var a = i + 1 + ".ogg";
            $("audio").eq(i).attr("src", a);
        }, function () {
            $(this).children("div").animate({marginTop: '0'}, 200, '', function () {
                $(this).children("div").css("margin-top", "0px");
            });
        });
    });
}

function tab() {
    $("#ul1 > div").click(function () {
        var index = $(this).index();
        //console.log(index);
        $(".myDataContant > div")
            .eq(index)
            .addClass("current")
            .siblings()
            .removeClass("current");
    });
    //
    //$(".tab > li").mouseenter(function() {
    //    // 2. ����ǰ���Ԫ����� active�࣬�����Ƴ������ֵ�Ԫ�ص� active�ࣨ��ǰ�����л�Ч����
    //    $(this)
    //        .addClass("active")
    //        .siblings("li")
    //        .removeClass("active");
    //
    //    // 3. ��ȡ����ǰԪ�ص������ţ����������
    //    var index = $(this).index();
    //    // $(".products > div:eq("+index+")")
    //    $(".products > div")
    //        .eq(index)
    //        .addClass("selected")
    //        .siblings()
    //        .removeClass("selected");
    //});


}

function star() {
    var Timerr;

    function aa() {
        for (var i = 0; i < 4; i++) {
            var m = parseInt(Math.random() * 700 + 100);
            var j2 = parseInt(Math.random() * 300 + 1200);
            var j = parseInt(Math.random() * 1600 + 000);
            var j1 = parseInt(Math.random() * 300 + 300);
            var n = parseInt(Math.random() * 10 + (-10));
            $('.div01').prepend('<div><div><div><div><div></div></div></div></div></div>')
            $('.div01').children('div').eq(0).css({'left': j, 'top': n})
            $('.div01').children('div').eq(0).animate({'left': j - j1, 'top': $(window).height() + 20}, j2)

        }
    }

    aa();
    setInterval(function () {
        aa();
    }, 300)
    setInterval(function () {
        for (var jj = 0; jj < $('.div01>div').size() / 4; jj++) {
            $('.div01>div').eq($('.div01>div').size() - jj).remove();
        }

    }, 1000)
}

function banner() {
    /*第一步 需要操作的Dom*/
    //轮播大盒子
    var banner = document.querySelector(".mobileShow");
    //图片宽度/大盒子宽度
    var width = banner.offsetWidth;
    /*图片盒子*/
    var imageBox = banner.querySelector("div:first-child");
    //点盒子
    var pointBox = document.querySelector(".pointBox");
    console.log(pointBox);
    //所有的点
    var points = pointBox.querySelectorAll("span");
    // console.log(points);

    /*公用方法*/
    var addTransition = function () {
        imageBox.style.webkitTransition = "all .2s";
        /*兼容*/
        imageBox.style.transition = "all .2s";
    }
    var removeTransition = function () {
        imageBox.style.webkitTransition = "none";
        /*兼容*/
        imageBox.style.transition = "none";
    }
    var setTranslateX = function (X) {
        imageBox.style.webkitTransform = "translateX(" + X + "px)";
        /*加单位*/
        imageBox.style.transform = "translateX(" + X + "px)";
    }
    /*第二步 实现轮播功能*/
    //现在是第一张图片 前面有一张 所以为1；
    var index = 1;
    var timer = setInterval(function () {
        index++;
        /*调用公共方法*/
        addTransition();
        /*调用公共方法*/
        setTranslateX(-index * width);
    }, 1000)
    /*第三步当动画结束的时候 无缝的滚动和滑动*/
    itcast.transitionEnd(imageBox, function () {
        if (index >= 9) {
            index = 1;
            //瞬间定位 先去除过渡 在定位*/
            removeTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * width);
        }
        /*设置当前的点 */
        setpoint();
    });
    /*第四步 点盒子和图片对应*/
    var setpoint = function () {
        /*去除当前样式*/
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        /*但我们设置点的时候 是在动画结束的时候设置*/
        //因为图片index已重置 这里没有必要在重置点的index了 直接在上面重置图片里用就可以了 只需要匹配两个index
        /*图片index是0 9 点索引从0-7 索引图片1对应的是点0 图片2对应的是点1*/
        points[index - 1].className = "now";
    }
    /*第五步*/
    /*图片盒子能滑动 touch事件*/
    /*开始的 和 移动 x坐标*/
    var startX = 0;
    var moveX = 0;
    //移动的距离
    var distanceX = 0;
    /*是否滑动过*/
    var isMove = false;

    imageBox.addEventListener('touchstart', function (e) {
        /*清除定时器*/
        clearInterval(timer);
        startX = e.touches[0].clientX;

    });
    imageBox.addEventListener('touchmove', function (e) {
        isMove = true;
        /*有距离才是滑动过*/
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        /*在滑动时 不断给image盒子做定位 来达到滑动的效果*/
        /*定位的位置是当前图片的定位加上distance*/
        //清除过渡
        removeTransition();
        //设置当前的定位--当前位置加滑动距离
        setTranslateX(-index * width + distanceX);
    });
    /*谷歌模拟时会出现 在touchend时可能会丢失事件 所以用window接收*/
    window.addEventListener('touchend', function (e) {
        /*第六步*/
        // 4,当滑动的时候不超过一定的距离的时候 吸附回去
        // 5,当滑动的距离超过一定距离的时候 图片做相应滚动 左或右
        if (Math.abs(distanceX) > (width / 3) && isMove) {
            /*怎么判断上一张还是下一张---distanceX值*/
            if (distanceX > 0) {
                index--;
            } else {
                index++;
            }
            /*定位到当前index下面*/
            addTransition();
            setTranslateX(-index * width);

        } else {
            /*动画定位回去就是吸附回去*/
            addTransition();
            setTranslateX(-index * width);
        }
        /*重置所有值 重复利用的值都归初始值*/
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
        /*加定时器 先清除 完了复制是那个面定时器代码*/
        clearInterval(timer);

        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * width);
        }, 1000)
    });
}
window.itcast = {};
/*封装一个过渡结束transitionEnd事件*/
itcast.transitionEnd = function (dom, callback) {
    if (dom && typeof dom == "object") {
        dom.addEventListener('webkitTransitionEnd', function () {
            callback && callback();
        });
        dom.addEventListener('transitionEnd', function () {
            callback && callback();
        });
    }
}

