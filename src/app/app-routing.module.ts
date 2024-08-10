import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './layout/shop-layout/shop-layout.component';
import { CartLayoutComponent } from './layout/cart-layout/cart-layout.component';

const routes: Routes = [
  {
    path: "",
    component: ShopLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'shop/:group', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) },
      { path: 'product/:UUID', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
      { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
      { path: 'wishlist', loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule) },
      { path: ':search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
    ]
  },
  {
    path: "",
    component: CartLayoutComponent,
    children: [
      { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
