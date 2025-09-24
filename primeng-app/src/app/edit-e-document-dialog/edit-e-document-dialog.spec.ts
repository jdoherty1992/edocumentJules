import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEDocumentDialog } from './edit-e-document-dialog';

describe('EditEDocumentDialog', () => {
  let component: EditEDocumentDialog;
  let fixture: ComponentFixture<EditEDocumentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEDocumentDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEDocumentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});