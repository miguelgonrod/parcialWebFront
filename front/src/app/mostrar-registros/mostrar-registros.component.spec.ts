import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRegistrosComponent } from './mostrar-registros.component';

describe('MostrarRegistrosComponent', () => {
  let component: MostrarRegistrosComponent;
  let fixture: ComponentFixture<MostrarRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarRegistrosComponent]
    });
    fixture = TestBed.createComponent(MostrarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
