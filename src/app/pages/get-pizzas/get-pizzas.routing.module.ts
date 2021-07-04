import { GetPizzasComponent } from './get-pizzas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';


const routes: Routes = [
  {
    path: '', component: GetPizzasComponent, canActivate:[AdminGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetPizzasRoutingModule { }