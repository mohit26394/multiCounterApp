import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  buttonClickedCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.buttonClickedCount++;
    console.log(this.buttonClickedCount);
  }

}
