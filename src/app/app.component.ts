import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  userName = 'Fernanda';
  userData = {
    nome: 'franklin',
    telefone: '(61) 96523.7163'
  }

  title = 'curso-angular';
}
