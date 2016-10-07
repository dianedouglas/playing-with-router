import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'albums',
  template: `
    <div class="album" *ngFor="let album of albums">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  `
})

export class AlbumListComponent {
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995),
    new Album("Funhouse", "The Stooges", 1970),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Album("Dilate", "Ani DiFranco", 1996),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ]
}

