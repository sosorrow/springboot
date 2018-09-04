package com.peach.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlController extends BasicController {

    @RequestMapping("/index")
    String index(Model model) {
        return page(model, "content");
    }

    @RequestMapping("/front")
    String front(Model model) {
        return front(model, "content");
    }
}
