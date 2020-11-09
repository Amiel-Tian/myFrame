var flag = true;
$("#btn").click(function(){
	$(this).val("登录中...")

	var name = $("#user").val()
	var passwd = $("#pass").val()
	var code = $("#code").val()
	
	
	if(name != "" && passwd != "" && code != ""){
		if(flag){
			// wuqiu_dialog(0,"登录成功")

			flag = false
			// VerifyUser($("#user").val(),$("#pass").val(),$("#code").val());

			$.ajax({
				type:"post",
				dataType:"json",
				url:"VerifyUser",
				data:{name,passwd, code},
				success:function (data) {
					if (data == 1) {
						wuqiu_dialog(0, "登录成功")

						setTimeout(function(){window.location="index"},1000)
					}
					if (data == 0) wuqiu_dialog(1,"验证码错误")
					if (data == -1) wuqiu_dialog(1,"账号或密码错误")

					setTimeout(function(){flag=true;$("#btn").val("登录")},1000)
					$("#codeimg").attr("src","http://localhost:80/getVerify?" + new Date)
				},
				error:function () {
					wuqiu_dialog(1,"连接服务器失败")
					setTimeout(function(){flag=true;$("#btn").val("登录")},1000)
					$("#codeimg").attr("src","http://localhost:80/getVerify?" + new Date)
				}
			})
		}
	}else{
		if(flag){
			wuqiu_dialog(1,"请填写完整")
			flag = false
			setTimeout(function(){flag=true;$("#btn").val("登录")},1000)
		}
		
	}
})
$("#codeimg").click(function () {
	$(this).attr("src","http://localhost:80/getVerify?" + new Date)
})
