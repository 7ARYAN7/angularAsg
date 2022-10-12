import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./frontPage/navbar/navbar.component";
import {BodyComponent} from "./frontPage/body/body.component";
import {HomeComponent} from "./frontPage/home/home.component";
import {AboutUsComponent} from "./frontPage/about-us/about-us.component";
import {MyWorldComponent} from "./frontPage/my-world/my-world.component";

const routes: Routes = [
  {path:"",component:MyWorldComponent},
  {path: 'home' , component : HomeComponent },
  {path : 'body', component: BodyComponent},
  {path:'aboutus', component: AboutUsComponent}

,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyWorldComponent,HomeComponent, BodyComponent, AboutUsComponent]
