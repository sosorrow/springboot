package com.peach.springboot.controller.background;

import com.peach.springboot.service.CityService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @Autowired
    private CityService cityService;

    @RequestMapping(value = "/init", produces = "application/json;charset=UTF-8")
    String init() {
        JSONObject json = new JSONObject();
        json.put("status", 1);
        json.put("msg", "This is msg use JSON.");
        return json.toString();
    }

    @RequestMapping(value = "/cities/{page}/{count}", produces = "application/json;charset=UTF-8")
    String cities(
            @PathVariable("page") int page,
            @PathVariable("count") int count) {

        JSONArray arrays = JSONArray.fromObject(cityService.select(page, count));
        return arrays.toString();
    }
}
