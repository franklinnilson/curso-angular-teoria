import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.sass']
})
export class PipeOperatorsComponent implements OnInit {

  someText: string = 'This is some text';
  todaysDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
