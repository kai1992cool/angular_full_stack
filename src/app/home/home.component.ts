import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { HomeLocationComponent } from "../home-location/home-location.component";
import { HomeLocation } from '../home-location/HomeLocation';
import { Router, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLocationComponent,CommonModule,RouterModule],
  template: `
    <form action="">
    <input type="text" placeholder="search">
    <button class="btn btn-primary mx-2">Click here</button>
    </form>
    <app-home-location *ngFor="let home of productList" [homeLocation]="home"></app-home-location>
    `,
  styles: ``
})
export class HomeComponent {
  productList:HomeLocation[] = [];
  housingService: HousingService = inject(HousingService)


  constructor(){
    this.housingService.getAllProduct().subscribe(data=>{
      this.productList = data;
    })
  }
}
