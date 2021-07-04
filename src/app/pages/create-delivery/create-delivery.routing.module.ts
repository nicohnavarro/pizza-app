import { AuthGuard } from './../../guards/auth.guard';
import { CreateDeliveryComponent } from './create-delivery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: CreateDeliveryComponent, canActivate:[AuthGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDeliveryRoutingModule { }