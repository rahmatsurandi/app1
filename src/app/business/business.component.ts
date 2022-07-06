import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  constructor(private api: TcnewsapiService) {}
  topBusinessData: any = [];
  ngOnInit(): void {
    this.api.tcBuzzNews().subscribe((result) => {
      console.log(result.articles);
      this.topBusinessData = result.articles;
    });
  }
}
