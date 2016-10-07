import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from './album.model';

@Component({
  selector: 'albums',
  template: `
    <div class="album" *ngFor="let album of albums" (click)="gotoDetail(album)">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
    </div>
  `
})

export class AlbumListComponent {
  constructor(private router: Router) { }

  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995, 1),
    new Album("Funhouse", "The Stooges", 1970, 2),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008, 3),
    new Album("Dilate", "Ani DiFranco", 1996, 4),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015, 5),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967, 6)
  ];
  gotoDetail(clickedAlbum: Album): void {
    // alert(clickedAlbum.title);
    this.router.navigate(['/album-details', clickedAlbum.id]);
  }
}

