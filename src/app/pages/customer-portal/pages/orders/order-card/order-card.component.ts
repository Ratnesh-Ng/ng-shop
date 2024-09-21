import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Order } from '@app/modals/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OrderCardComponent {

  public order = input.required<Order>();

}
