import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';
import { Product } from '@app/modals/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {
    this.allProductDeleted.subscribe(() => {
      this.loadProductsInDB();
    })
  }

  public allProductDeleted: Subject<void> = new Subject<void>();
  public clearProductsFromDB() {
    let counter = 0;
    this.http.get<Product[]>('http://localhost:3000/products').subscribe({
      next: (value) => {
        if (!value.length) {
          this.loadProductsInDB();
          return;
        }
        value.forEach(a => {
          this.http.delete(`http://localhost:3000/products/${a.id}`).subscribe(() => {
            counter++;
            if (counter == value.length) {
              this.allProductDeleted.next();
            }
          });
        });
      }
    })
  }

  public loadProductsInDB() {
    fakeProducts(20).forEach(product => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...restValues } = product;
      this.http.post('http://localhost:3000/products', restValues).subscribe();
    })
  }
}
