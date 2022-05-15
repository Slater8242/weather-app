import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './connection/form/form.component';
import { DataWeatherComponent } from './connection/data-weather/data-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    FormComponent,
    DataWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
