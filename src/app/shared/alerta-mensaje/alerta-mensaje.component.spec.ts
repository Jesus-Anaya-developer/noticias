import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaMensajeComponent } from './alerta-mensaje.component';

describe('AlertaMensajeComponent', () => {
  let component: AlertaMensajeComponent;
  let fixture: ComponentFixture<AlertaMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
