import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Songs } from '../model/songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songs: Songs[] = [
    { _id: '1', title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock"}
  ];
  //sempre que fizer referências de variáveis, não se coloca o modificador de acesso 'private'
  displayedColumns = ['title', 'artist', 'genre'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizeOptions = [5, 10, 20];

  constructor() {
    //this.songs = [];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
