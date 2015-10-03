//ヘッダーニューステキストを過ぎたらTOP0
$(function () {
    var news = $(".information-news_text").outerHeight();
    var header = $("#dyn-header-top");
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if ($(this).scrollTop() > news) {
            header.css("top", 0);
        } else {
            header.css("top", "initial");
        }

    });
});

//詳細ページ
$(function () {
//詳細ページ画像の位置を画面サイズで変更する
    var $win = $(window);
    $win.resize(function () {
        var winW = $(window).width();
        var minW = 1350;
        var maxW = 1287;
        var minleft = 1350 - winW;
        var ditail_img = $(".detail_larger-image-area_list");
        if (winW <= minW && winW >= maxW) {
            ditail_img.css({
                "position": "relative",
                "left": -minleft + "px"
            });
        } else if (winW <= maxW) {
            ditail_img.css({
                "position": "relative",
                "left": -87 + "px"
            });
        } else if (winW >= minW) {
            ditail_img.css({
                "position": "initial",
                "left": "initial"
            });
        }
    });
//    ナビゲーションが画像の下までスクロールしたら固定
    var headerH = $(".information-news_text").height() + 105;
    var imgH = $(".detail_larger-image-area").height();
    var fixed = $("#dyn-header-top,.detail_cart-descr-area,.detail_descr-area");
    var stopH = headerH + imgH;
    $(window).scroll(function () {
        var winH = $(window).height();
        var scroll = $(window).scrollTop();
        var stopscroll = winH + scroll;
        if (stopscroll < stopH) {
            fixed.addClass("fixed");
        } else {
            fixed.removeClass("fixed");
        }
    });
//    ズーム用詳細ページスライドショー
    $(document).ready(function () {
        $('.__detail .b-bxslider').bxSlider({
            auto: false,
            pager: true,
            //easing: 'easeOutBounce',
            pagerCustom: '.bx-pager',
//            全て読込が終わったら処理
            onSliderLoad: function (currentIndex) {
                $(this).children("li").click(function () {
                    $(this).addClass("active");
                    $('body').addClass("detail-zoom");
                    var zoom_H = $(".detail-zoom .detail_larger-image-area .bx-viewport");
                    var winH = $(window).height();
                    var headerH = $(".information-news_text").height() + 105;
                    var zoom_scroll = winH - headerH;
                    zoom_H.css({
                        "cssText": 'height:' + zoom_scroll + 'px !important;'
                    });
                });
//                サムネイルがクリックされたら処理
                $('body').on('click', '.detail_slider_thumbnail a', function () {
                    var currentIdx = $(this).attr('data-slide-index');
                    var bigimg = $(".detail_larger-image-area_list li");
                    $('.detail_slider_thumbnail a').removeClass('active');
                    $(this).addClass('active');
                    bigimg.removeClass('active');
                    bigimg.eq(currentIdx).addClass('active');
                });
//                クローズボタンが押されたら
                var zoom_H = $(".detail_larger-image-area .bx-viewport");
                var bigimg = $(".detail_larger-image-area_list li");
                var close = $(".zoom.__close");
                close.on('click', function (e) {
                    $('body').removeClass("detail-zoom");
                    bigimg.removeClass('active');
                    zoom_H.css({
                        "cssText": 'height:' + "auto" + 'px !important;'
                    });
                });
            }
        });
    });
});


//詳細ページサイズ選択されている値のliにClassを付与
//$(function () {
//    var select = $(".size_size-box_list input[name=size]:checked");
//    select.parent("li").addClass("check");
//    var sizelist = $(".size_size-box_list li");
//    sizelist.click(function () {
//        var chack = $(this).children("input");
//        sizelist.removeClass("check");
//        if (chack.prop('checked')) {
//            $(this).addClass("check");
//        }
//    });

//詳細ページ関連商品アイテム4つ以上でスライドショー
//    var slideitem = $(".b--products_block").length;
//    console.log(slideitem);
//    if (slideitem > 4 ) {
//        $(document).ready(function () {
//            $('.b-bxslider').bxSlider({
//                auto: false,
//                slideWidth: 280, //スライド内の1要素の幅
//                maxSlides: 4, //一度に表示させる数
//                minSlides: 4,
//                moveSlides: 4, //スライドで動かす数
//                infiniteLoop: true,
//                slideMargin: 20
//            });
//        });
//    } 
//});



