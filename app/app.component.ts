import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">Cameron</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/locations">Locations</a></li>
          <li><a routerLink="/">Home</a></li>
        </ul>
      </div><!-- /.container-fluid -->
    </nav>

    <div class="container">
      <h1>Cameron's Music</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}