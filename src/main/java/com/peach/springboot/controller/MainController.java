package com.peach.springboot.controller;

import com.peach.springboot.service.CityService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    private CityService cityService;

    @RequestMapping(value = "/", produces = "application/json;charset=UTF-8")
    String init() {
        JSONObject json = new JSONObject();
        json.put("status", 1);
        json.put("msg", "This is msg use JSON.");
        return json.toString();
    }

    @RequestMapping(value = "/cities", produces = "application/json;charset=UTF-8")
    String cities() {
        JSONArray arrays = JSONArray.fromObject(cityService.select());
        return arrays.toString();
    }
}
