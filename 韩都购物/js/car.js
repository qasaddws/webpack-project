requirejs.config({
	baseUrl:"js/lib",
	paths:{
		jQuery:"jquery.min",
		BT:"baiduTemplate",
		SW:"swiper.min",
		ll:"lazyload.min",
		scroll:"scrollItem",
	}
})
requirejs(['BT','SW','ll','scroll'],function (template,swiper,$) {
	(function() {
		$("#nav_2,.dh").hover(function () {
		$(".dh").addClass("active")
		},function () {
			$(".dh").removeClass("active")
		})
		var docCookie = {
		setCookie:function(key, value, days){
			var date = new Date();
			date.setDate(date.getDate()+days);
			document.cookie=key+"="+value+"; expires="+date;//设置cookie，key=value
		},
		getCookie:function(key){
			var cookies = document.cookie.split("; ");
			for(var i=0; i<cookies.length; i++){
				var cooks = cookies[i].split("=");
				if(cooks[0] === key){
					return cooks[1];
				}
			}
			return null;
		},
		}

		var apro=JSON.parse(docCookie.getCookie("car"))||[]
		console.log(apro)
		function creatHtml(arr,container,fn){
		$(".shopping_nr ul").html("")
		for (var i = 0; i < arr.length ; i++) {
			(function(num){
			$Total=arr[num].num*arr[num].price
			$html='<li><div style="width: 361px;"><i><img src='+arr[num].url+'></i><b>'+arr[num].name+'</b></div> <div style="width: 232px;">'+arr[num].price+'</div><div style="width: 232px;"><button name="del" src="'+arr[i].id+'">-</button><span class="nim">'+arr[num].num+'</span><button name="add" src="'+arr[i].id+'">+</button></div><div style="width: 236px;" class="Total">'+$Total+'</div><div style="width: 130px;"><a>移入收藏夹</a><a class="del" data="'+arr[i].id+'">删除</a></div></li>';
				$(container).append($html)
		})(i)

		}
		
		fn()
		var $all = 0;
		var $zall= 0;
		for (var i = 0; i < $(".shopping_nr ul li").length; i++) {
			$all +=Number($(".shopping_nr ul li").eq(i).find(".Total").html())
			$zall+=Number($(".shopping_nr ul li").eq(i).find(".nim").html())
			console.log($all)
			$(".shopping_nr .list .num i").html($zall)
			$(".shopping_nr .list .price i").html($all)
		}
		}
		function fn(){
			$(".del").click(function(){
			removeCar(apro,$(this).attr("data"),"rem")
			})

			$("button[name='del']").click(function(){
			removeCar(apro,$(this).attr("src"),"-")	
			})
			$("button[name='add']").click(function(){
			removeCar(apro,$(this).attr("src"),"+")	
			})
		}
		creatHtml(apro,".shopping_nr ul",fn)
		// if (apro) {
		// 	// $(".shopping_nr ul").html('<div class="cart-empty"><div class="message"><ul><li class="txt">购物车内暂时没有商品，登录后将显示您之前加入的商品</li><li><a href="#none" class="btn-1 login-btn mr10">登录</a><a href="//www.jd.com/" class="ftx-05">去购物&gt;</a></li></ul></div></div>')
		// 	alert(!23)
		// }
		function removeCar(data,id,mark) {
		var json=data.find(function (a) {
			return a.id==id
		})
		if (mark=="-") {
			json.num--
			if (json.num<=1) {
			json.num=1
			}
		
		}
		if (mark=="+") {
			
			json.num++
			
		}
		if (mark=="rem") {
		data.splice(data.indexOf(json),1)
		if(apro){
			$(".shopping_nr .list .num i").html("0")
			$(".shopping_nr .list .price i").html("0")

			}
		
		
		}
		docCookie.setCookie("car",JSON.stringify(data),7)

		var newarr=JSON.parse(docCookie.getCookie("car"))||[]
		creatHtml(newarr,".shopping_nr ul",fn)
	}
	
	})()
	
})

	