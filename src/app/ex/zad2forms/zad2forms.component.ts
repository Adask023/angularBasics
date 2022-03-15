import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad2forms',
  templateUrl: './zad2forms.component.html',
  styleUrls: ['./zad2forms.component.css'],
})
export class Zad2formsComponent implements OnInit {
  form1: string = '';
  form2: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleFormChange(e) {
    this.form1 = (<HTMLInputElement>e.target).value;
  }
  handleFormReset() {
    this.form1 = '';
    this.form2 = '';
  }
}
