import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalCreateVehicleService {
  modalAddVisible = signal(false);
  //   apartmentId = signal({} as string);

  constructor() {}
  closeModal(): void {
    this.modalAddVisible.set(false);
  }

  openModal(apartmentId: string, apartmentNumber: string): void {
    this.modalAddVisible.set(true);
    console.log('criar veiculo no ap ', apartmentNumber);
    // this.apartmentData.set({ ...apartmentData });
  }
}
