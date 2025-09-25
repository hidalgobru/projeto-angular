import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class SongsModule { }
