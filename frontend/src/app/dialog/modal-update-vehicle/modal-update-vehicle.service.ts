import { Injectable, signal } from '@angular/core';
import { VehicleEdit } from '../../model/models';

@Injectable({
  providedIn: 'root',
})
export class ModalUpdateVehicleService {
  modalEditVisible = signal(false);
  vehicleData = signal({} as VehicleEdit);

  constructor() {}
  closeModal(): void {
    this.modalEditVisible.set(false);
  }

  openModal(vehicleData: VehicleEdit): void {
    this.modalEditVisible.set(true);
    this.vehicleData.set({ ...vehicleData });
  }
}
