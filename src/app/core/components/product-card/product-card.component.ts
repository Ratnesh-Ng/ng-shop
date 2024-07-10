import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@app/modals/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) data!: Product;
  @Output() OnClick: EventEmitter<Product> = new EventEmitter<Product>();
}
