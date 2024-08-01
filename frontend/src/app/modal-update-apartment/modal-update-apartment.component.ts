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
import {
  ApartmentEdit,
  ApartmentRequestWithoutTimestemp,
} from '../model/models';
import { ModalUpdateApartmentService } from './modal-update-apartment.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-modal-update-apartment',
  standalone: true,
  templateUrl: './modal-update-apartment.component.html',
  styleUrls: ['./modal-update-apartment.component.scss'],
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
export class ModalUpdateApartmentComponent {
  @Input() visible: boolean = false;

  @Output() onClose = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<ApartmentRequestWithoutTimestemp>();

  modalUpdateService = inject(ModalUpdateApartmentService);
  apartmentEditSignal = this.modalUpdateService.apartmentData;
  apartmentEdit: ApartmentEdit = {} as ApartmentEdit;

  constructor() {
    effect(() => {
      this.apartmentEdit = this.apartmentEditSignal();
    });
  }

  closeModal() {
    this.modalUpdateService.closeModal();
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
