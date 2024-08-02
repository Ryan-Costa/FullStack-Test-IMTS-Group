import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  Component,
  inject,
  makeStateKey,
  OnInit,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
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
  VehicleCreate,
} from '../model/models';
import { ModalCreateApartmentComponent } from '../dialog/modal-create-apartment/modal-create-apartment.component';
import { ModalUpdateApartmentComponent } from '../dialog/modal-update-apartment/modal-update-apartment.component';
import { ModalUpdateApartmentService } from '../dialog/modal-update-apartment/modal-update-apartment.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';
import { VehiclesService } from '../vehicles-list/vehicles-list.service';
import { ModalCreateVehicleComponent } from '../dialog/modal-create-vehicle/modal-create-vehicle.component';
import { ModalCreateVehicleService } from '../dialog/modal-create-vehicle/modal-create-vehicle.service';

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
    ModalCreateVehicleComponent,
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
  modalUpdateApartmentService = inject(ModalUpdateApartmentService);
  vehiclesService = inject(VehiclesService);
  modalCreateVehicleService = inject(ModalCreateVehicleService);

  modalCreateVisible: boolean = false;
  modalEditApartmentVisible = this.modalUpdateApartmentService.modalEditVisible;
  modalAddVehicleVisible = this.modalCreateVehicleService.modalAddVisible;

  apartmentNumber: WritableSignal<string> = signal('');

  constructor(private router: Router) {}

  $apartments: ApartmentRequest[] = [];

  ngOnInit(): void {
    this.titleService.setTitle(`IMTS | ${this.title}`);
    this.getApartments();
  }

  getApartments(): void {
    this.apartamentsService.getApartments().subscribe({
      next: (apartments) => {
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

  deleteApartment(apartment_id: number, event: MouseEvent): void {
    event.stopPropagation();
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
  }

  newApartment(): void {
    this.modalCreateVisible = true;
    console.log('new apartment');
  }

  addVehicle(
    apartmentId: string,
    apartmentNumber: string,
    event: MouseEvent
  ): void {
    event.stopPropagation();
    this.modalCreateVehicleService.openModal(apartmentId, apartmentNumber);
    this.apartmentNumber.set(apartmentNumber);
  }

  editApartment(apartment: ApartmentEdit, event: MouseEvent): void {
    event.stopPropagation();
    this.modalUpdateApartmentService.openModal(apartment);
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
