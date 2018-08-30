package com.peach.springboot.dao;

import com.peach.springboot.bean.City;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityDao {
    List<City> selectCities(@Param("begin") int begin, @Param("size") int size);
}
