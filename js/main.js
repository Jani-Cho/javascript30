$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});

//點擊專案圖片時觸發goDetail()

// $('.portfolio-item').click(function(){
// 	var myValue = $(this).attr("value"); //抓取這個項目的value
// 	// console.log(myValue)
// 	goDetail(myValue);
//  });

//返回
 
// $(".backto").click(function(){
// 	back();
//   });

//Demo頁 slider
// function goDetail(id){
// 	$(".page2").css("display","block");
// 	$(".page1").css("display","none");

// 	console.log('go')
// 	//  $(".alback").css("display","block");
// 	 nextContent(2, id);
// }

// function back(){
//     $(".page2").css("display","none");
//     $(".page1").css("display","block");
// 	 nextContent(1);
// }

// var Contentcurrpage = 1;

//進入Demo頁
// function nextContent(next, id){
// 	console.log('next')
//     var curPage = ".page"+Contentcurrpage;
// 	var nextPage =".page"+next;
// 	if(Contentcurrpage==next){
// 	   return;
// 	}
// 	// $(".content-cicle div").css("background","#FFFFFF");
// 	// $(_this).css("background","#000000");
//    if(next > Contentcurrpage){
//       //$(curPage).addClass("rightToleft");
// 	  $(nextPage).addClass("rightToleft2");
// 	  $(nextPage).css("display","block");
// 	  $(nextPage).css("z-index","2");
// 	  $(curPage).css("z-index","1");
// 	  Contentcurrpage=next;
// 	  setTimeout(function(){
// 	     $(curPage).css("display","none");
// 	     $(curPage).removeClass("rightToleft"); 
// 		  $(curPage).removeClass("rightToleft2"); 
// 		  $(curPage).removeClass("leftToright"); 
// 		  $(curPage).removeClass("leftToright2"); 
// 	  },500);
//    }else{
//        // $(curPage).addClass("leftToright");
// 	    $(nextPage).addClass("leftToright2");
// 	    $(nextPage).css("display","block");
// 		$(nextPage).css("z-index","2");
// 		$(curPage).css("z-index","1");
// 	    Contentcurrpage=next;
// 	    setTimeout(function(){
// 	      $(curPage).css("display","none");
// 	      $(curPage).removeClass("leftToright"); 
// 		  $(curPage).removeClass("leftToright2"); 
// 		  $(curPage).removeClass("rightToleft"); 
// 		  $(curPage).removeClass("rightToleft2"); 
// 	    },500);
//    }
//    $(window).scrollTop(0); //讓頁面回到最頂端

   


// }