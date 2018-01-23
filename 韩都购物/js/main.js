requirejs.config({
	baseUrl:"js/lib",
	paths:{
		jQuery:"jquery.min",
		BT:"baiduTemplate",
		SW:"swiper.min",
		ll:"lazyload.min",
		scroll:"scrollItem"
	}
})
requirejs(['BT','SW','ll','scroll'],function (template,swiper,$) {
	
	(function() {
	var myswiper=new Swiper("#banner",{
	direction:"horizontal",
	loop: "true",
    pagination: '.swiper-pagination',
    autoplay:2000,
    effect:"fade",
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	});
	$('.swiper-button-prev').on('click',function(){
           mySwiper.swipePrev();
     })
    $('.swiper-button-next').on('click',function(){
           mySwiper.swipeNext();
     }) 
	$("#banner").hover(function(){
		myswiper.stopAutoplay()
	},function () {
		myswiper.startAutoplay()
	})
	new Swiper("#news",{
	direction:"horizontal",
	loop: "true",
    pagination: '.swiper-pagination',
    autoplay:2000,
    effect:"fade",
	});
	})();

	(function () {
		$(".floor_ctrl ul li").not(".backtop").click(function () {
			$(this).addClass("active").siblings().removeClass("active")
			$("body,html").stop().animate({
				scrollTop:$(".floor_step").eq($(this).index()).offset().top-50
			},300)
		});
		$(".backtop").click(function () {
			$("body,html").stop().animate({
				scrollTop:0
			})
			$(".floor_ctrl ul").children().removeClass("active")
		});
		
		$(window).scroll(function () {
			var $scrollT=$(window).scrollTop()
			//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
			if ($scrollT<=($(".floor_step").eq(0).offset().top-200)) {

				$(".floor_ctrl").fadeOut()
			}else{
				$(".floor_ctrl").fadeIn()
			}
		})
	})();
	(function () {
		$.get("data/help.json",{"_":new Date().getTime()},"json").done(function (data) {
		
			var html=template("help",data);
			$(".nav .dh ul").html(html)
		})
		$.get("data/list1.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("templateHtml",data);
			$(".context_left ul").html(html)
			$(".lazy2").lazyload({effect: "fadeIn"}) ;
			$(".context_left ul li").hover(function () {
				$(this).find("i").fadeOut().parent().siblings().find("i").fadeIn()
			},function () {
				$(this).find("i").fadeIn()
			})
		});
		$.get("data/list2.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("title",data);
			$(".pro h3 ul").html(html)
			console.log($(".pro h3 ul li").eq(0))
			$(".pro h3 ul li").eq(0).addClass("active")
			$(".pro>h3 ul li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
			$(".pro_list ul").eq($(this).index()).stop().animate({opacity:1},1000).siblings().stop().animate({opacity:0},1000)
			})
		});
		$.get("data/list2.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("list",data);
			$(".pro .pro_list").html(html);
			setTimeout(function() { $(".lazy").lazyload({effect: "fadeIn"}) }, 2000);
			// $(".lazy").lazyload({effect: "fadeIn"});
		})
		$.get("data/hot.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("hot",data);

			$(".hStyle .hStyle_last ul").html(html)
			$(".hStyle .hStyle_last ul li").eq(0).css({height:134})
			$(".hStyle .hStyle_last ul li").eq(0).find("#name").css({display:"none"})
			$(".hStyle .hStyle_last ul li").eq(0).find(".hot").addClass("active")
			$(".hStyle .hStyle_last ul li").mouseenter(function () {
				$(this).stop().animate({height:134},1000).siblings().stop().animate({height:36},1000)
				$(this).find("#name").css({display:"none"}).parent().siblings().find("#name").css({display:"block"})
				$(this).find(".hot").addClass("active").parent().siblings().find(".hot").removeClass("active")
			})
			$.get("data/list3.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("hSty",data);
			$(".hStyle_list ul").html(html)
			setTimeout(function() { $(".lazy1").lazyload({effect: "fadeIn"}) }, 2000);
		})
		})
	})();
	(function () {
		$(".y_menu .left li,.y_menu .right li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
		},function () {
			$(this).removeClass("active")
		})
		$(".contents ul li,.menu div").mouseenter(function () {
			$(".menu").css({height:496})
			console.log($(this).index());
			$(this).addClass("active").siblings().removeClass("active")
			// $(this).children().eq(0).addClass("active").parent().siblings().children().removeClass("active")
				
			$(".menu").children().eq($(this).index()).addClass("active").siblings().removeClass("active")
			})
		$(".menu div,.contents ul li").mouseleave(function () {
			$(".contents ul li").removeClass("active")
			$(".menu").children().removeClass("active")
			$(".menu").css({height:36})
		})
		$("#nav_2,.dh").hover(function () {
		$(".dh").addClass("active")
		},function () {
			$(".dh").removeClass("active")
		})
		$(".context .context_right .con ul li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
			$(".context .context_right .flower").children().eq($(this).index()).addClass("active").siblings().removeClass("active")
		})	
		})();
		(function () {
			$(".information .news ul").scrollItem("top",20)
			$(".lian ul").scrollItem("left",102,1000)
			$(document).scroll(function() {

				if ($(this).scrollTop()>$(".show").offset().top) {
					$(".top").stop().animate({top:0,opacity:1},300)
					$(".dh_1").stop().animate({height:300},300)
				}else{
					$(".top").stop().animate({top:-50,opacity:0},300)
					$(".dh_1").stop().animate({height:0},300)
				}
			})
		})();
		(function () {
			$(".dh_1 ul li").hover(function(){
				$(this).css("background","red").siblings().css("background","rgba(0,0,0,0.6)")
			})
			$(".back").click(function () {
				$("body,html").stop().animate({
					scrollTop:0
				})
			})
		})();

		
})
// alert(123)

