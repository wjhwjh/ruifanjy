;$(function(){
	// 移动端rem自适应
	(function (win,doc){
	    if (!win.addEventListener) return;
	    var html=document.documentElement;
	    var cliWidth=html.clientWidth;
	    function setFont()
	    {
	      // console.log(cliWidth);
	      html.style.fontSize=100*(cliWidth/750)+'px';
	    }
	    if(cliWidth < 768 ){
	    	setFont();
	    	win.addEventListener('resize',setFont,false);
	    }
	})(window,document);

	//全省校区 hover
  $('.prov_schools').on('mouseenter click', '.item', function(e){
    $(this).addClass('hover');
  }).on('mouseleave', '.item', function(e){
    $(this).removeClass('hover');
  });

  // 鼠标滚动 联系方式固定底部
	// function bottomFixed() {
  //     var $fContact = $('body').find('.foot_conact');
  //     $(window).scroll(function () {
  //         var scrollTop = $(window).scrollTop();
  //         if (scrollTop > 10) {
  //             $fContact.addClass('fcFixed');
  //         } else {
  //             $fContact.removeClass('fcFixed');
  //         }
  //     });
  // };
  // bottomFixed();
})