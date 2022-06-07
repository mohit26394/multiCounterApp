import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() count: number = 0;
  @Output() btnClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  countBtnClicked() {
    this.btnClicked.emit();
  }

}
