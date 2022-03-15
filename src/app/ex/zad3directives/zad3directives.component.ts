import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad3directives',
  templateUrl: './zad3directives.component.html',
  styleUrls: ['./zad3directives.component.css'],
})
export class Zad3directivesComponent implements OnInit {
  showBlock: boolean = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick() {
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
    this.showBlock = !this.showBlock;
  }

  getItemColor() {
    return this.log.length > 5 ? 'blue' : '';
  }
}
