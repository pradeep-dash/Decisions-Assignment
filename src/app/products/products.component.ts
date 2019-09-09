import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  view = '';
  inputs;

  ngOnInit() {
    var param = this.route.snapshot.paramMap.get('id');
    var products = JSON.parse(sessionStorage.getItem('products'));
    
    this.view = products.filter(obj => obj.name.toLowerCase()  === param)[0].name
    this.inputs = JSON.parse(sessionStorage.getItem('productDetails'));
  }

  onSubmit() {
    alert('Data Submitted');
  }
}
