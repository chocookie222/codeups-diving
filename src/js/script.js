jQuery(function ($) {
  //ナビバートグル
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(this).addClass("is-open");
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

  // スライダー(mv)
  var swiper = new Swiper(".mvSwiper", {
    loop: true,
    speed: 400,
    autoplay: {
      delay: 3000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
  });

  // スライダー(キャンペーン)
  var swiper = new Swiper(".campaign-Swiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    // slidesPerView: 1.26,
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
    // 変数にクラスを入れる
    var btn = $(".pagetop");
    //スクロールしてページトップから100に達したらボタンを表示
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
