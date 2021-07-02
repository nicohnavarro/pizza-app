import { GetPizzasComponent } from './pages/get-pizzas/get-pizzas.component';
import { DetailsDeliveryComponent } from './pages/details-delivery/details-delivery.component';
import { CreateDeliveryComponent } from './pages/create-delivery/create-delivery.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { GithubInfoComponent } from './components/github-info/github-info.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'', component: WelcomeComponent ,children:[
    {path:'welcome', component: GithubInfoComponent },
    {path:'createDelivery', component: CreateDeliveryComponent , canActivate:[AuthGuard]},
    {path:'detailsDelivery', component: DetailsDeliveryComponent ,canActivate:[AuthGuard]},
    {path:'getPizzas', component: GetPizzasComponent ,canActivate:[AdminGuard]},
  ]},
  {path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
