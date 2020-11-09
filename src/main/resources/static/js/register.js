var flag = true;
$("#btn").click(function(){
	$(this).val("注册中...")

	var name = $("#user").val()
	var pass = $("#pass").val()
	var code = $("#code").val()
	
	
	if(name != "" && pass != "" && code != ""){
		if(flag){
			flag = false
			
			$.ajax({
				type:"post",
				dataType:"json",
				url:"insertUser",
				data:{name,pass,code},
				success:function (data) {
					console.log(data)
					wuqiu_dialog(0, "注册成功")
					setTimeout(function(){flag=true;$("#btn").val("注册");window.location="login.html"},1000)
				},
				error:function () {
					wuqiu_dialog(1,"连接服务器失败")
					setTimeout(function(){flag=true;$("#btn").val("注册")},1000)
					
				}
			})
			/* wuqiu_dialog(0, "登录成功")
			
			setTimeout(function(){window.location="index.html"},1000) */
			
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