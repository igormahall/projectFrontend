import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponentComponent } from './nome-component.component';

describe('NomeComponentComponent', () => {
  let component: NomeComponentComponent;
  let fixture: ComponentFixture<NomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
