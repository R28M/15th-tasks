import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product';
import { HttpClient } from '@angular/common/http';
//import { threadId } from 'worker_threads';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getallproduct():Observable<Product[]>{
    return this.http.get<Product[]>('https://localhost:7111/api/Productdetails');
  }
}
