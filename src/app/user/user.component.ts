import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserContentComponent } from '../user-content/user-content.component';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user: string | null = '';
  selectedUser: string | null = 'Aman';
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.router.params.subscribe((params) => {
      console.log('params', params);
      // You can access the user parameter like this:
      const userName = params['name'];
      console.log('User Name:', userName);
      this.user = userName;
    });
  }
}
