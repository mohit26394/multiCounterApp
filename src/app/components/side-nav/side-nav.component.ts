import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  buttonClickedCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.buttonClickedCount++;
  }

}
