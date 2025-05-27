import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-content',
  imports: [],
  templateUrl: './user-content.component.html',
  styleUrl: './user-content.component.css',
})
export class UserContentComponent {
  @Output() getUsers = new EventEmitter();
  userList = ['Ajay', 'Aman', 'Anil', 'Amit', 'Arun'];
  handleGetUsers() {
    this.getUsers.emit(this.userList);
  }
}
