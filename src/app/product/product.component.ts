import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { count } from 'rxjs';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit, AfterViewInit{
  //displayedColumns = ["name","type","price"]
  productSource = new MatTableDataSource<Product>();
  allProducts: Product[] = [];
  uniqueTypes: string[] = [];
  activeTypeFilter: string | null = null;
  activeSort: string | null = null;
  activeSortText: string = '';

  
  @ViewChild(MatPaginator) paginator !: MatPaginator; // preskačemo parametar u konstruktoru, garantujemo da ćemo ga posle u funkciji dodeliti
  @ViewChild(MatSort) sort !: MatSort; 

  constructor(private productService: ProductService, private cartService: CartService){}

  ngOnInit(): void { // .data!!!!
    this.allProducts = this.productService.getProducts();
    this.productSource.data = this.allProducts;
    this.uniqueTypes = [...new Set(this.allProducts.map(product => product.type))];
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
    this.applySort();
    console.log(this.productSource.data);
  }


  sortData(direction: string) {
    this.activeSort = direction;
    this.activeSortText = direction === 'asc' ? 'Price: Low to High' : 'Price: High to Low';
    this.applySort();
  }

  filterByType(type: string) {
    this.activeTypeFilter = type;
    this.productSource.data = this.allProducts.filter(product => product.type === type);
    this.applySort();
  }

  clearSort(sortSelect: any) {
    sortSelect.value = null;
    this.activeSort = null;
    this.activeSortText = '';
    this.applyFilters();
  }

  clearTypeFilter(typeSelect: any) {
    typeSelect.value = null;
    this.activeTypeFilter = null;
    this.applyFilters();
  }

  applyFilters() {
    let filteredData = [...this.allProducts];

    if (this.activeTypeFilter) {
      filteredData = filteredData.filter(product => product.type === this.activeTypeFilter);
    }

    this.productSource.data = filteredData;
    this.applySort();
  }

  applySort() {
    if (this.activeSort) {
      const sortedData = [...this.productSource.data].sort((a, b) => {
        if (this.activeSort === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      this.productSource.data = sortedData;
    }
}

  addToCart(product: Product){
    console.log(product);
    window.alert("Dodato u korpu!")
    this.cartService.addToCart(product)
  }
}


