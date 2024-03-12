import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductInterface } from '../../Interface/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: ProductInterface[]=[];
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result)=>{
        this.productList = result.products;
      },
      error: (err)=>{
        console.log(err());
      }
    })
  }
}
