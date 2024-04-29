jQuery(function ($) {
  //ナビバートグル
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(this).removeClass("is-open");
      $("body").removeClass("no_scroll");
      $(".header").removeClass("is-open");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(this).addClass("is-open");
      $("body").addClass("no_scroll");
      $(".header").addClass("is-open");
    }
  });

  //画面幅が広がったらドロワーを非表示にする
  $(window).resize(function () {
    if (window.matchMedia("(min-width:768px)").matches) {
      $(".js-header").removeClass("is-open");
      $(".js-drawer-menu").removeClass("is-open");
      $(".js-drawer-menu").fadeOut();
      $(".js-hamburger").removeClass("is-open");
    }
  });

  //header 背景
  $(function () {
    $(window).on("scroll", function () {
      if ($(".mv").height() < $(this).scrollTop()) {
        $(".js-header").addClass("change-color");
      } else {
        $(".js-header").removeClass("change-color");
      }
    });
  });

  // フェード(mv)
  $(".slider").slick({
    fade: true, //切り替えをフェードで行う。初期値はfalse。
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
    speed: 2000, //スライドの動きのスピード。初期値は300。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    arrows: false, //左右の矢印あり
    dots: false, //下部ドットナビゲーションの表示
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  });

  // スライダー(キャンペーン)
  var swiper = new Swiper(".campaign-Swiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    slidesPerView: 1.21,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 3.29,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.49,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      prevEl: ".js-top-campaign-swiper-button-prev",
      nextEl: ".js-top-campaign-swiper-button-next",
    },
  });

  // 画像出現アニメーション
  var box = $(".colorbox"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;
    image.css("opacity", "0");
    color.css("width", "0");
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  $(function () {
    var btn = $(".pagetop");
    $(window).on("load scroll", function () {
      if ($(this).scrollTop() > 100) {
        btn.addClass("active");
      } else {
        btn.removeClass("active");
      }
    });

    //フッターの手前でボタンを止める
    $(window).on("load scroll", function () {
      var height = $(document).height(), //ドキュメントの高さ
        position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
        footer = $("footer").height(); //フッターの高さ
      if (height - position < footer) {
        btn.addClass("absolute");
      } else {
        btn.removeClass("absolute");
      }
    });

    //スクロールしてトップへ戻る
    btn.on("click", function () {
      $("body,html").animate({
        scrollTop: 0,
      });
    });
  });
});
