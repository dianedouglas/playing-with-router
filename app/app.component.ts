import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Music Review Site</h1>
    <div class="album" *ngFor="let album of albums">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  </div>
  `
})

export class AppComponent { 
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995),
    new Album("Funhouse", "The Stooges", 1970),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Album("Dilate", "Ani DiFranco", 1996),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ]
}

export class Album {
  constructor (public title: string, public artist: string, public released: number) {  }
}