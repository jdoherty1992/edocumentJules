import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from 'primeng/selectbutton';

import { EditEDocumentDialog } from '../edit-e-document-dialog/edit-e-document-dialog';

@Component({
  selector: 'app-e-document-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TabsModule,
    SelectButtonModule,
    EditEDocumentDialog
  ],
  templateUrl: './e-document-view.html',
  styleUrls: ['./e-document-view.css']
})
export class EDocumentView implements OnInit {
  displayDialog: boolean = false;
  viewOptions: any[] = [];
  selectedView: string = 'desktop';

  ngOnInit() {
    this.viewOptions = [
      { icon: 'pi pi-desktop', value: 'desktop' },
      { icon: 'pi pi-mobile', value: 'mobile' }
    ];
  }

  showDialog() {
    this.displayDialog = true;
  }
}