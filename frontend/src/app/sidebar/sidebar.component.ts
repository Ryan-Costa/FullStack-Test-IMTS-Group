import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
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
