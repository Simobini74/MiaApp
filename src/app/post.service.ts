import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  apiKEY: string = '';
  apiURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  constructor(private service: HttpClient) {}
  public getData() {
    let promise = fetch(this.apiURL + '/get?key=' + this.apiKEY);
    return promise;
  }
  


}
