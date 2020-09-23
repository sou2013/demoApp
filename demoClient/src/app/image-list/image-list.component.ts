import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalImage } from '../model/terminal-image';
import { ImageService } from '../service/image.service';
  
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: TerminalImage[];

  constructor(private imageService: ImageService) {

  }

  ngOnInit() {
    console.log('111');
    this.imageService.findAll().subscribe(data => {
      this.images = data;
    });
  }

}
