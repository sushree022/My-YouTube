import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-trend-result',
  templateUrl: './trend-result.component.html',
  styleUrls: ['./trend-result.component.css']
})
export class TrendResultComponent implements OnInit {
  public tvideos: any;

  constructor(private service: YoutubeService) {
    this.tvideos = [];
  }

  ngOnInit() {
    this.service.gettrendvideos().subscribe(list => {
      this.tvideos = list.items;
  });

}
}
