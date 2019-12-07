

$(function(){

	var resize=function(){
		var windowWidth=$(window).width();


		var isSmallScreen=windowWidth<768;

		$('#main_ad > .carousel-inner > .item').each(function(i,item){
			var $item=$(item);

			var imgSrc = isSmallScreen ? $item.data('image-xs') :$item.data('image-lg');

			$item.css('backgroundImage','url("'+imgSrc+'")');
			
			if (isSmallScreen) {
				$item.html('<img src="'+imgSrc+'" alt="" />');
			}else{
				$item.html('');
			}

		});
	};


	$(window).on('resize',resize).trigger('resize');

	$('[data-toggle="tooltip"]').tooltip();

	// 控制标签页的宽度
	var $ulContainer=$('.nav-tabs');

	var sumWidth=30;


	$ulContainer.children().each(function(index,item){
		sumWidth+=item.clientWidth;
	});


	/*判断当前ul的宽度是否超出屏幕*/
	if(sumWidth > $(window).width()){
		$ulContainer.css('width',sumWidth);
		$('.ul-wapper').css('overflow-x','scroll');
	}

	var $news_title=$('.news-title');
	

	var $news_li=$('#news .nav.nav-stacked li > a' );
	$news_li.on('click',function(){
		var title=$(this).data('title');
		$news_title.text(title);
	});

	/*轮播图滑动控制*/
	var $carousels = $('.carousel');
	var startPosition=0;
	var endPosition=0;
	var offset=50;

	/*获取触摸开始位置和触摸结束位置*/
	$carousels.on('touchstart',function(e){
		startPosition=e.originalEvent.changedTouches[0].clientX;
	});

	$carousels.on('touchmove',function(e){
		endPosition=e.originalEvent.changedTouches[0].clientX;
		
	});

	/*触摸结束后判断应该是滑向上一页还是下一页*/
	/*应该有个范围值*/

	$carousels.on('touchend',function(){
		var distance=Math.abs(startPosition-endPosition);
		console.log(startPosition>endPosition);
		if (distance>offset) {
			$(this).carousel(startPosition>endPosition? 'next' : 'prev');
		}
	});

});