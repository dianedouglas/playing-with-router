import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-details',
  providers: [AlbumService],
  template: `
    <div *ngIf="albumToDisplay">
      <h3>{{albumToDisplay.title}}</h3>
      <p>By: {{albumToDisplay.artist}}</p>
      <p>Released: {{albumToDisplay.released}}</p>

      <div *ngIf="editing === false">
        <button (click)="showEditForm()">Edit</button>
      </div>

      <div *ngIf="editing === true">
        <label>Edit Album Title:</label>
        <input [(ngModel)]="albumToDisplay.title">
        <label>Edit Album Artist:</label>
        <input [(ngModel)]="albumToDisplay.artist">
        <label>Edit Album Release Date:</label>
        <input [(ngModel)]="albumToDisplay.released">
        <button (click)="hideEditForm()">Done</button>
      </div>
    </div>
  `
})
export class AlbumDetailsComponent implements OnInit{
  public id: number;
  public albumToDisplay: Album;
  public editing: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) {}
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.albumService.getAlbumById(this.id)
              .then(album => this.albumToDisplay = album);
    });  
  }
  goBack(): void {
    this.location.back();
  }
  showEditForm() {
    this.editing = true;
  }
  hideEditForm() {
    this.editing = false;

  }

}