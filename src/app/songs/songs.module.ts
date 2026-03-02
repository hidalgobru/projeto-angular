import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs/songs.component';
import { MatSortHeader } from "@angular/material/sort";


@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,
    AppMaterialModule,
    MatSortHeader
]
})
export class SongsModule { }
