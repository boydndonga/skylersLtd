import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private db:AngularFirestore) { }

  createUser(value:any){
    return this.db.collection('business').add({
      title: value.name,
      description: value.name.toLowerCase(),
      avatar: value.avatar
    });
  }

  getBusinesses(){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/people').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }


}
