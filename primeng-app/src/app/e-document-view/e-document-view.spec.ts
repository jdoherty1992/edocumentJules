import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDocumentView } from './e-document-view';

describe('EDocumentView', () => {
  let component: EDocumentView;
  let fixture: ComponentFixture<EDocumentView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDocumentView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDocumentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
