import { Component, OnInit } from '@angular/core';
import { NewsService } from '../admin/crud/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any[];


  constructor(
    private newsService:NewsService,
  ) { }

  ngOnInit() {
    this.newsService.getNews()
    .subscribe(result => {
      this.news =result;
    })
  }

}
