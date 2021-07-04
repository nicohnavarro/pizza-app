import { GetDeliveryComponent } from './pages/get-delivery/get-delivery.component';
import { GetPizzasComponent } from './pages/get-pizzas/get-pizzas.component';
import { DetailsDeliveryComponent } from './pages/details-delivery/details-delivery.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubInfoComponent } from './components/github-info/github-info.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'', component: WelcomeComponent ,children:[
    {path:'', component: GithubInfoComponent },
    {path:'welcome', component: GithubInfoComponent },
    {path:'createDelivery', loadChildren: () => import('./pages/create-delivery/create-delivery.module').then(m => m.CreateDeliveryModule)},
    {path:'detailsDelivery', loadChildren: () => import('./pages/details-delivery/details-delivery.module').then(m => m.DetailsDeliveryModule)},
    {path:'getPizzas', loadChildren: () => import('./pages/get-pizzas/get-pizzas.module').then(m => m.GetPizzasModule)},
    {path:'getDelivery', loadChildren: () => import('./pages/get-delivery/get-delivery.module').then(m => m.GetDeliveryModule)},
  ]},
  {path:'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
