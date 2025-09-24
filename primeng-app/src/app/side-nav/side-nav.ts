import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.css']
})
export class SideNav implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Journeys', icon: 'pi pi-fw pi-send' },
      { label: 'Contacts', icon: 'pi pi-fw pi-users' },
      { label: 'Content', icon: 'pi pi-fw pi-file', items: [
        { label: 'Emails', icon: 'pi pi-fw pi-envelope' },
        { label: 'Landing Pages', icon: 'pi pi-fw pi-desktop' },
        { label: 'Messages', icon: 'pi pi-fw pi-comment' },
        { label: 'EDocuments', icon: 'pi pi-fw pi-file-pdf', styleClass: 'active-menu-item' }
      ]},
      { label: 'Reports', icon: 'pi pi-fw pi-chart-bar' },
      { label: 'Segmentation', icon: 'pi pi-fw pi-chart-pie' },
      { label: 'Automation', icon: 'pi pi-fw pi-cog' }
    ];
  }
}