import { Injectable } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  registeredUsers: UserInfo[] = JSON.parse(localStorage.getItem('users') ?? '[]');

  
  registerUser(user: UserInfo){
    user.id = this.registeredUsers.length + 1;
    this.registeredUsers.push(user);
    localStorage.setItem('users', JSON.stringify(this.registeredUsers));
    console.log("User registered successfully!");
  }

  getUserById(id: number){
    return this.registeredUsers.find(user => user.id === id);
  }
}
