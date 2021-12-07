import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChiaveComponent } from './chiave/chiave.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ChiaveComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
