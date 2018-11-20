import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'HelloApp';

  name: string;

  onUpdatedData: string;

  onUpdateHello(event) {
    this.onUpdatedData = event;
  }
}
