package com.peach.springboot.dao;

import com.peach.springboot.bean.City;

import java.util.List;

public interface CityDao {
    List<City> selectCities();
}
