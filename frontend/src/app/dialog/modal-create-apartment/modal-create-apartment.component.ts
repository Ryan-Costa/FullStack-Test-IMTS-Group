import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApartmentCreate } from '../../model/models';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-modal-create-apartment',
  standalone: true,
  templateUrl: './modal-create-apartment.component.html',
  styleUrls: ['./modal-create-apartment.component.scss'],
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
export class ModalCreateApartmentComponent {
  @Input() visible: boolean = false;
  @Input() apartmentCreate: ApartmentCreate = {
    block: '',
    apartmentNumber: '',
    resident: '',
    phone: '',
    email: '',
  };

  @Output() onClose = new EventEmitter<void>();
  @Output() onCreate = new EventEmitter<ApartmentCreate>();

  closeModal() {
    this.onClose.emit();
  }

  createApartment() {
    const apartmentToSubmit = {
      ...this.apartmentCreate,
    };

    this.onCreate.emit(apartmentToSubmit);
    this.closeModal();
  }
}
