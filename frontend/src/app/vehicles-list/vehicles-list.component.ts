import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { VehiclesService } from './vehicles-list.service';
import { Title } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { VehicleCreate, VehicleRequest } from '../model/models';
import { DialogModule } from 'primeng/dialog';
// import { ModalCreateVehicleComponent } from '../modal-create-vehicle/modal-create-vehicle.component';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputIconModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    // ModalCreateVehicleComponent,
  ],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
})
export class VehiclesListComponent implements OnInit {
  title = 'Veículos';
  titleService = inject(Title);
  modalVisible: boolean = false;

  vehiclesService = inject(VehiclesService);
  $vehicles: VehicleRequest[] = [];

  ngOnInit(): void {
    this.titleService.setTitle(`IMTS | ${this.title}`);
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehiclesService.getVehicles().subscribe({
      next: (vehicles) => {
        this.$vehicles = vehicles ?? [];
      },
      error: (error) => console.error('Error:', error),
    });
  }

  updateVahicle(vehicle: any): void {
    console.log('edit vehicle', vehicle);
  }

  deleteVehicle(vehicleId: any): void {
    this.vehiclesService.deleteVehicle(vehicleId).subscribe({
      next: () => {
        alert('Veículo excluído com sucesso!');
        this.getVehicles();
      },
      error: (error) => console.error('Error:', error),
    });
  }

  formatDate(date: string): Date {
    const [day, month, year] = date.split('/');
    return new Date(+year, +month - 1, +day);
  }

  showModal(): void {
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }
}
