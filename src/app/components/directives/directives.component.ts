import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent implements OnInit {

  size: number = 40;
  font: string = 'Arial';
  color: string = 'blue';

  classes: string[] = ['classe1', 'classe2'];
  underline: string = 'underline';
  paragraphy: string[] = [this.underline, ...this.classes];

  constructor() { }

  ngOnInit(): void {
  }

}
