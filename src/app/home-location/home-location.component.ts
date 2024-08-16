import { Component,Input,Output } from '@angular/core';
import { HomeLocation } from './HomeLocation';
import { RouterModule } from '@angular/router';
@Component({
selector: 'app-home-location',
standalone: true,
imports: [RouterModule],
template: `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{homeLocation.ProductName}}</h5>
    <p class="card-text">{{homeLocation.ProductDescription}}</p>
    <a [routerLink]="['/details',homeLocation.ProductId]" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`,
styles: ``
})
export class HomeLocationComponent {
  @Input() homeLocation!: HomeLocation
}