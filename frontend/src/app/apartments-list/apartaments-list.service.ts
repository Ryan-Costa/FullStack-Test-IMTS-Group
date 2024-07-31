import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ApartmentCreate,
  ApartmentRequest,
  ApartmentRequestWithoutTimestemp,
  VehicleCreate,
} from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class ApartamentsService {
  constructor() {}

  private apiUrl = 'http://localhost:3000/apartments';

  http = inject(HttpClient);

  getApartments() {
    return this.http.get<ApartmentRequest[]>(this.apiUrl);
  }

  createApartment(apartment: ApartmentCreate) {
    return this.http.post<ApartmentRequest>(this.apiUrl, apartment);
  }

  updateApartment(apartment: ApartmentRequestWithoutTimestemp) {
    return this.http.put<ApartmentRequestWithoutTimestemp>(
      `${this.apiUrl}/${apartment.id}`,
      apartment
    );
  }

  deleteApartment(id: number) {
    return this.http.delete<number>(this.apiUrl + '/' + id);
  }
}
