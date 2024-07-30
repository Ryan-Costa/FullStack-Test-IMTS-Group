import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";
import { Apartment } from "./Apartment";

@Entity()
@Unique(["plate"])
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
