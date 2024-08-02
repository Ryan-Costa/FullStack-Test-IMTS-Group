import { Routes } from '@angular/router';
import { ApartamentsListComponent } from './apartments-list/apartments-list.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { Apartment } from './apartment/apartment.component';

export const routes: Routes = [
  { path: '', redirectTo: '/apartamentos', pathMatch: 'full' },
  {
    path: 'apartamentos',
    component: ApartamentsListComponent,
    data: { title: 'Apartamentos' },
  },
  {
    path: 'veiculos',
    component: VehiclesListComponent,
    data: { title: 'Veiculos' },
  },
  {
    path: 'apartment/:id',
    component: Apartment,
  },
];
