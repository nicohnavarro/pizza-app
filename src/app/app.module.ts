import { NgbdSortableHeader } from './directives/sortable.directive';
import { CountryInfoComponent } from './components/country/country-info/country-info.component';
import { DeliveryInfoComponent } from './components/delivery/delivery-info/delivery-info.component';
import { ListDeliveriesComponent } from './components/delivery/list-deliveries/list-deliveries.component';
import { ListCountriesComponent } from './components/country/list-countries/list-countries.component';
import { FormDeliveryComponent } from './components/delivery/form-delivery/form-delivery.component';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CreateDeliveryComponent } from './pages/create-delivery/create-delivery.component';
import { DetailsDeliveryComponent } from './pages/details-delivery/details-delivery.component';
import { GetPizzasComponent } from './pages/get-pizzas/get-pizzas.component';
import { GithubInfoComponent } from './components/github-info/github-info.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { CreatePizzaComponent } from './components/pizza/create-pizza/create-pizza.component';
import { ListPizzasComponent } from './components/pizza/list-pizzas/list-pizzas.component';
import { UpdatePizzaComponent } from './components/pizza/update-pizza/update-pizza.component';
import { DeletePizzaComponent } from './components/pizza/delete-pizza/delete-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    CreateDeliveryComponent,
    FormDeliveryComponent,
    ListCountriesComponent,
    DetailsDeliveryComponent,
    GetPizzasComponent,
    GithubInfoComponent,
    ListDeliveriesComponent,
    NgbdSortableHeader,
    DeliveryInfoComponent,
    CountryInfoComponent,
    CreatePizzaComponent,
    ListPizzasComponent,
    UpdatePizzaComponent,
    DeletePizzaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
