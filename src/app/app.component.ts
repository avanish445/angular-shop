import { NgFor, NgIf } from '@angular/common';
import { Component, effect, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { UserContentComponent } from './user-content/user-content.component';
import { ProductService } from './services/product.service';
// import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterLink,
    RouterOutlet,
    HeaderComponent,
    // BasicFormComponent,
    // NgFor,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'angular-project';
  username: string = '';
  constructor(private product: ProductService) {}
  // ngOnInit() {
  //   this.product.getProducts().subscribe({
  //     next: (data) => {
  //       console.log('data fetched', data);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching products:', error);
  //     },
  //     complete: () => {
  //       console.log('Product fetching completed');
  //     },
  //   });
  // }
  onChange(event: Event) {
    console.log('event', event);
    // let userName = event.target as HTMLInputElement;
    // console.log(userName);
  }
}
