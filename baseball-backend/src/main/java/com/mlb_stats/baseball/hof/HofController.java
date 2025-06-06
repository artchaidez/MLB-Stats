package com.mlb_stats.baseball.hof;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class HofController {

    @Autowired
    private HofService hofService;

    @PostMapping("/hof")
    public void addHof(@RequestBody HofModel hof) {hofService.addHof(hof);}
}
