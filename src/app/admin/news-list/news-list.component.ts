import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { News } from '../news-class/news';
import { NewsService } from '../crud/news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  items:any[];
  selectedNewsIndex:number;
  selectedNews:any;
  conf:boolean
  changeState:Boolean = false



  updateForm = new News("","",null);
   

  constructor(
    private newsService:NewsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newsService.getNews()
    .subscribe(result => {
      this.items = result;
    })
  }

  onFileChange(event){
    this.updateForm.avatar = event.target.files[0];
    this.changeState = true
  }

  editDetails(news:any,newsIndex:number){
    if(this.selectedNewsIndex==newsIndex){
      this.selectedNewsIndex=null;
      this.selectedNews=''
    }else{
      this.selectedNewsIndex=newsIndex;
      this.updateForm =new News(news.payload.doc.data().title,news.payload.doc.data().description,news.payload.doc.data().avatar)
      this.selectedNews=news
    }
  }

  updateRecord(){
    this.newsService.updateNews(this.updateForm,this.selectedNews,this.changeState)
    this.selectedNewsIndex=null;
    this.selectedNews=''

  }

  delete(item:any){
    this.conf = confirm('Are you sure to delete?');
    if(this.conf){
          this.newsService.deleteNews(item)
        .then(
          res => {
            this.router.navigate(['/admin/list']);
          },
          err => {
            console.log(err);
          }
        )
      }
    }
    

}
