import {Component} from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  template: `
    <h1>Default2</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
