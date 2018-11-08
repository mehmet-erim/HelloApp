import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HelloApp';

  name: string;

  onUpdatedData: string;

  onUpdateHello(event) {
    this.onUpdatedData = event;
  }
}
