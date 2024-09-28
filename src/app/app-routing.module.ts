import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLayoutComponent } from './layout/shop-layout/shop-layout.component';
import { authGuard } from './core/guards/auth.guard';

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
      { path: 'wishlist', canActivate: [authGuard], loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule) },
      { path: 'my', canActivate: [authGuard], loadChildren: () => import('./pages/customer-portal/customer-portal.module').then(m => m.CustomerPortalModule) },
      { path: ':search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
    ]
  },
  { path: 'checkout', canActivate: [authGuard], loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
