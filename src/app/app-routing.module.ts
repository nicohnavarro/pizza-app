import { GetPizzasComponent } from './pages/get-pizzas/get-pizzas.component';
import { DetailsDeliveryComponent } from './pages/details-delivery/details-delivery.component';
import { CreateDeliveryComponent } from './pages/create-delivery/create-delivery.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubInfoComponent } from './components/github-info/github-info.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent ,children:[
    {path:'', component: GithubInfoComponent },
    {path:'createDelivery', component: CreateDeliveryComponent },
    {path:'detailsDelivery', component: DetailsDeliveryComponent },
    {path:'getPizzas', component: GetPizzasComponent },
  ]},
  {path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
