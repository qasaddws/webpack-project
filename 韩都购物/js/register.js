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
		$("#nav_2,.dh").hover(function () {
		$(".dh").addClass("active")
		},function () {
			$(".dh").removeClass("active")
		})
		$("input[name='tosign']").click(function(){
			window.location.href="sign.html"
		})
		$(".y_menu .left li,.y_menu .right li").hover(function () {
			$(this).addClass("active").siblings().removeClass("active")
		},function () {
			$(this).removeClass("active")
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
	})();
	(function(){
		$(".register_fs a").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
			$(".info").eq($(this).index()).addClass("active").siblings().removeClass("active")
		})
		
			
			// console.log(reg1.test($("#phone").html()))
		$("#phone").blur(function(){
			var reg1=/^1[345678][\d]{9}$/;
			if (!reg1.test($("#phone").val())) {
				$(this).siblings(".register_list_tishi").addClass("on").html("手机号格式不正确")
			}else{
				$(this).siblings(".register_list_tishi").removeClass("on").html("<i><img src='images/ture.gif'></i>")
			}
		})
		$("input[name='email']").blur(function(){
			var reg3=/^\w+@\w+\.[a-z]{2,4}$/;
			if (!reg3.test($(this).val())) {
				$(this).siblings(".register_list_tishi").addClass("on").html("E-mail格式不正确")
			}else{
				$(this).siblings(".register_list_tishi").removeClass("on").html("<i><img src='images/ture.gif'></i>")
			}
		})
		$("input[name='mima']").blur(function(){
			
				var reg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
				if (!reg2.test($(this).val())) {
					console.log($(this).val())
					$(this).siblings(".register_list_tishi").addClass("on").html("密码长度不能小于8位")
				}else{
				$(this).siblings(".register_list_tishi").removeClass("on").html("<i><img src='images/ture.gif'></i>")
			}
		})
		$("input[name='pass']").blur(function(){
				var reg2=/^\w{8,16}$/;
				if (!reg2.test($(this).val())) {
					$(this).siblings(".register_list_tishi").addClass("on").html("两次密码长度必须一致")
					
				}else {
					if($(this).val()===$("input[name='mima']").val()) {
					$(this).siblings(".register_list_tishi").removeClass("on").html("<i><img src='images/ture.gif'></i>")
					
					}else{
					$(this).siblings(".register_list_tishi").addClass("on").html("两次输入必须一致")
					
					}
				}
			
			
		})

		
		
			var check = $("input[name=ele]");
			var a = 0
			check.click(function(){
				console.log($(this).is(":checked"));
				
			})

			$("button[type='submit']").click(function(){
				console.log($(".register_right input.text").val())
				if (!($(".register_list_tishi").hasClass("on"))) {

					if ( $("input[name=ele]").is(":checked")) {
						alert("恭喜注册成功")
					
				}
			}	
			})
			
		
		                                       
	})()
})