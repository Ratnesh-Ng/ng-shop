import { Component } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent {

  public dashboardOptions = [
    {
      heading:"Orders",
      subHeading:"Check your order status",
      icon:"quick_reorder",
      path:this.appRoutes.orders,
    },
    {
      heading:"Collections & Wishlist",
      subHeading:"All your curated product collections",
      icon:"auto_awesome_mosaic",
      path:"",
    },
    {
      heading:"NG-Shop Credits",
      subHeading:"Manage all your refunds & gift cards",
      icon:"currency_rupee",
      path:"",
    },
    {
      heading:"NG Cash",
      subHeading:"Earn NG-Cash as you shop and use them in checkout",
      icon:"currency_exchange",
      path:"",
    },
    {
      heading:"Saved Cards",
      subHeading:"Save your card for fast checkout",
      icon:"credit_card",
      path:"",
    },
    {
      heading:"Saved UPI",
      subHeading:"View your save upi",
      icon:"assured_workload",
      path:"",
    },
    {
      heading:"Wallet",
      subHeading:"View your saved wallet",
      icon:"account_balance_wallet",
      path:"",
    },
    {
      heading:"Addresses",
      subHeading:"Saved address for hassle-free checkout",
      icon:"pin_drop",
      path:"",
    },
    {
      heading:"Coupons",
      subHeading:"Manage coupons for additional discount",
      icon:"local_activity",
      path:"",
    },
    {
      heading:"Profile Details",
      subHeading:"Change your profile details",
      icon:"manage_accounts",
      path:this.appRoutes.profile,
    },
  ]

}
