import { Component } from '@angular/core';
import { generateFakeDashboardData } from '@app/faker/shop.dashboard.faker';
import { IShopDashboard } from '@app/modals/shop-dashboard';
import { SearchBaseComponent } from '@core/base/search-base.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent extends SearchBaseComponent {

  public shopDashboard!: IShopDashboard;
  constructor() {
    super();
    this.getParams();
  }

  private getParams() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.shopDashboard = generateFakeDashboardData()
    });
  }
}
