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
  log: boolean = false;  
  constructor(private service: PostserviceService) {}

  Mostra(id: NuovoPost) {
    this.selezione.titolo = id.titolo;
    this.selezione.contenuto = id.contenuto;
  }

  aggiungiPost(newPostit: NuovoPost) {
    this.service.apiKEY = this.key;
    this.PostSalvato.push(newPostit);
    let newmsg: string = JSON.stringify(this.PostSalvato);
    this.service
      .postData(newmsg)
      .then(response => response.json(), error => alert(error));
  }

  Elimina(id: object) {
    this.PostSalvato = this.PostSalvato.filter(postit => postit != id);    
    this.selezione.contenuto = undefined;
    this.selezione.titolo = undefined;
    let objToString: string = JSON.stringify(this.PostSalvato);
    this.service
      .postData(objToString)
      .then(response => response.json(), error => alert(error));
  }

  login(k: string) {
    this.service.apiKEY = k;
    this.service
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        let obj = JSON.parse(data);
        for (let i in obj) {
          this.PostSalvato.push(obj[i]);
        }
        this.log = true;
        this.key = k;
      });
  }

  getKey() {
    this.service.Key().then(key => {
      fetch(this.service.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      }).then(response => response.json(), error => alert(error));
      this.key = key;
    });
    this.log = true;
  }

  aggiungi() {
    this.nuovo = true;
  }
}
