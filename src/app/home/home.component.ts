import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Router, RouterLink } from '@angular/router';
import { query } from 'express';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = [
    {
      id: 1,
      name: 'Avanish',
      email: 'avanish.p@gmail.com',
    },
    {
      id: 2,
      name: 'Raman',
      email: 'raman.p@gmail.com',
    },
    {
      id: '1',
      name: 'Avinash',
      email: 'avinash.p@gmail.com',
    },
    {
      id: '1',
      name: 'Harshit',
      email: 'harshit.p@gmail.com',
    },
    {
      id: '1',
      name: 'Suraj',
      email: 'suraj.p@gmail.com',
    },
  ];
  constructor(private router: Router) {}
  goToProfile() {
    // Navigate to the profile componentt
    this.router.navigate(['profile'], {
      queryParams: { name: 'Avanish Patel' },
    });
  }
}
