import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public Data: Subject<any>;
  constructor(private http: HttpClient) {
    this.Data = new Subject();
   }
   getdatafrom(value) {
     this.Data = value;
  }
  getVideosForChanel(maxResults): Observable<any> {

  let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDVgisjBovvkFBh5iYDposSmYL4wWn0ZCM&q=' + this.Data + '&part=snippet &type=video,id&maxResults=' + maxResults;
  return this.http.get(url);
}
}
