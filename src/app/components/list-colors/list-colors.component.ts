import { Component, OnInit } from '@angular/core';

import { Color } from 'src/app/interface/Color';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-list-colors',
  templateUrl: './list-colors.component.html',
  styleUrls: ['./list-colors.component.sass']
})
export class ListColorsComponent implements OnInit {

  colors: Color[] = [];

  constructor(private colorsService: ColorsService) {
    this.getColors();
  }

  ngOnInit(): void {
  }

  getColors(): void {
    this.colorsService.getAll().subscribe((colors) => (this.colors = colors))
  }

}
