requirejs.config({
	baseUrl:"js/lib",
	paths:{
		jQuery:"jquery.min",
		BT:"baiduTemplate",
		SW:"swiper.min",
		ll:"lazyload.min",
		scroll:"scrollItem",
		gV:"gVerify"
	}
})
requirejs(['BT','SW','ll','scroll',"gV"],function (template,swiper,$,gVerify) {
	(function(){
		$("#nav_2,.dh").hover(function () {
		$(".dh").addClass("active")
		},function () {
			$(".dh").removeClass("active")
		})
		$("#zhu ").click(function(){
			window.location.href ="register.html"
			
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
		
		$(".new_loginTxt").eq(1).blur(function(){
			
		})
		var verifyCode=new GVerify("v_container")
		
		$(".sign_right button[type='submit']").click(function(){
			var reg1=/^1[345678][\d]{9}$/;
			var reg2=/^\w+@\w+\.[a-z]{2,4}$/;
			var reg3=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
			var res = verifyCode.validate($("#code_input").val());
			if ((!reg1.test($(".new_loginTxt").eq(0).val()))&&(!reg2.test($(".new_loginTxt").eq(0).val()))) {
				$(".form .erro").html("用户名不正确!")
			}else{
			
			if (!reg3.test($(".new_loginTxt").eq(1).val())) {
				$(".form .erro").html("密码不正确!")
			}else{
				if(!res){
				$(".form .erro").html("验证码不正确");
			}else{
				$(".form .erro").html("")
				settimeOut
				window.location.href="index.html"
				}
			}
			}
		// 	$(".new_loginTxt").eq(0).blur(function(){
		// 	var reg1=/^1[345678][\d]{9}$/;
		// 	var reg2=/^\w+@\w+\.[a-z]{2,4}$/;
		// 	if ((!reg1.test($(this).val()))&&(!reg2.test($(this).val()))) {
		// 		$(this).parent().parent().siblings(".erro").html("用户名不正确!")
		// 	}else{
		// 		$(this).parent().parent().siblings(".erro").html("")
		// 	}
		// })
		// }
		})
		
		$(".others ul li").eq(0).click(function(){
			window.location.href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100229924&redirect_uri=http%3A%2F%2Fwww.handu.com%2Fcaibei.php%3Ftype%3Dqq&state=eeaf411772b3dad199e176a65fc60ce2&scope=get_user_info"
		})
		$(".others ul li").eq(1).click(function(){
		window.location.href="https://api.weibo.com/oauth2/authorize?client_id=4251184333&redirect_uri=http%3A%2F%2Fwww.handu.com%2Fother_login.php%3Fact%3Dcallback%26type%3Dsina&response_type=code"
		})
		$(".others ul li").eq(2).click(function(){
			window.location.href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100229924&redirect_uri=http%3A%2F%2Fwww.handu.com%2Fcaibei.php%3Ftype%3Dqq&state=eeaf411772b3dad199e176a65fc60ce2&scope=get_user_info"
		})
		$(".others ul li").eq(3).click(function(){
			window.location.href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3D9550582ce891ca5f2c3037b2b1daec01"
		})
	})();
	
	

})