import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainReseauxComponent } from './contain-reseaux.component';

describe('ContainReseauxComponent', () => {
  let component: ContainReseauxComponent;
  let fixture: ComponentFixture<ContainReseauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainReseauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
