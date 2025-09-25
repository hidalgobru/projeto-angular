//organizar todos os imports do angular material em um arquivo
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
  ], //exportar todos os módulos do angular material
})
export class AppMaterialModule { }
