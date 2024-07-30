import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartamentsListComponent } from './apartments-list/apartments-list.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    PanelMenuModule,
    ButtonModule,
    FormsModule,
    ApartamentsListComponent,
    VehiclesListComponent,
  ],
  providers: [],
})
export class AppModule {}
