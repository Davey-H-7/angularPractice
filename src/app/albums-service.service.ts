import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  constructor() { }

  getAlbums(){
    return ["album1", "album2", "album3"]
  }
}
