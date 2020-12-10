package com.ngc.ess.scmp.web;

import java.util.List;
import java.io.*;

import com.ngc.ess.scmp.entity.TerminalImage;
import com.ngc.ess.scmp.repository.TIRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
        this.execCall();
        return (List<TerminalImage>) tiRepository.findAll();
    }

    @PostMapping("/terminalImages")
    public void addTerminalImage(@RequestBody TerminalImage terminalImage) {
        tiRepository.save(terminalImage);
    }

    @PostMapping("/addImage")
    public String addTerminalImage(@RequestParam("imageId") String imageId, @RequestParam("fileName") String fileName ) {
        //tiRepository.save(terminalImage);
        System.out.println("wwwww here ....");
        this.execCall();
        return "/images" ;
    }
    
    private void execCall(){
        Runtime r = Runtime.getRuntime();
        try {
            Process p = r.exec("/app/hello2");
            p.waitFor();
            BufferedReader b = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String line = "";

            while ((line = b.readLine()) != null) {
                System.out.println("result from exec: " + line);
            }

            b.close();
        }catch(Exception e) {
            e.printStackTrace();
        }
    }
}