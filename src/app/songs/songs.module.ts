import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SongsModule { }
