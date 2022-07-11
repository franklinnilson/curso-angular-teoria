import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.sass']
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = '';
  @Input() userData: { nome: string, telefone: string } = {
    nome: '',
    telefone: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
