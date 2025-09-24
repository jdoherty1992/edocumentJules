import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-document-list',
  standalone: true,
  imports: [PanelModule, ListboxModule, FormsModule],
  templateUrl: './e-document-list.html',
  styleUrls: ['./e-document-list.css']
})
export class EDocumentList implements OnInit {
  documents: any[];
  selectedDocument: any;

  ngOnInit() {
    this.documents = [
      { name: 'Smart pilot 1 customer communications' },
      { name: 'Smart pilot 2 customer communications' },
      { name: 'Smart pilot 3 customer communications' }
    ];
    this.selectedDocument = this.documents[0];
  }
}