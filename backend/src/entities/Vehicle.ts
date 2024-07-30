import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";
import { Apartment } from "./Apartment";
import { v4 as uuid } from "uuid";

@Entity()
@Unique(["plate"])
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Apartment, (apartment) => apartment.vehicles, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "apartment_id" })
  apartment: Apartment;

  @Column({ type: "varchar", length: 50 })
  brand: string;

  @Column({ type: "varchar", length: 30 })
  model: string;

  @Column({ type: "varchar", length: 15 })
  color: string;

  @Column({ type: "varchar", length: 7 })
  plate: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
