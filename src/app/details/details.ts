import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  constructor(private router : ActivatedRoute){
    this,router.params.subscribe(data =>{
      this.selectedId = data["id"]
     
    })
        
  }
  
  ngOnIniti(){
    console.log(this.selectedId);
    this.api.getData(`products/id/${this.selectedId}`).subscribe({
      next:((resp:any)=>{
        console.log(resp);
        this.product = resp
        this.cdr.detectCanges()
      })
    })
    
  }

  selectedId: string = ""


   product : Product = new Product()




}






