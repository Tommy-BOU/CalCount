import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCalForm } from "./add-cal-form/add-cal-form";
import { CalList } from "./cal-list/cal-list";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddCalForm, CalList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CalCount');
}
