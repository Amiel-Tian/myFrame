package com.example.myweb.controller;

import com.example.myweb.bean.Admin;
import com.example.myweb.dao.AdminDao;
import com.example.myweb.service.AdminService;
import com.example.myweb.utils.MybatisUtil;
import com.example.myweb.utils.RandomCode;
import org.apache.ibatis.logging.Log;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class AdminController {
    AdminService adminService = new AdminService();

    /**
     * 验证用户合法性
     * */
    @RequestMapping(value = "VerifyUser", method = RequestMethod.POST)
    @ResponseBody
    public int VerifyUser(Admin admin, String code, HttpServletRequest request){
        return adminService.VerifyUser(admin, code, request);
    }
    /**
     * 添加用户
     * */
    @RequestMapping(value = "insertUser", method = RequestMethod.POST)
    @ResponseBody
    public int insertUser(Admin admin, String code, HttpServletRequest request){
        return adminService.insertUser(admin, code, request);
    }

    /**
     * 生成验证码
     */
    @RequestMapping(value = "/getVerify")
    public void getVerify(HttpServletRequest request, HttpServletResponse response) {
        adminService.getVerify(request,response);
    }
}
