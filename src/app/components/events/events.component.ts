import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  showContent: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    // similar ao toggle
    this.showContent = !this.showContent;
  }

}
