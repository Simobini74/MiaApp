import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { ChiaveComponent } from './chiave/chiave.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ChiaveComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
