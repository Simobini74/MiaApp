import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostserviceService {

  constructor(private service: HttpClient) { }

}