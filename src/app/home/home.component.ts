import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import { HttpserviceService } from '../service/HttpserviceService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  istrue:boolean = true;
  productCount:Observable<Product[]> | null = null;
  productList:Product[] = [];
  filterProductsList: Product[] = [];

  title:Product[] = [];
  price:Product[] = [];
  constructor(private http:HttpserviceService) { }


  
  ngOnInit(): void {
    this.getproductdata();
    this.productCount = this.http.selectedItemsList
    
  }
  add(){
   
  }
    sub(){
      
    }
    close(){
      
    }
    
  getproductdata(){
    this.http.getdata("productsitems").subscribe((el:any)=>{
      this.productList = el;
      this.filterCategory('all')
      console.log("product-list",this.productList);
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      console.log("Api complete");
    })
  }

  filterCategory(category:string){
    if(category != 'all'){
      this.filterProductsList = this.productList.filter((el)=>(el.category == category))
    }
    else{
      this.filterProductsList = this.productList
    }
  }

  functiondisplay(product:Product)
  {
    
    this.istrue = false;
    this.http.singleItem("productsitems",product).subscribe(el=>{
      
      // this.title = el.title;

    })
    
    this.http.addquantity(product);
  }


}
