import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { EditEDocumentDialog } from '../edit-e-document-dialog/edit-e-document-dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-document-view',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, EditEDocumentDialog, CommonModule],
  templateUrl: './e-document-view.html',
  styleUrls: ['./e-document-view.css']
})
export class EDocumentView {
  displayDialog: boolean = false;

  showDialog() {
    this.displayDialog = true;
  }
}