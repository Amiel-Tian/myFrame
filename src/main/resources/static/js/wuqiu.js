
/**动态填充下拉框*/
function wuqiu_select() {
	var select = $("select");

}


/**弹出窗口，1s后关闭 i=0 对号 i=1 错误*/
function wuqiu_dialog(i,value){
	var icon = ["iconduihaocheckmark17","iconkulian"]
	var sta;
	var anmin=""
	if(i == 0) sta = "wuqiu_icon_dialog_succ"
	if(i == 1){ 
		sta = "wuqiu_icon_dialog_ero"
		anmin = "wuqiu_dialog_anim"
	}
	
	$(".wuqiu_move").css("display","block")
	$(".wuqiu_move").append("<div class=\"wuqiu_dialog "+anmin+"\">\n" +
	"<span class=\"iconfont "+icon[i]+" wuqiu_icon "+sta+"\"></span>\n" +
	"<div>"+value+"</div>" +
	"</div>")
	setTimeout(function(){
		$(".wuqiu_move").css("display","none")
		$(".wuqiu_move").empty()
	},1000)
}

/**列表点击事件*/
$(".wuqiu_title_li").children("a").click(function (e) {
	e.stopPropagation();
	var static = $(this).attr("wuqiu_ti");
	var child = $(this).parent().children(".wuqiu_title_li_child");

	if (static == "close"){
		$(this).attr("wuqiu_ti","open");
		$(this).children("span").css("transform","rotate(-180deg)")
		child.css("display","block")
	}
	if (static == "open"){
		$(this).attr("wuqiu_ti","close");
		$(this).children("span").css("transform","rotate(0deg)")
		child.css("display","none")
	}


})

/**刷新点击事件*/
var shua = true;
$(".iconshuaxin").click(function () {
	if (shua){
		shua = false;
		$(".iconshuaxin").css("animation","shuaxin 2s");

		var src = $(".wuqiu_iframe").attr("src")
		$(".wuqiu_iframe").attr("src",src);

		setTimeout(function () {
			$(".iconshuaxin").css("animation","");
			shua = true;
		},2000)
	}

})

/**侧边栏*/
/**菜单打开关闭*/
var lan = true
if ($(".left_title").css("width")=="220px"){
	lan = false
}
$(".iconliebiao").click(function (e) {
	// e.stopPropagation();
	if (lan){
		$(".left_title").css("width","220px")
		$(".left_header").css("width","220px")
		lan = false
	}else {
		$(".left_title").css("width","0")
		$(".left_header").css("width","0")
		lan = true
	}
})

/**侧边栏点击*/
$(".wuqiu_title_a").click(function (e) {
	e.stopPropagation();
	$(".wuqiu_iframe").attr("src",$(this).attr("src"))
})

/**/
$(".right_main").click(function () {
	var user = $("#username").parent();
	var child = user.parent().children(".wuqiu_title_li_child");
	var sta = $("#username").parent().attr("wuqiu_ti")

	console.log(sta)
	if (sta == "open"){
		$(user).attr("wuqiu_ti","close");
		$(user).children("span").css("transform","rotate(0deg)")
		child.css("display","none")
	}
})



/** 下拉框事件**/
$(".wuqiu_select_title").click(function () {
	var dl = $(this).parent().children(".wuqiu_select_child")
	var icon = $(this).children("span")
	var static = $(this).attr("wuqiu_ti");

	if (static == "close"){
		$(this).attr("wuqiu_ti","open");
		dl.css("display","block")
		icon.css("transform","rotate(-180deg)");

	}else {
		$(this).attr("wuqiu_ti","close");
		icon.css("transform","rotate(0deg)");
		dl.css("display","none")
	}
})
/**下拉框选中事件*/
$(".wuqiu_select_child").children("dd").click(function () {
	var dl = $(this).parent()
	var select_input = $(this).parent().parent().children(".wuqiu_select_title").children("input")
	var icon = $(this).parent().parent().children(".wuqiu_select_title").children("span")
	var static = $(this).parent().parent().children(".wuqiu_select_title").attr("wuqiu_ti")

	dl.children("dd").attr("class","")
	$(this).addClass("wuqiu_select_this");

	select_input.val($(this).text())
	select_input.attr("wuqiu_value",$(this).attr("wuqiu_value"))

	$(this).attr("wuqiu_ti","close");
	icon.css("transform","rotate(0deg)");
	dl.css("display","none")
})
/**开关事件*/

$(".wuqiu_switch").click(function () {
	var static = $(this).attr("wuqiu_ti");
	var check = $(this).parent().children("input")

	if (static == "close"){
		$(this).attr("wuqiu_ti","open");
		$(this).addClass("wuqiu_switch_on")
		$(this).children("em").text("NO")
		check.attr("checked",true)
	}else {
		$(this).attr("wuqiu_ti","close");
		$(this).removeClass("wuqiu_switch_on")
		$(this).children("em").text("OFF")
		check.attr("checked",false)
	}

})




