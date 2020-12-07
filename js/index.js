let slideNum = 2;
function swiperFn(slideNum){
  let certifySwiper = new Swiper('#certify .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: slideNum,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    //loopedSlides: 2,
    autoplay: false,
    resizeReInit : true,
    prevButton: '#certify .swiper-button-prev',
    nextButton: '#certify .swiper-button-next',
    // pagination: '#certify .swiper-pagination',
    //paginationClickable :true,
    onProgress: function(swiper, progress) {
      //console.log(swiper.slides.length)
      for (i = 0; i < swiper.slides.length; i++) {

        var slide = swiper.slides.eq(i);
        var slideProgress = swiper.slides[i].progress;
        //console.log(slideProgress)
        modify = 1;
        if (Math.abs(slideProgress) > 1) {
          modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        }
        translate = slideProgress * modify * 180 + 'px';
        scale = 1 - Math.abs(slideProgress) / 3;
        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
        slide.css('zIndex', zIndex);
        slide.css('opacity', 1);
        if (Math.abs(slideProgress) > 2) {
          slide.css('opacity', 0);
        }
      }
    },
    onSetTransition: function(swiper, transition) {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides.eq(i)
        slide.transition(transition);
      }

    }
    //处理分页器bug
    // onSlideChangeStart: function(swiper) {
    // 	if (swiper.activeIndex == 4) {
    // 		swiper.bullets.eq(9).addClass('swiper-pagination-bullet-active');
    // 		console.log(swiper.bullets.length);
    // 	}
    // }
  });
}



let windowWidth=$(window).width();
function wChange(){
   if(windowWidth<768){
     slideNum = 1
   }else{
    slideNum = 2
   }
   swiperFn(slideNum);
}
wChange();
$(window).resize(function(){
  windowWidth=$(window).width();
  wChange();
  //certifySwiper.init();
});

//banner模块轮播
var mySwiper1 = new Swiper('.uidWrapper #banner', {
  //如果需要分页器
  pagination: '.swiper-pagination1',
  paginationClickable: true,
  loop: true

  //如果需要前进后退按钮
  // nextButton: '.swiper-button-next',
  // prevButton: '.swiper-button-prev',
})

// 老师模块轮播
var teacherSwiper = new Swiper('#teacherSwiper', {
  //如果需要分页器
  // pagination: '.swiper-pagination1',
  slidesPerView: 4,
  spaceBetween : 10
  //paginationClickable: true,
  //loop: true

  //如果需要前进后退按钮
  // nextButton: '.swiper-button-next',
  // prevButton: '.swiper-button-prev',
})