import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad3directivesComponent } from './zad3directives.component';

describe('Zad3directivesComponent', () => {
  let component: Zad3directivesComponent;
  let fixture: ComponentFixture<Zad3directivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad3directivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad3directivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
