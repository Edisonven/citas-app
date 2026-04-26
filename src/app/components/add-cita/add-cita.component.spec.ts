import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCitaComponent } from './add-cita.component';

describe('AddCitaComponent', () => {
  let component: AddCitaComponent;
  let fixture: ComponentFixture<AddCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddCitaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
