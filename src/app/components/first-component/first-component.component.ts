import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Franklin';
  idade: number = 30;

  constructor() { }

   ngOnInit(): void {
  }

}
