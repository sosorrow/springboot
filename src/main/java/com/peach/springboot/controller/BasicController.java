package com.peach.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class BasicController {

    protected String page(Model model, String url) {
        model.addAttribute("contentPath", url);
        return "/fragments/index";
    }
}
