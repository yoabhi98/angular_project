import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Two way binding</p>
  {{numArray|odd}}`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chk: boolean = false;
  numArray: number[] = [44, 3, 8, 10];
}
