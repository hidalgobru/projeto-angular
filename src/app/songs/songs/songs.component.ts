import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Songs } from '../model/songs';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  //aqui será renderizado a lista de músicas
  songs: Songs[] = [];
  //sempre que fizer referências de variáveis, não se coloca o modificador de acesso 'private'
  displayedColumns = ['title', 'artist', 'genre'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = [5, 10, 20];

  constructor(private songsService: SongsService;) {
    //this.songs = [];
    //this.songsService = new SongsService();
    this.songs = this.songsService.list();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
