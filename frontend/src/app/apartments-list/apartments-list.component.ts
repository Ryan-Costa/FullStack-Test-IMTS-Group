import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApartamentsService } from './apartaments-list.service';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {
  ApartmentCreate,
  ApartmentRequest,
  ApartmentRequestWithoutTimestemp,
} from '../model/models';
import { ModalCreateApartmentComponent } from '../modal-create-apartment/modal-create-apartment.component';
import { ModalUpdateApartmentComponent } from '../modal-update-apartment/modal-update-apartment.component';
// import { VehiclesService } from '../vehicles-list/vehicles-list.service';
// import { ModalCreateApartmentComponent } from '../modal-create-apartment/modal-create-apartment.component';

@Component({
  selector: 'app-apartaments-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputIconModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    ModalCreateApartmentComponent,
    ModalUpdateApartmentComponent,
  ],
  templateUrl: './apartments-list.component.html',
  styleUrl: './apartments-list.component.scss',
})
export class ApartamentsListComponent implements OnInit {
  title = 'Apartamentos';
  titleService = inject(Title);

  modalCreateVisible: boolean = false;
  modalEditVisible: boolean = false;
  modalAddVehicleVisible: boolean = false;

  apartamentsService = inject(ApartamentsService);
  // vehiclesService = inject(VehiclesService);
  $apartments: ApartmentRequest[] = [];

  ngOnInit(): void {
    this.titleService.setTitle(`IMTS | ${this.title}`);
    this.getApartments();
  }

  getApartments(): void {
    this.apartamentsService.getApartments().subscribe({
      next: (apartments) => {
        console.log('apartments', apartments);
        this.$apartments = apartments ?? [];
      },
      error: (error) => console.error('Error:', error),
    });
  }

  createApartment(apartment: ApartmentCreate): void {
    this.apartamentsService.createApartment(apartment).subscribe({
      next: () => {
        alert('Apartamento criado');
        this.getApartments();
      },
      error: (error) => console.error('Error:', error),
    });
  }

  updateApartment(apartment: ApartmentRequestWithoutTimestemp): void {
    this.apartamentsService.updateApartment(apartment).subscribe({
      next: () => {
        alert('Apartamento atualizado');
        this.getApartments();
      },
      error: (error) => console.error('Error:', error),
    });
  }

  deleteApartment(apartment_id: number): void {
    this.apartamentsService.deleteApartment(apartment_id).subscribe({
      next: () => {
        alert('Apartamento excluído');
        this.getApartments();
      },
      error: (error) => console.error('Error:', error),
    });
  }

  closeModal(): void {
    this.modalCreateVisible = false;
    this.modalEditVisible = false;
    this.modalAddVehicleVisible = false;
  }

  newApartment(): void {
    this.modalCreateVisible = true;
    console.log('new apartment');
  }

  editApartment(): void {
    this.modalEditVisible = true;
    console.log('edit apartment');
  }

  addVehicle(apartment_id: number): void {
    this.modalAddVehicleVisible = true;
  }

  // deleteApartment(apartment: any): void {
  //   console.log('delete vehicle', apartment);
  // }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
