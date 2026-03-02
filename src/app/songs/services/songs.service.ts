import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Songs } from '../model/songs';

@Injectable({
  providedIn: 'root',
})
export class SongsService {

  constructor(private httpClient: HttpClient) {}

  list(): Songs[] {
    return [
      { _id: '1', title: 'Bohemian Rhapsody', artist: 'Queen', date: 1975, genre: 'Rock' },
      { _id: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin', date: 1971, genre: 'Rock' },
      { _id: '3', title: 'Hotel California', artist: 'Eagles', date: 1976, genre: 'Rock' }
    ];
  }
}
