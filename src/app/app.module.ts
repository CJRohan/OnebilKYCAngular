import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsInputFormComponent } from './details-input-form/details-input-form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsInputFormComponent,
    HomeComponent,
    CustomersListComponent,
    UpdateCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    

  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
