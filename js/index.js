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
let teacherSlideNum = 1;
function teacherSwiperFn(slideNum){
  var teacherSwiper = new Swiper('#teacherSwiper', {
    //如果需要分页器
    // pagination: '.swiper-pagination1',
    slidesPerView: slideNum,
    spaceBetween : 10,
    //paginationClickable: true,
    loop: true,
    //如果需要前进后退按钮
    prevButton: '.part5 .preBtn',
    nextButton: '.part5 .nextBtn'
  })
}
function teacherSwiperChange(){
  if(windowWidth<=768){
    teacherSlideNum = 1.4
  }
  if(windowWidth>768&&windowWidth<992){
    teacherSlideNum = 2
  }
  if(windowWidth>=992&&windowWidth<1200){
    teacherSlideNum = 3
  }
  if(windowWidth>=1200){
    teacherSlideNum = 4
  }
  //console.log(teacherSlideNum);
  teacherSwiperFn(teacherSlideNum);
}
teacherSwiperChange();
// 改变窗口
$(window).resize(function(){
  // 重新获取窗口的宽度
  windowWidth=$(window).width();
  // part3 精品班轮播切换
  wChange();
  // 教师部分切换
  teacherSwiperChange();
});

// part6 每个孩子的心声
var childSwiper = new Swiper('#childSwiper', {
  //如果需要分页器
  pagination: '.child-pagination',
  slidesPerView: 1, 
  paginationClickable: true,
  // loop: true,
})

	// part2切换
	$('.part2 .box-wrapper .left li').click(function(){
    let index = $(this).index();
    $(this).addClass('act').siblings().removeClass('act');
    $('.part2 .box-wrapper .right .item').eq(index).addClass('show').siblings().removeClass('show');
 });

   // part4切换
 $('.p4-content').height($('.p4-content>div').eq(0).height());
 $('.index-part4 .p4Menu .item').mouseenter(function(){
    let index = $(this).parent().index();
    $(this).parent().siblings().find('.item').removeClass('act')
    $(this).addClass('act');
    $('.p4-content>div').eq(index).addClass('show').siblings().removeClass('show');
    let h = $('.p4-content>div').eq(index).height(); 
    $('.p4-content').height(h);
 });

   // part8切换
   let p8Item = document.querySelectorAll('.part8 .item');
   let p8Content=document.querySelectorAll('.part8 .center-content>div');
   let removeStyle=function(){
     p8Item.forEach(function(item,index){
       item.setAttribute('class','item');
       p8Content[index].classList.remove('show');
     });
   };
   for(let i=0; i<p8Item.length;i++){
     p8Item[i].onmouseenter=function(){
       removeStyle();
       this.setAttribute('class','item act');
       p8Content[i].classList.add('show');
     };
   }