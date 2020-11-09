package com.example.myweb.dao;

import com.example.myweb.bean.Admin;

import java.util.List;

public interface AdminDao {

    List<Admin> selectAll();
    Admin verifyUser(Admin admin);
    int insertUser(Admin admin);
}
