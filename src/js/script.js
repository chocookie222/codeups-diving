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
      if ($(".top-mv").height() < $(this).scrollTop()) {
        $(".js-header").addClass("change-color");
      } else if ($(".breadcrumb").height() < $(this).scrollTop()) {
        $(".js-header").addClass("change-color");
      } else {
        $(".js-header").removeClass("change-color");
      }
    });
  });

  // フェード(mv)
  var swiper = new Swiper(".js-mv-fade", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    effect: "fade",
  });

  // スライダー(キャンペーン)
  var swiper = new Swiper(".js-campaign-Swiper", {
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
  var box = $(".js-colorbox"),
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

  //タブ（campaign）
  $(function () {
    const tabButton = $(".js-tab-button--campaign"),
      tabContent = $(".js-tab-content--campaign");
    tabButton.on("click", function () {
      let index = tabButton.index(this);

      tabButton.removeClass("is-active");
      $(this).addClass("is-active");
      tabContent.removeClass("is-active");
      tabContent.eq(index).addClass("is-active");
    });
  });

  //タブ（information）
  $(function () {
    const tabButton = $(".js-tab-button--info"),
      tabContent = $(".js-tab-content--info");
    tabButton.on("click", function () {
      let index = tabButton.index(this);

      tabButton.removeClass("is-active");
      $(this).addClass("is-active");
      tabContent.removeClass("is-active");
      tabContent.eq(index).addClass("is-active");
    });
  });

  // モーダル（ギャラリー）
  $(function () {
    $(".js-modal-open").each(function () {
      $(this).on("click", function () {
        var target = $(this).data("target");
        var modal__contents = document.getElementById(target);
        $(modal__contents).fadeIn();
        $("body").addClass("no_scroll");

        return false;
      });
    });
    $(".js-modal-close").on("click", function () {
      $(".js-modal").fadeOut();
      $("body").removeClass("no_scroll");

      return false;
    });
  });

  //タブ（voice）
  $(function () {
    const tabButton = $(".js-tab-button--voice"),
      tabContent = $(".js-tab-content--voice");
    tabButton.on("click", function () {
      let index = tabButton.index(this);

      tabButton.removeClass("is-active");
      $(this).addClass("is-active");
      tabContent.removeClass("is-active");
      tabContent.eq(index).addClass("is-active");
    });
  });

  //アコーディオン（FAQ）
  $(function () {
    $(".js-accordion__item:first-child .js-accordion__content").css(
      "display",
      "block"
    );
    $(".js-accordion__item:first-child .js-accordion__title").addClass(
      "is-open"
    );
    $(".js-accordion__title").on("click", function () {
      $(this).toggleClass("is-open");
      $(this).next().slideToggle(300);
    });
  });
});
