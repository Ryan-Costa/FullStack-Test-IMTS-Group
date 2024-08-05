import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VehicleCreate, VehicleEdit, VehicleRequest } from '../model/models';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor() {}

  private apiUrl = `${environment.api}/vehicles`;

  http = inject(HttpClient);

  getVehicles() {
    return this.http.get<VehicleRequest[]>(this.apiUrl);
  }

  createVehicle(vehicle: VehicleCreate) {
    return this.http.post<VehicleCreate>(this.apiUrl, vehicle);
  }

  updateVehicle(vehicle: VehicleEdit) {
    return this.http.put<VehicleEdit>(`${this.apiUrl}/${vehicle.id}`, vehicle);
  }

  deleteVehicle(vehicleId: string) {
    return this.http.delete<VehicleRequest>(`${this.apiUrl}/${vehicleId}`);
  }
}
