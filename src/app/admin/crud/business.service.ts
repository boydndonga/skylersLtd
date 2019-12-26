import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Business } from '../business-class/business';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private db:AngularFirestore, private storage:AngularFireStorage) { }

  createBusiness(value:Business){
    let p = new Promise((resolve, reject)=>{
      this.db.collection('businesses').add({
        title: value.title,
        description: value.description,
        edit: false
      }).then(ref=>{
        resolve();
      }).catch(e=>{
        console.log(e);
        reject();
      })
    })
    return p;
  }

  getBusinesses(){
    return this.db.collection('businesses').snapshotChanges();
  }

  updateBiz(updateValue:any,valueId:any) {

    new Promise((resolve, reject)=>{
      this.db.collection('businesses').doc(valueId.payload.doc.id).set({
        title: updateValue.title,
        description: updateValue.description,
        edit: true
      }).then(ref=>{
        resolve();
      }).catch(e=>{
        console.log(e);
        reject();
      })
    })
  }

  deleteBiz(biz:any){
    
    return this.db.collection('businesses').doc(biz.payload.doc.id).delete();
  }

}
