import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public videos: any;
  constructor(private service: YoutubeService) {
    this.videos = [];
  }

  ngOnInit() {
  }
  log(value) {
    this.service.getdatafrom(value)
    this.service.getVideosForChanel(20)
    .subscribe(list => {
    console.log(list);
    this.videos = list.items;
    });
  }
}

