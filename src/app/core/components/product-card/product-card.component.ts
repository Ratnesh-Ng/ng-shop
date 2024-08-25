import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, InputSignal, Output } from '@angular/core';
import { Product, ProductFrom } from '@app/modals/product';
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
  public type: InputSignal<ProductFrom> = input.required<ProductFrom>();

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
