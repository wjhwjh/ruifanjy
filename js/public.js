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
    $('.prov_schools').on('mouseenter touchstart', '.item', function(){
    	$(this).addClass('hover');
    }).on('mouseleave touchend', '.item', function(){
    	$(this).removeClass('hover');
    });
})