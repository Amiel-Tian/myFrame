package com.example.myweb.service;

import com.example.myweb.bean.Admin;
import com.example.myweb.dao.AdminDao;
import com.example.myweb.utils.MybatisUtil;
import com.example.myweb.utils.RandomCode;
import org.apache.ibatis.logging.Log;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AdminService {
    /**验证用户*/
    public int VerifyUser(Admin admin, String code, HttpServletRequest request){
        HttpSession session = request.getSession();
        String codekey = (String) session.getAttribute("RANDOMCODEKEY");

        if (code.equals(codekey)){
            SqlSession sqlSession = MybatisUtil.getSqlSession();
            AdminDao mapper = sqlSession.getMapper(AdminDao.class);
            Admin admins = mapper.verifyUser(admin);
            sqlSession.close();
            if (admins != null) {
                return 1;
            }return -1;
        }else return 0;
    }
    /**创建用户*/
    public int insertUser(Admin admin, String code, HttpServletRequest request){
        HttpSession session = request.getSession();
        String codekey = (String) session.getAttribute("RANDOMCODEKEY");

        if (code.equals(codekey)){
            SqlSession sqlSession = MybatisUtil.getSqlSession();
            AdminDao mapper = sqlSession.getMapper(AdminDao.class);
            int admins = mapper.insertUser(admin);
            sqlSession.close();
            if (admins > 0) {
                return 1;
            }return -1;
        }else return 0;
    }
    /**
     * 生成验证码
     */
    public void getVerify(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("image/jpeg");//设置相应类型,告诉浏览器输出的内容为图片
            response.setHeader("Pragma", "No-cache");//设置响应头信息，告诉浏览器不要缓存此内容
            response.setHeader("Cache-Control", "no-cache");
            response.setDateHeader("Expire", 0);
            RandomCode randomValidateCode = new RandomCode();
            randomValidateCode.getRandcode(request, response);//输出验证码图片方法
        } catch (Exception e) {
            Log logger = null;
            logger.error("获取验证码失败>>>>   ", e);
        }
    }
}
