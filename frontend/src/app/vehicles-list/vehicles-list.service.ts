import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VehicleCreate, VehicleRequest } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor() {}

  private apiUrl = 'http://localhost:3000/vehicles';

  http = inject(HttpClient);

  getVehicles() {
    return this.http.get<VehicleRequest[]>(this.apiUrl);
  }

  addVehicle(vehicle: VehicleCreate) {
    return this.http.post<VehicleCreate>(this.apiUrl, vehicle);
  }

  updateVehicle(vehicle: VehicleRequest) {
    return this.http.put<VehicleRequest>(
      `${this.apiUrl}/${vehicle.id}`,
      vehicle
    );
  }

  deleteVehicle(vehicle: VehicleRequest) {
    return this.http.delete<VehicleRequest>(`${this.apiUrl}/${vehicle.id}`);
  }
}
