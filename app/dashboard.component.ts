import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
    <p>sup</p>
  `
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void { }
}