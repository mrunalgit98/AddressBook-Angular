import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http:HttpClient) { }

  add(address:any){
    return this.http.post(environment.api_url+"/add",address);

  }

  getAll(){
    return this.http.get(environment.api_url+"/get");
  }

  updateById(address:any,Id:number){
    return this.http.put(environment.api_url+"/update/"+Id,address);
  }
  deleteById(Id:number){
    return this.http.delete(environment.api_url+"/delete/"+Id);
  }

  getById(Id:number){
   return this.http.get(environment.api_url+"/get/"+Id);
  }
}
