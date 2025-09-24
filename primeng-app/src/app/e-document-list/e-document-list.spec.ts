import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDocumentList } from './e-document-list';

describe('EDocumentList', () => {
  let component: EDocumentList;
  let fixture: ComponentFixture<EDocumentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDocumentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDocumentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
