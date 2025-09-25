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
      { _id: '1', title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
    ];
  }
}
