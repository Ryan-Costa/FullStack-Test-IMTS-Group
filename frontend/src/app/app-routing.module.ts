import { Routes } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { ApartamentsListComponent } from './apartments-list/apartments-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/apartamentos', pathMatch: 'full' },
  { path: 'apartamentos', component: ApartamentsListComponent },
  { path: 'veiculos', component: VehiclesListComponent },
];
