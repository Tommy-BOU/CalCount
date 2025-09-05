import { Component, inject } from '@angular/core';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.scss'
})
export class RegistrationForm {
  model = new User(0, '', '', '');
  submitted = false;
  service = inject(UserService);
  onSubmit() { 
    this.submitted = true;
    this.service.registerUser(this.model);
    this.model = new User(0, '', '', ''); 
  }
}
