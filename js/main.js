

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

});