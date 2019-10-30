import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private db:AngularFirestore) { }

  createBusiness(value:any){
    return this.db.collection('businesses').add({
      title: value.title,
      description: value.description,
      avatar: value.avatar
    });
  }

  getBusinesses(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/businesses').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }


}
