import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product ;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    let param1 = this.route.snapshot.paramMap.get("productId");
    this.product = Products[+param1] ;
  }
  addToCart(product) {
    this.cartService.addToCart(product);
  }
}