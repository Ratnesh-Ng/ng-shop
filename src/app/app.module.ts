import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ShopLayoutComponent } from './layout/shop-layout/shop-layout.component';
import { CartLayoutComponent } from './layout/cart-layout/cart-layout.component';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ShopLayoutComponent,
    CartLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    ToastModule,
    ScrollTopModule
  ],
  providers: [
    // provideClientHydration() //TODO
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
