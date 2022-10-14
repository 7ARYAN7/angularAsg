import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './frontPage/navbar/navbar.component';
import {BodyComponent} from './frontPage/body/body.component';
import {HomeComponent} from './frontPage/home/home.component';
import {AboutUsComponent} from './frontPage/about-us/about-us.component';
import {MyWorldComponent} from './frontPage/my-world/my-world.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarDetailsComponent} from './frontPage/car-details/car-details.component';
import { WelcomeComponent } from './frontPage/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    AboutUsComponent,
    MyWorldComponent,
    CarDetailsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
