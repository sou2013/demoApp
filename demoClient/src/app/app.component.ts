import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData: any = {};
  title: string;

  constructor() {
    this.title = 'Mission Planner';
  }
  ngOnInit(): void {
  }
}
