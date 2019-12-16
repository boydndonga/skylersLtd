import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { News } from '../news-class/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private db:AngularFirestore, private storage:AngularFireStorage) { }

  uploadFile(file:File){
    let path = `/uploads/${new Date().getTime()}_${file.name}`;
    return this.storage.upload(path, file);
  }

  createNews(value:News){
    let p = new Promise((resolve, reject)=>{
      this.uploadFile(value.avatar).then(snap=>{
        snap.ref.getDownloadURL().then(url=>{
          console.log(url);
          this.db.collection('news').add({
            title: value.title,
            description: value.description,
            avatar: url,
            edit: false
          }).then(ref=>{
            resolve();
          }).catch(e=>{
            console.log(e);
            reject();
          })
        }).catch(e=>{
          console.log(e);
          reject();
        })
      }).catch(e=>{
        console.log(e);
        reject();
      })
    })
    return p;
  }

  getNews(){
    return this.db.collection('news').snapshotChanges();
  }

  updateNews(updateValue:any,valueId:any,changed:Boolean) {

    new Promise((resolve, reject)=>{

      if(changed==true){

        this.uploadFile(updateValue.avatar).then(snap=>{
          snap.ref.getDownloadURL().then(url=>{
            console.log(url);
            this.db.collection('news').doc(valueId.payload.doc.id).set({
              title: updateValue.title,
              description: updateValue.description,
              avatar: url,
              edit: true
            }).then(ref=>{
              resolve();1
            }).catch(e=>{
              console.log(e);
              reject();
            })
          }).catch(e=>{
            console.log(e);
            reject();
          })
        })
      }else{

        this.db.collection('news').doc(valueId.payload.doc.id).set({
        title: updateValue.title,
        description: updateValue.description,
        avatar: updateValue.avatar,
        edit: true
      })
      }
    })
  }

  deleteNews(news:any){
    
    return this.db.collection('news').doc(news.payload.doc.id).delete();
  }
}
