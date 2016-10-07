import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'album-details',
  template: `
    <h2>This album has id number: {{id}}</h2>
  `
})
export class AlbumDetailsComponent implements OnInit{
  public id: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });  
  }
  goBack(): void {
    this.location.back();
  }

}