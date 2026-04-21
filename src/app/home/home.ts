import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../api';
import { Product } from '../models/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
[x: string]: any;

constructor(private api : Api, private cdr : ChangeDetectorRef){
  
}

ngOnInit(){
 this.api.getProducts("products/all?page_index=1&page_size=6").subscribe({
  next : ((resp : any) => {
    console.log(resp)
    this.produckts = resp.products
    this.cdr.detectChanges()
  
  }),

  error : er => alert(er.message)

 })
}

produckts: Product[]=[]


}