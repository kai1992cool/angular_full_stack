import { Injectable } from '@angular/core';
import { HomeLocation } from './home-location/HomeLocation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:5150"
  protected homeLocationList2: HomeLocation[] = [];
  
  constructor(private http:HttpClient) { 
  }


  getAllProduct(): Observable<HomeLocation[]>{
    const response = this.http.get<HomeLocation[]>(`${this.url}/Home/AllProduct`)
    return response 
  }

  getHomeLocationById(id:number): Observable<HomeLocation|undefined>{
    const data = this.http.get<HomeLocation>(`${this.url}/Home/Product/${id}`)
    // const data = await fetch(`${this.url}/Home/Product/${id}`)
    return data;
  }
  sendFormValues(name:string, email:string,password:string){
    console.log(name,email,password)
  }
}
