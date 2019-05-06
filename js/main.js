/*global console, $, false*/
$(document).ready(function () {
  "use strict";
  $(".icon").click(function () {
    $(".nav-list").slideToggle(1000);
  });

  // belong to sticky
  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    if (sc > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
    if (sc > 1920) {
      // Count to Plugin
      $(".time").countTo();
      $(window).off("scroll");
    }

    if (sc > 500) {
      //scroll top btn
      $(".scrolltop").fadeIn(2000);
    } else {
      $(".scrolltop").fadeOut();
    }
  });

  // portfolio Buttons Change BG;
  $(".buttons .my-btn").on("click", function () {
    $(this)
      .addClass("active_btn")
      .siblings()
      .removeClass("active_btn");
    var cssFilter = $(this).attr("id");

    if (cssFilter === "all") {
      $(".images > div").fadeIn();
    } else {
      $(".images > div").fadeOut();
      $(".images")
        .contents()
        .filter("." + cssFilter)
        .fadeIn();
    }
  });

  //belong to owl carosel
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }

  });

  //Choose Panel
  $(".c-panel li").click(function () {
    $(this)
      .addClass("active_btn")
      .siblings()
      .removeClass("active_btn");

    var panel = $(this).data("role");
    $(".content > div").hide();
    $(".content")
      .contents()
      .filter("#" + panel)
      .fadeIn();
  });

  //popup
  $(".popup").magnificPopup({
    disableOn: 100,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  //slick to slider pleasure
  $(".slick").slick({
    nextArrow: false,
    prevArrow: false,
    infinite: false,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  //Scroll To Top
  $(".scrolltop").click(function () {
    $("body, html").animate({
        scrollTop: 0
      },
      2000
    );
  });

  // Smoth Scroll
  $(".list a").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 100
    });
  });

  //loading
  $(".loading-overlay").fadeOut(1000);
});