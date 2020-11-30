/**
 * Created by Administrator on 2017/11/21.
 */
function HFn(ele) {
    ele.find('img').eq(0).load(function () {
        ele.height($(this).height()); //获取图片的高度并设置
    })
}
/*改变窗口时改变swiper的尺寸*/
function changeW(ele) {
    setTimeout(function () {//使用定时器，因为改变窗口后设置动画的原因获取不到当前img值
        var h = ele.find('img').eq(0).height();
        ele.height(h);
        ele.find('.swiper-wrapper').height(h);
        ele.find('.swiper-slide').height(h);
    },200);

}
/*鼠标滑过swiper停止轮播的方法*/
function stop_swiper(swiper_obj,ele) {
    ele.find('.swiper-slide').mouseenter(function () {
        swiper_obj.stopAutoplay();
    }).mouseleave(function () {
        swiper_obj.startAutoplay();
    });
}

/*banner轮播*/
var $banner = $('#banner');
var banner = new Swiper('#banner',{
    pagination : '.banner_pagination',
    autoplay : 2000,
    calculateHeight : true,
    resizeReInit : true,
    speed:1000,
    loop:true
});
HFn($banner);
/*使用swiper改变窗口时，swiper的调整*/
$(window).resize(function () {
    changeW($banner);
});
stop_swiper(banner,$('#banner'));