package com.mlb_stats.baseball.hof;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class HofController {

    @Autowired
    private HofService hofService;

    @GetMapping("/hof")
    public List<HofModel> getAllHof() {return hofService.getAllHof();}

    @PostMapping("/hof")
    public void addHof(@RequestBody HofModel hof) {hofService.addHof(hof);}
}
