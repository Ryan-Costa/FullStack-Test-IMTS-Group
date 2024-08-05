import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalUpdateVehicleService } from './modal-update-vehicle.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { VehicleEdit, VehicleEditWithoutTimestemp } from '../../model/models';

@Component({
  selector: 'app-modal-update-vehicle',
  standalone: true,
  templateUrl: './modal-update-vehicle.component.html',
  styleUrls: ['./modal-update-vehicle.component.scss'],
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
export class ModalUpdateVehicleComponent {
  @Input() visible: boolean = false;

  @Output() onClose = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<VehicleEdit>();

  modalUpdateService = inject(ModalUpdateVehicleService);
  vehicleEditSignal = this.modalUpdateService.vehicleData;
  vehicleEdit: VehicleEdit = {} as VehicleEdit;

  constructor() {
    effect(() => {
      this.vehicleEdit = this.vehicleEditSignal();
    });
  }

  closeModal() {
    this.modalUpdateService.closeModal();
  }

  updateVehicle() {
    const vehicleToSubmit = {
      id: Number(this.vehicleEdit?.id),
      brand: this.vehicleEdit?.brand,
      model: this.vehicleEdit?.model,
      color: this.vehicleEdit?.color,
      plate: this.vehicleEdit?.plate,
    };

    this.onEdit.emit(vehicleToSubmit);
    this.closeModal();
  }
}
