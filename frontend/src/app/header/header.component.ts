import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Apartamentos',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/apartamentos'],
      },
      {
        label: 'Veículos',
        icon: 'pi pi-fw pi-car',
        routerLink: ['/veiculos'],
      },
    ];
  }
}
