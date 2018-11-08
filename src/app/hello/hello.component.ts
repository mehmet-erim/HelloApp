import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  @Input() data: string;
  @Output() onUpdate = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  send(value: string) {
    if (value) {
      this.onUpdate.emit(value);
    }
  }
}
