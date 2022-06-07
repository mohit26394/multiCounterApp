import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buttonClickedCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.buttonClickedCount++;
  }

}
