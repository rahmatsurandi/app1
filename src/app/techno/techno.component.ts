import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss'],
})
export class TechnoComponent implements OnInit {
  constructor(private api: TcnewsapiService) {}
  // technewsdata
  techNewsData: any = [];
  ngOnInit(): void {
    this.api.tcTechnoNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    });
  }
}
