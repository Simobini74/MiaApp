import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

export class NuovoPost{
  titolo: string;
  contenuto: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Applicazione Postit ';
  key = '';
  selezione: NuovoPost=new NuovoPost();
  PostSalvato: Array<NuovoPost> = [];
  nuovo: boolean = false;

  aggiungi() {
    this.nuovo = true;
  }
}
