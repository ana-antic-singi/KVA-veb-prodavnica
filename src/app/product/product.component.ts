import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit{
  displayedColumns = ["name","type","price"]
  productSource = new MatTableDataSource<Product>();
  allProducts: Product[] = [];


  @ViewChild(MatPaginator) paginator !: MatPaginator; // preskačemo parametar u konstruktoru, garantujemo da ćemo ga posle u funkciji dodeliti
  @ViewChild(MatSort) sort !: MatSort; 

  constructor(private productService: ProductService){}

ngOnInit(): void { // .data!!!!
  this.allProducts = this.productService.getProducts();
  this.productSource.data = this.allProducts;
}

ngAfterViewInit(): void {
  this.productSource.paginator = this.paginator;
  this.productSource.sort = this.sort;
  
}

doFilter(filterValue: string) {
  const lowerCaseFilter = filterValue.trim().toLowerCase();
  this.productSource.data = this.allProducts.filter(product => 
    product.name.toLowerCase().includes(lowerCaseFilter) ||
    product.type.toLowerCase().includes(lowerCaseFilter) ||
    product.price.toString().includes(lowerCaseFilter)
    
  );
  console.log(this.productSource.data);
}
}


