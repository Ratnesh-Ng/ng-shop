import { Injectable } from '@angular/core';
import { Product } from '@app/modals/product';
import { Store } from './store';

@Injectable({ providedIn: 'root' })

export class ProductStoreService {

  products: Store<Product[]> = new Store([], { refreshAfter: { minutes: 15 } });

}
