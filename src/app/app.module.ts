import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { ChiaveComponent } from './chiave/chiave.component';
import { PostserviceService } from './postservice.service';
import { NuovopostitComponent } from './nuovopostit/nuovopostit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ChiaveComponent, NuovopostitComponent],
  bootstrap: [AppComponent],
  providers: [PostserviceService],
})
export class AppModule {}
