import { ChangeDetectionStrategy, Component, input, model, ModelSignal, output, OutputEmitterRef } from '@angular/core';
import { Cart, CartItemEvent, CartItemEventType } from '@app/modals/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {

  public actions = input<boolean>(true);
  public data: ModelSignal<Cart> = model.required<Cart>();
  public OnClick: OutputEmitterRef<CartItemEvent> = output<CartItemEvent>();

  emitEvent(type: CartItemEventType, event?: boolean) {
    if (type == 'onCheckToggle') {
      this.data.update(a => { return { ...a, isSelected: event } })
    }
    this.OnClick.emit({ eventType: type, data: this.data() });
  }
}
