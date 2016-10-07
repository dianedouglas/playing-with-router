import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

//same structure as a component. Imports, followed by a decorator with the @ symbol, then an exported class declaration.
//note the dash-case convention with .typeofthing.ts for the file name, and the name of the file is translated to upper camel case for the class declaration here.

@Injectable()
export class AlbumService {
  getAlbums(): Promise<Album[]> {
    return Promise.resolve(ALBUMS);
  }
  getAlbumById(albumId: number): Promise<Album> {
    // we need to return a promise which returns an album matching the passed in id when it resolves
    // call getAlbums
    // take the albums returned from the promise and instead of putting them in an albums property, call the JS find method 
    // this will return any albums where their id matches the one passed in. 
    return this.getAlbums()
      .then(albumsReturnedFromPromise => albumsReturnedFromPromise.find(album => album.id === albumId));
  }
}