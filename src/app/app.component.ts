import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Page about me';

  name = 'Мартин Вълчев';
  age = 21;
  occupation = 'Студент'
  speciality = 'Информатика'
  course = 'Трети'

  hobby1 = 'Cooking';
  hobby2 = 'Gaming';
  hobby3 = 'Watching movies';
  interes11 = 'Coding'
  
  title2="Светът на Ванката"

  javaApp = 150 + ' ' + "USD";
  NetApp = 180 + ' ' + "USD";
  jsAPP = 165 + ' ' + "USD";
  DataScienceApp = 200 + ' ' + "USD";

}
