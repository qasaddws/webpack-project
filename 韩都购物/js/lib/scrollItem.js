define(['jQuery'],function (jQuery) {
	$.fn.extend({
		scrollItem:function(direct,distance,ms){
			
			ms=ms||2000
			var that=this
			
			function fn() {
				var json={}
				var pos=that.position()[direct]
				json[direct]=pos-distance
				that.animate(json,function () {
					that.children().eq(0).appendTo(that).parent().css(direct,pos)
				})}
			this.timer=setInterval(fn,ms)
			this.hover(function () {
				clearInterval(that.timer)
			},function () {
				that.timer=setInterval(fn,ms)
			})
		}
	})
	return $;
})
