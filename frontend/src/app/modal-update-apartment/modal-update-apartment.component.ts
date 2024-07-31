import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApartmentCreate,
  ApartmentEdit,
  ApartmentRequest,
  ApartmentRequestWithoutTimestemp,
  VehicleCreate,
} from '../model/models';

@Component({
  selector: 'app-modal-update-apartment',
  standalone: true,
  templateUrl: './modal-update-apartment.component.html',
  styleUrls: ['./modal-update-apartment.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ModalUpdateApartmentComponent {
  @Input() visible: boolean = false;

  @Input() apartmentEdit: ApartmentEdit = {
    id: '',
    block: '',
    apartmentNumber: '',
    resident: '',
    phone: '',
    email: '',
  };
  @Output() onClose = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<ApartmentRequestWithoutTimestemp>();

  closeModal() {
    this.onClose.emit();
  }

  updateApartment() {
    const apartmentToSubmit = {
      id: Number(this.apartmentEdit?.id),
      block: Number(this.apartmentEdit?.block),
      apartmentNumber: Number(this.apartmentEdit?.apartmentNumber),
      resident: this.apartmentEdit?.resident,
      phone: this.apartmentEdit?.phone,
      email: this.apartmentEdit?.email,
    };

    this.onEdit.emit(apartmentToSubmit);
    this.closeModal();
  }
}
