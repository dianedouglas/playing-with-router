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
    this.albums = this.albumService.getAlbums();
  }
  ngOnInit() {
    this.getTheAlbumsFromTheService();
  }
  gotoDetail(clickedAlbum: Album): void {
    this.router.navigate(['/album-details', clickedAlbum.id]);
  }
}

