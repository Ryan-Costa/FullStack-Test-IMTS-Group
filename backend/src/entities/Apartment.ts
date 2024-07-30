import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vehicle } from "./Vehicle";
import { v4 as uuid } from "uuid";

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  block: number;

  @Column()
  apartmentNumber: number;

  @Column({ length: 150 })
  resident: string;

  @Column({ length: 13 })
  phone: string;

  @Column({ length: 100, nullable: true })
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
