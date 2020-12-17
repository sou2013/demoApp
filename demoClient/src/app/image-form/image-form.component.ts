import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerminalImage } from '../model/terminal-image';
import {NgForm} from '@angular/forms';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  terminalImage: TerminalImage;

  constructor(private route: ActivatedRoute, private router: Router, private imageService: ImageService) {
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log("ad1231");
    console.log('Your form data : ', form.value);
    this.terminalImage = new TerminalImage();
    this.terminalImage.imageId = form.controls["imageId"].value; // ("imageId");
    this.terminalImage.imageName = form.controls["fileName"].value; 
    
    this.imageService.createTerminalImage(this.terminalImage).subscribe(result => this.gotoUserList());
    
    //this.gotoUserList();
  }
  gotoUserList() {
    this.router.navigate(['/success']);
  }
}
