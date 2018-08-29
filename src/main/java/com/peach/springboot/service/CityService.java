package com.peach.springboot.service;

import com.peach.springboot.bean.City;
import com.peach.springboot.dao.CityDao;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("cityService")
public class CityService {
    @Resource
    private CityDao cityDao;

    public List<City> select(int page, int count) {
        return cityDao.selectCities((page - 1) * count, count);
    }
}
