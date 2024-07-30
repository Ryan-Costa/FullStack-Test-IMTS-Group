import { Component, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-apartaments-list',
  standalone: true,
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.scss'],
  imports: [TableModule],
})
export class ApartamentsListComponent implements OnInit {
  apartments = signal([
    {
      id: 1,
      resident: 'João Silva',
      block: 'A',
      apartmentNumber: '101',
      phone: '123456789',
    },
    {
      id: 2,
      resident: 'Maria Santos',
      block: 'B',
      apartmentNumber: '202',
      phone: '987654321',
    },
  ]);

  constructor() {
    this.apartments.set({
      ...this.apartments(),
    });
  }

  ngOnInit(): void {}
}
