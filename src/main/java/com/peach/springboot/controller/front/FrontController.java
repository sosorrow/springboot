package com.peach.springboot.controller.front;

import com.peach.springboot.controller.BasicController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontController extends BasicController {

    @RequestMapping("/index")
    String index(Model model) {
        return page(model, "/fragments/background/content");
    }

    @RequestMapping("/front")
    String front(Model model) {
        return front(model, "content");
    }
}
