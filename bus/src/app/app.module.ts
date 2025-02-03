import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BusFormComponent } from './bus-form/bus-form.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { BusViewComponent } from './bus-view/bus-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusFormComponent,
    BusListComponent,
    DeleteConfirmComponent,
    BusViewComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
