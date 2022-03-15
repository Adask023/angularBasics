import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad2formsComponent } from './zad2forms.component';

describe('Zad2formsComponent', () => {
  let component: Zad2formsComponent;
  let fixture: ComponentFixture<Zad2formsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad2formsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zad2formsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
