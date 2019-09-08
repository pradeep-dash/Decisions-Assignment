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
  name = "";

  ngOnInit() {
    this.view = this.route.snapshot.paramMap.get('id');
    this.inputs = JSON.parse(sessionStorage.getItem(this.view));
  }

  onSubmit() {
    alert('Data Submitted');
  }
}
