import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalCreateVehicleService {
  modalAddVisible = signal(false);
  // apartmentId = signal({} as string);

  constructor() {}
  closeModal(): void {
    this.modalAddVisible.set(false);
  }

  openModal(): void {
    this.modalAddVisible.set(true);
  }
}
