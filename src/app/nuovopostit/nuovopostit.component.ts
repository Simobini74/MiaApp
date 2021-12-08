import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopostit',
  templateUrl: './nuovopostit.component.html',
  styleUrls: ['./nuovopostit.component.css']
})
export class NuovopostitComponent {

  @Output() newPostEvent = new EventEmitter<any>();

  creaPost(titolo: string, contenuto: string) {
    if (titolo != '') {
      this.newPostEvent.emit({ titolo, contenuto});
    } else {
      alert('Il titolo non può essere vuoto');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}