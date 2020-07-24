import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsInputFormComponent } from './details-input-form/details-input-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'get-details', component: DetailsInputFormComponent},
  { path: 'list-customers', component: CustomersListComponent},
  { path: 'update-customer', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
