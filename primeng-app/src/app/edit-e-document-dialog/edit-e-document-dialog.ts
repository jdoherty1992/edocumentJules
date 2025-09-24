import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-edit-e-document-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    TabViewModule,
    InputSwitchModule,
    DropdownModule
  ],
  templateUrl: './edit-e-document-dialog.html',
  styleUrls: ['./edit-e-document-dialog.css']
})
export class EditEDocumentDialog implements OnInit {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  editEDocumentForm: FormGroup;
  pdfTypes: any[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editEDocumentForm = this.fb.group({
      name: [''],
      documentType: ['Generated'],
      assembleDocument: [true],
      copyContent: [true],
      editAnnotations: [true],
      editContent: [true],
      fillFormFields: [true],
      allowPrint: [true],
      landscapeOrientation: [false],
      embedFonts: [true],
      jpegCompressionEnabled: [true],
      scaleImages: [true],
      generateSinglePagePdf: [true],
      pdfType: ['Full']
    });

    this.pdfTypes = [
      { label: 'Full', value: 'Full' },
      { label: 'Standard', value: 'Standard' },
      { label: 'Basic', value: 'Basic' }
    ];
  }

  save() {
    console.log(this.editEDocumentForm.value);
    this.closeDialog();
  }

  closeDialog() {
    this.displayChange.emit(false);
  }
}