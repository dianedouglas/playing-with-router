import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Cameron's Music</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}