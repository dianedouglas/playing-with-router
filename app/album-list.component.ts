import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from './album.model';
import { AlbumService } from './album.service';

@Component({
  selector: 'albums',
  providers: [AlbumService],
  template: `
    <div class="album" *ngFor="let album of albums" (click)="gotoDetail(album)">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
    </div>
  `
})

export class AlbumListComponent {
  constructor(private router: Router, private albumService: AlbumService) { }
  
  albums: Album[];
  
  getTheAlbumsFromTheService(): void {
    // this.albums = this.albumService.getAlbums();
    // Hey album service, get the albums. 
    // When the promise is resolved, take the array of albums it returns and put it in the albums property in this component for display.
    this.albumService.getAlbums().then(albumsReturnedFromPromise => this.albums = albumsReturnedFromPromise);
  }
  ngOnInit() {
    this.getTheAlbumsFromTheService();
  }
  gotoDetail(clickedAlbum: Album): void {
    this.router.navigate(['/album-details', clickedAlbum.id]);
  }
}

