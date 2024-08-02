import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleCreate } from '../../model/models';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ModalCreateVehicleService } from './modal-create-vehicle.service';

@Component({
  selector: 'app-modal-create-vehicle',
  standalone: true,
  templateUrl: './modal-create-vehicle.component.html',
  styleUrls: ['./modal-create-vehicle.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
})
export class ModalCreateVehicleComponent {
  @Input() visible: boolean = false;
  @Input() apartmentNumber: string = '';
  @Input() vehicleCreate: VehicleCreate = {
    brand: '',
    model: '',
    color: '',
    plate: '',
    apartmentId: 0,
  };

  @Output() onClose = new EventEmitter<void>();
  @Output() onCreate = new EventEmitter<VehicleCreate>();

  modalCreateService = inject(ModalCreateVehicleService);

  closeModal() {
    this.modalCreateService.closeModal();
  }

  createVehicle() {
    const vehicleToSubmit = {
      ...this.vehicleCreate,
    };

    this.onCreate.emit(vehicleToSubmit);
    this.closeModal();
  }
}
