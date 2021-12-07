import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello.component';
import { PostserviceService } from './postservice.service';
import { ChiaveComponent } from './chiave/chiave.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChiaveComponent],
  bootstrap: [AppComponent],
  providers:[PostserviceService]
})
export class AppModule {}
