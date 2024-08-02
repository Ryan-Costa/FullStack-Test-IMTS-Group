import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "integer" })
  block: number;

  @Column({ type: "integer" })
  apartmentNumber: number;

  @Column({ length: 150, type: "varchar" })
  resident: string;

  @Column({ length: 13, type: "varchar" })
  phone: string;

  @Column({ length: 100, nullable: true, type: "varchar" })
  email?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.apartment)
  vehicles: Vehicle[];
}
