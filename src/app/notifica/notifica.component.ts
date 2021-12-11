import { Component, Input } from '@angular/core';
import {NuovoPost} from '../app.component'



@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent  {

  @Input() selezioneC: NuovoPost;

  constructor() { }

  ngOnInit() {
  }

}