import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [CommonModule, PanelModule],
  templateUrl: './info-panel.html',
  styleUrls: ['./info-panel.css']
})
export class InfoPanel {

}