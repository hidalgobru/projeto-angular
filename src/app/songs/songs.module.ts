import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    SongsRoutingModule,
    AppMaterialModule
  ]
})
export class SongsModule { }
