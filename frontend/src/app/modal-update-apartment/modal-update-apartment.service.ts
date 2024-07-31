import { Injectable, signal } from '@angular/core';
import { ApartmentEdit, ApartmentRequest } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class ModalUpdateApartmentService {
  modalEditVisible = signal(false);
  apartmentData = signal({} as ApartmentEdit);

  constructor() {}
  closeModal(): void {
    this.modalEditVisible.set(false);
  }

  openModal(apartmentData: ApartmentEdit): void {
    this.modalEditVisible.set(true);
    this.apartmentData.set({ ...apartmentData });
  }
}
