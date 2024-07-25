import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@app/modals/product';
import { BaseComponent } from '@core/base/base.component';
import { ProductCardEvent, ProductCardEventType } from './type';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent extends BaseComponent {
  @Input({ required: true }) data!: Product;
  @Input() wishListed: boolean = false;
  @Output() OnClick: EventEmitter<ProductCardEvent> = new EventEmitter<ProductCardEvent>();

  public mouseOver: boolean = false;

  public emitEvent(type: ProductCardEventType): void {
    this.OnClick.emit({ data: this.data, eventType: type });
  }

  show() {
    if(!this.wishListed){
      this.mouseOver = true;
    }
  }

  hide() {
    this.mouseOver = false;

  }
}
