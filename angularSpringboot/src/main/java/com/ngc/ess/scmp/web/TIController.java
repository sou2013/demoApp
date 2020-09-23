package com.ngc.ess.scmp.web;

import java.util.List;

import com.ngc.ess.scmp.entity.TerminalImage;
import com.ngc.ess.scmp.repository.TIRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class TIController {

    private final TIRepository tiRepository;

    public TIController(TIRepository tiRepository) {
        this.tiRepository = tiRepository;
    }

    @GetMapping("/terminalImages")
    public List<TerminalImage> getTerminalImages() {
        System.out.println("in getTerminalImages()...");
        return (List<TerminalImage>) tiRepository.findAll();
    }

    @PostMapping("/terminalImages")
    public void addTerminalImage(@RequestBody TerminalImage terminalImage) {
        tiRepository.save(terminalImage);
    }
}