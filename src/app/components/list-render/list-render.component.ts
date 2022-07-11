import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interface/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} é um ${animal.type} e tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }


}
