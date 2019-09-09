import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  tv = [];
  productsName = [];
  buttonDisabled = false;
  redirected = false;
  productSelected = '';

  ngOnInit() {
    var names = sessionStorage.getItem('productsName');
    this.productsName = names == null ? [] : names.split(',');

    if (!this.productsName.length) {
      this.productService.getProducts().subscribe(
        data => {
          sessionStorage.setItem('products', JSON.stringify(data));
          this.productsName = data.map(obj => { return obj.name });
          sessionStorage.setItem('productsName', this.productsName.toString());
        }
      );
    }
  }

  addProduct(product) {
    this.buttonDisabled = true;
    this.redirected = true;
    this.productSelected = product;
    
    var products = JSON.parse(sessionStorage.getItem('products'));
    this.productService.products(products.filter(obj => obj.name   === product)[0].definitionUrl).subscribe(
      data => {
        sessionStorage.setItem('productDetails', JSON.stringify(data));
        this.router.navigate(["product-insert", product.toLowerCase()]);
      }
    );
  }
}
