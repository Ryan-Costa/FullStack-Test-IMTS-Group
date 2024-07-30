import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
  imports: [TableModule],
})
export class VehiclesListComponent implements OnInit {
  vehicles = [
    {
      id: 1,
      apartamento: '101',
      marca: 'Toyota',
      modelo: 'Corolla',
      cor: 'Preto',
      placa: 'ABC-1234',
    },
    {
      id: 2,
      apartamento: '202',
      marca: 'Honda',
      modelo: 'Civic',
      cor: 'Branco',
      placa: 'DEF-5678',
    },
    // Adicione mais veículos conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {}
}
