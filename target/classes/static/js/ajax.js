
function VerifyUser(name, passwd, code){
    $.ajax({
        type:"post",
        dataType:"json",
        url:"VerifyUser",
        data:{name,passwd, code},
        success:function (data) {
            if (data == 1) wuqiu_dialog(0,"登录成功")
            if (data == 0) wuqiu_dialog(1,"验证码错误")
            if (data == -1) wuqiu_dialog(1,"账号或密码错误")
        },
        error:function () {
            wuqiu_dialog(1,"连接服务器失败")
        }
    })
}