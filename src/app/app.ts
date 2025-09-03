import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalCounter } from "./cal-counter/cal-counter";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalCounter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CalCount');
}
