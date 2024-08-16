import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HomeLocation } from '../home-location/HomeLocation';
import { HousingService } from '../housing.service';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  template: `
    <p>
      details works! {{homeLocation?.ProductId}}
    </p>
    <form [formGroup]="myForm" (submit)="onSubmit()">
      <label for="name" id="name">Name</label>
      <input type="text" formControlName="name">
      <label for="email" id="email">Email</label>
      <input type="email" formControlName="email">
      <label for="password">Password</label>
      <input type="password" id="pass" formControlName="password">
      <button type="submit" class="btn btn-primary">submit</button>
    </form>
  `,
  styles: ``
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  homeLocationId = 0
  homeLocation : HomeLocation | undefined
  homeService:HousingService = inject(HousingService)

  myForm = new FormGroup(
    {
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    }
  )
  constructor(){
    this.homeLocationId = Number(this.route.snapshot.params["id"])
    
    this.homeService.getHomeLocationById(this.homeLocationId).subscribe(e=>{
      this.homeLocation = e
    })
  }

  onSubmit(){
    this.homeService.sendFormValues(this.myForm.value.name??"",this.myForm.value.email??"",this.myForm.value.password??"")
  }
}
