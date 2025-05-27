import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constants } from 'buffer';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: string | null = '';
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    let name = this.router.queryParams.subscribe((params) => {
      console.log('params', params);
      this.user = params['name'];
    });
    // this.router.snapshot.paramMap.get('name');
    // console.log('name', name);
    //
  }
}
