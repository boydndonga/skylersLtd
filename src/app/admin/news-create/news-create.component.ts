import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from '../news-class/news';
import { NewsService } from '../crud/news.service';


@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  createNews = new News("","",null);

  constructor(
    private newsService: NewsService,
    private router:Router,
  ) { }


  ngOnInit() {
  }

  onFileChange(event:any){
    this.createNews.avatar = event.target.files[0];
  }

  onSubmit(){
    console.log("Submitting..");

        this.newsService.createNews(this.createNews)
    .then(
      res => {
        this.createNews= new News("","",null);;
        this.router.navigate(['/admin/news/list']);
      }
    ).catch(e=>{
      alert("error creating business")
    })
  }

}
