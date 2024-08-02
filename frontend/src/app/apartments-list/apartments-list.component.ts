import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Component, inject, makeStateKey, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApartamentsService } from './apartments-list.service';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {
  ApartmentCreate,
  ApartmentEdit,
  ApartmentRequest,
  ApartmentRequestWithoutTimestemp,
} from '../model/models';
import { ModalCreateApartmentComponent } from '../modal-create-apartment/modal-create-apartment.component';
import { ModalUpdateApartmentComponent } from '../modal-update-apartment/modal-update-apartment.component';
import { ModalUpdateApartmentService } from '../modal-update-apartment/modal-update-apartment.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';

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
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './apartments-list.component.html',
  styleUrl: './apartments-list.component.scss',
})
export class ApartamentsListComponent implements OnInit {
  title = 'Apartamentos';
  titleService = inject(Title);

  apartamentsService = inject(ApartamentsService);
  modalUpdateService = inject(ModalUpdateApartmentService);

  modalEditVisible = this.modalUpdateService.modalEditVisible;
  modalCreateVisible: boolean = false;
  modalAddVehicleVisible: boolean = false;

  // vehiclesService = inject(VehiclesService);

  constructor(private router: Router) {}

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
      error: (error) => console.log('Error:', error),
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
    this.modalAddVehicleVisible = false;
  }

  newApartment(): void {
    this.modalCreateVisible = true;
    console.log('new apartment');
  }

  editApartment(apartment: ApartmentEdit): void {
    this.modalUpdateService.openModal(apartment);
  }

  addVehicle(apartment_id: number): void {
    this.modalAddVehicleVisible = true;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }

  phoneMask(phone: string): string {
    return makeStateKey(phone);
  }

  onRowClick(id: number) {
    this.router.navigate(['/apartment', id]);
    console.log('Clicado no apartamento com ID:', id);
  }
}
