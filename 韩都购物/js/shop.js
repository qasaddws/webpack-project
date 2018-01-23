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
	
	(function(){
	$(".y_menu .left li,.y_menu .right li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
		},function () {
			$(this).removeClass("active")
		})	
	$(".s_show ul li").click(function () {
			$(this).addClass("active").siblings().removeClass()
			$(".s_zoom").find("img").attr( "src","images/t"+($(this).index()+1)+".jpg")
			$(".b_zoom").html('<img class="b_img" src="images/t'+($(this).index()+1)+'.jpg">')
		})
	$(".size ul li").click(function () {
			$(this).addClass("active").siblings().removeClass()
		})
	$(".color ul li").click(function () {
			$(this).addClass("active").siblings().removeClass()
		})
	$(".zoom .mask").css({width: $(".zoom .b_zoom").innerWidth()/$(".zoom .b_img").innerWidth()*$(".zoom .s_zoom").innerWidth(),height:$(".zoom .b_zoom").innerHeight()/$(".zoom .b_img").innerHeight()*$(".zoom .s_zoom").innerHeight()});

	$(".zoom .s_zoom").hover(function(){
		$(".zoom .b_zoom").css("left",490)
		$(".zoom .mask").css("display","block");

		$(this).mousemove(function(e){
			var left = e.pageX - $(this).offset().left - $(".zoom .mask").outerWidth()/2;
			var top = e.pageY - $(this).offset().top - $(".zoom .mask").outerHeight()/2;
			left = Math.min($(this).innerWidth()-$(".zoom .mask").outerWidth(),Math.max(0,left));
			top = Math.min($(this).innerHeight()-$(".zoom .mask").outerHeight(),Math.max(0,top));
			$(".zoom .mask").css({left:left,top:top});

			$(".zoom .b_img").css({left:-left/$(".zoom .s_zoom").innerWidth() * $(".zoom .b_img").innerWidth(),top:-top/$(".zoom .s_zoom").innerHeight() * $(".zoom .b_img").innerHeight()});
			});
		},function(){
			$(".zoom .b_zoom").css("left",-10000);
			$(".zoom .mask").css("display","none");
		});
		$(".lie_nav ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
		});
		var $num=1
		$(".num .del").click(function(){
			if ($num<=1) {
				$num=1
			}
			$num--
			$("input[name='num']").val($num)
		});
		$(".num .add").click(function(){
			$num++
			$("input[name='num']").val($num)
		})
	})();
	
	(function(argument) {
		$("#nav_2,.dh").hover(function () {
		$(".dh").addClass("active")
		},function () {
			$(".dh").removeClass("active")
		})
		$(".context .context_right .con ul li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
			$(".context .context_right .flower").children().eq($(this).index()).addClass("active").siblings().removeClass("active")
		})
		
		$(".contents h3,.contents ul,.menu").hover(function() {
			
			$(".contents ul").stop().animate({opacity:1,height:496})
		},function () {
			$(".contents ul").stop().animate({opacity:0,height:0})
		})
		
			$(".contents ul li,.menu").mouseenter(function () {
				$(this).addClass("active").siblings().removeClass("active")
				$(this).children().eq(0).addClass("active").parent().siblings().children().removeClass("active")
				$(".menu").css({height:496})	
				$(".menu").children().eq($(this).index()).addClass("active").siblings().removeClass("active")
				})
			$(".menu,.contents ul li").mouseleave(function () {
				$(".contents ul li").removeClass("active")
				$(".menu").children().removeClass("active")
				$(".menu").css({height:0})
			})
		
		
		$(".lian ul").scrollItem("left",102,1000)
		$.get("data/news.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("new",data);
			$(".side .side_1").html(html);
			// setTimeout(function() { $(".lazy").lazyload({effect: "fadeIn"}) }, 2000);
			// $(".lazy").lazyload({effect: "fadeIn"});
		})
		$.get("data/news.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("hot",data);
			$(".side .side_2").html(html);
		})
	})();
	(function () {

		
	})()
	})
	
	
	