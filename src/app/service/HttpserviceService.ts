import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseurl:string = environment.baseurl;

  products : Product[] = [];

  headers =  new HttpHeaders()
  .set("Content.type","application/json")

  selectItems = new BehaviorSubject<Product[]>([]);

  selectedItemsList = this.selectItems.asObservable();

  constructor(private http:HttpClient) { }

  getdata(endpoint:string){
    return this.http.get(this.baseurl+endpoint,{'headers':this.headers});
  }
  
  singleItem(endpoint:string,id:any){
    return this.http.get(this.baseurl+endpoint,id);
    
  }

  emitSelectedItems(product:Product[])
  {
    this.selectItems.next(product);
  }

  addquantity(product:Product){
    this.products.push(product);
     let productArr = JSON.stringify(this.products);
     localStorage.setItem('products',productArr);
     this.emitSelectedItems(this.products); 
  }
}
