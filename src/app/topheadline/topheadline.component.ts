import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.scss'],
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: TcnewsapiService) {}
  // headline display data
  topHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    });
  }
}
