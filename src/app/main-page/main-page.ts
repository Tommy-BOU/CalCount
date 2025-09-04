import { Component } from '@angular/core';
import { AddCalForm } from "../add-cal-form/add-cal-form";
import { CalList } from "../cal-list/cal-list";

@Component({
  selector: 'app-main-page',
  imports: [AddCalForm, CalList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
