export type VehicleRequest = {
  id: number;
  brand: string;
  model: string;
  color: string;
  plate: string;
  createdAt: Date;
  updatedAt: Date;
  apartment: {
    id: number;
    block: number;
    apartmentNumber: number;
    resident: number;
    phone: string;
    email?: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type VehicleWithoutApId = {
  brand: string;
  model: string;
  color: string;
  plate: string;
};

export type VehicleCreate = {
  brand: string;
  model: string;
  color: string;
  plate: string;
  apartment_id: number;
};

export type VehiclePost = {
  brand: string;
  model: string;
  color: string;
  plate: string;
  apartmentId: number;
};

export type VehicleEdit = {
  brand: string;
  model: string;
  color: string;
  plate: string;
  apartmentId: string;
};

export type ApartmentRequest = {
  id: number;
  block: number;
  apartmentNumber: number;
  resident: string;
  phone: string;
  email?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ApartmentRequestWithoutTimestemp = {
  id: number;
  block: number;
  apartmentNumber: number;
  resident: string;
  phone: string;
  email?: string | null;
};

export type ApartmentCreate = {
  block: string;
  apartmentNumber: string;
  resident: string;
  phone: string;
  email?: string | null;
};

export type ApartmentEdit = {
  id: string;
  block: string;
  apartmentNumber: string;
  resident: string;
  phone: string;
  email?: string | null;
};
