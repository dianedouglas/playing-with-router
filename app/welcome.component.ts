import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
    <p>sup</p>
  `
})
export class WelcomeComponent {

  constructor(private router: Router) {}

}