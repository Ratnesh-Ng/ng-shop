import { Component, model, ModelSignal, output, OutputEmitterRef } from '@angular/core';
import { Address, AddressCardEvent, AddressCardEventType } from '@app/modals/address';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.scss'
})
export class AddressCardComponent {

  public data: ModelSignal<Address> = model.required<Address>();
  public OnClick: OutputEmitterRef<AddressCardEvent> = output<AddressCardEvent>();

  emitEvent(type: AddressCardEventType) {
    this.OnClick.emit({ eventType: type, data: this.data() });
  }
}
