import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { InstaComponent } from './pages/insta/insta.component';
import { LoginComponent } from './pages/login/login.component';
import { Login1Component } from './pages/login1/login1.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { CupanimationComponent } from './pages/cupanimation/cupanimation.component';
import { BasictsComponent } from './pages/basicts/basicts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ServiceComponent,
    InstaComponent,
    LoginComponent,
    Login1Component,
    AnimationComponent,
    CupanimationComponent,
    BasictsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
