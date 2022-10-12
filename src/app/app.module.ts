import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './frontPage/navbar/navbar.component';
import { BodyComponent } from './frontPage/body/body.component';
import { HomeComponent } from './frontPage/home/home.component';
import { AboutUsComponent } from './frontPage/about-us/about-us.component';
import { MyWorldComponent } from './frontPage/my-world/my-world.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    AboutUsComponent,
    MyWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
