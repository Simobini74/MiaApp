import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopostit',
  templateUrl: './nuovopostit.component.html',
  styleUrls: ['./nuovopostit.component.css']
})
export class NuovopostitComponent {

  @Output() newPostEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}