requirejs.config({
	baseUrl:"js/lib",
	paths:{
		jQuery:"jquery.min",
		BT:"baiduTemplate",
		SW:"swiper.min",
		ll:"lazyload.min",
		scroll:"scrollItem",
		page:"paging"
	}
})
requirejs(['BT','SW','ll','scroll',"page"],function (template,swiper,$,page) {
	console.log(page);
	(function() {
		$.get("data/sale.json",{"_":new Date().getTime()},"json").done(function (data) {
			var html=template("sale",data);
			$(".sale .sale_left").html(html);
			$(".sale .sale_left dl dt").click(function(){
			var that=this
			if ($(this).hasClass("active")) {
				$(this).removeClass("active")
				$(this).find("i").removeClass("active")
				$(this).parent().find("dd h3").removeClass("active")
				$(this).parent().find("dd ul li").removeClass("active")		
			}else{
				$(this).find("i").addClass("active")
				$(this).addClass("active")
				$(this).parent().find("dd h3").addClass("active")
			}
			$(this).parent().find("dd h3").click(function(){
				if ($(this).parent().find("ul li").hasClass("active")){
					$(this).parent().find("ul li").removeClass("active")
					$(this).removeClass("on")
				}else{
					$(this).addClass("on")
					$(this).parent().find("ul li").addClass("active")
				}
				})
		})
		});
		$.get("data/sort.json",{"_":new Date().getTime()},"json").done(function (data) {
			
			function creatUl(arr,n){
			for (var i = 0; i < arr.length; i+=n) {
					console.log(arr.slice(i,i+n))
					var $ul=$("<ul></ul>")
					// console.log($ul)
					$(".sale .sale_right .sort_pro").append($ul)
					creatHtml(arr.slice(i,i+n),$ul)
				}
			
			$(".sale .sale_right .sort_pro ul").eq(0).css({display:"block",opacity:1})
			
				$(".sale .sale_right .sort_pro ul").eq(0).addClass("active")
				function creatHtml(arr,container){
				// console.log(data.limit(0,9))
				for (var j = 0; j < arr.length; j++) {
				(function(j){	
				var index=this.index
				var $html =$('<li><div class="por_warp"><img class="lazy1" src="images/loading.png" data-original="'+arr[j].url+'"><i><img src="'+arr[j].url+'"></i><p><cite>￥</cite>'+arr[j].price+'</p><b>'+arr[j].name+'</b></div><div class="num"><span>'+arr[j].xiao+'</span><cite>月销量</cite></div><div class="num"><span>'+arr[j].contents+'</span><cite>累计评价</cite></div></li>')
				
				
				$(".sale .sale_right .sort_pro ul li").hover(function(){
				$(this).addClass("active").siblings().removeClass("active")
				
			})
				$(".sale .sale_right .sort_pro ul").mouseleave(function(){
				$(this).find("li").removeClass("active")
				
			})
				$('<button />', {class:'btn',html:"加入购物车",click: function() {
          		$(".tocar").css({display:"block"})
          		addCar(arr,arr[j].id)
        	}}).appendTo($($html))
				container.append($html)
				})(j)
			
			}

		}
		$(".tocar div button").eq(0).click(function(){
			$(".tocar").css({display:"none"})
			
		})
		$(".tocar div button").eq(1).click(function(){
			$(".tocar").css({display:"none"})
			window.open('http://localhost/%E9%9F%A9%E9%83%BD%E8%B4%AD%E7%89%A9/car.html')
			
		})
		//分页器
			var $pag=$('<div class="box" id="page"></div>')
			$(".sort_pro").append($pag)
			var setTotalCount = arr.length;
	        $("#page").paging({
	            initPageNo: 1, 
	            totalPages: Math.ceil(arr.length/n), 
	            slideSpeed: 600, 
	            jump: true, 
	            // callback: function(page) { 
	            //     console.log(page);
	            // }
	        })

	        $('#pageSelect li').click(function(){
			$(".sale .sale_right .sort_pro ul").eq($(this).index()).css({display:'block'}).stop().animate({opacity:1},1000).siblings("ul").css({display:'none'}).stop().animate({opacity:0})
			})
	        $("#firstPage").click(function() {
                $(".sale .sale_right .sort_pro ul").css({display:'none'}).stop().animate({opacity:0})
                $(".sale .sale_right .sort_pro ul").eq(0).css({display:'block'}).stop().animate({opacity:1},1000)
            })
            $("#lastPage").click(function() {
                $(".sale .sale_right .sort_pro ul").css({display:'none'}).stop().animate({opacity:0})
                $(".sale .sale_right .sort_pro ul").eq(Math.ceil(arr.length/n)-1).css({display:'block'}).stop().animate({opacity:1},1000)
            })
            $("#jumpBtn").click(function(){
            	console.log($("#jumpText").val()*1)
            	$(".sale .sale_right .sort_pro ul").css({display:'none'}).stop().animate({opacity:0})
                $(".sale .sale_right .sort_pro ul").eq(($("#jumpText").val()-1)*1).css({display:'block'}).stop().animate({opacity:1},1000)
            })
            $("#prePage").click(function(){            
            	$(".sale .sale_right .sort_pro ul").css({display:'none'}).stop().animate({opacity:0})
                $(".sale .sale_right .sort_pro ul").eq($(".sel-page").index()).css({display:'block'}).stop().animate({opacity:1},1000)
            })
            $("#nextPage").click(function(){            
            	$(".sale .sale_right .sort_pro ul").css({display:'none'}).stop().animate({opacity:0})
                $(".sale .sale_right .sort_pro ul").eq($(".sel-page").index()).css({display:'block'}).stop().animate({opacity:1},1000)
            })
		}
		
				
			
		creatUl(data.sort,40)
			// creatHtml(data.sort,".sale .sale_right .sort_pro ul")
			
			
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
				removeCookie:function(key){
					this.setCookie(key, null, -1);
				}
			}
			
			
			function addCar(data,id){
				data=data.find(function(a){
					return a.id==id
				})
				if (!data) {return}
				if (!data.num) {data.num=1}
					
				if(!docCookie.getCookie("car")){
					docCookie.setCookie("car","["+JSON.stringify(data)+"]",7)
				}else{
					var arr=JSON.parse(docCookie.getCookie("car"))||[]
					var json=arr.find(function(a) {
						return a.id==id
					})
					if (json) {
						json.num++
					}else{
						arr.push(data)
					}
				docCookie.setCookie("car",JSON.stringify(arr),7)
					console.log(data.num)
				}
			}
			var apro=JSON.parse(docCookie.getCookie("car"))||[]
		
			$(".lazy1").lazyload({effect: "fadeIn"})
			function sort(arr,mark){
				$(".sale .sale_right .sort_pro").html("");
				if (!mark) {
					creatUl(arr,40)
					$(".lazy1").lazyload({effect: "fadeIn"})

				return
				}
				
				var newarr=arr.concat().sort(function (a,b) {
				return a[mark]-b[mark];
				})
				creatUl(newarr,40)
				console.log(newarr)
				$(".lazy1").lazyload({effect: "fadeIn"})
				}
			$(".sale .sale_right .sort_bar ul li").eq(0).click(function(){
				
			sort(data.sort,"")
			$(".lazy1").lazyload({effect: "fadeIn"})
			})
			$(".sale .sale_right .sort_bar ul li").eq(1).click(function(){			
			sort(data.sort,"xiao")
			$(".lazy1").lazyload({effect: "fadeIn"})
			})
			$(".sale .sale_right .sort_bar ul li").eq(2).click(
				function(){
			sort(data.sort,"price")
			$(".lazy1").lazyload({effect: "fadeIn"})
			})
			$(".sale .sale_right .sort_bar ul li").eq(3).click(function(){
			sort(data.sort,"contents")
			$(".lazy1").lazyload({effect: "fadeIn"})
			})

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
			
		
		$(".lian ul").scrollItem("left",102,1000)
	})();
	
	})
	