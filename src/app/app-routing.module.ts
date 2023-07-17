import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { InstaComponent } from './pages/insta/insta.component';
import { LoginComponent } from './pages/login/login.component';
import { Login1Component } from './pages/login1/login1.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { CupanimationComponent } from './pages/cupanimation/cupanimation.component';
import { BasictsComponent } from './pages/basicts/basicts.component';
import { IfelsetsComponent } from './pages/ifelsets/ifelsets.component';
import { Ifelsets1Component } from './pages/ifelsets1/ifelsets1.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { ForComponent } from './pages/for/for.component';
import { StyleComponent } from './pages/style/style.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'service',component:ServiceComponent
  },
  {
    path:'insta',component:InstaComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'login1',component:Login1Component
  },
  {
    path:'animation',component:AnimationComponent
  },
  {
    path:'cupanimation',component:CupanimationComponent
  },
  {
    path:'basicts',component:BasictsComponent
  },
  {
    path:'ifelsets',component:IfelsetsComponent
  },
  {
    path:'ifelsets1',component:Ifelsets1Component
  },
  {
    path:'switch',component:SwitchComponent
  },
  {
    path:'for',component:ForComponent
  },
  {
    path:'style',component:StyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
