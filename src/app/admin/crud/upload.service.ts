import { Injectable } from '@angular/core';
import { Upload } from '../business-class/upload';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

 constructor(private af: AngularFireStorage) { }

  private basePath:string = '/assets';
  uploads:Upload[];

  pushUpload(upload: any) {
    console.log(upload.target.files[0]);
    // this.af.upload(this.basePath, upload.target.files[0]); 

    // const randomId = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(randomId);
    // this.task = this.ref.put(event.target.files[0]);
    // this.uploadProgress = this.task.percentageChanges();
    // this.downloadURL = this.task.downloadURL();
    let storageRef = this.af.ref(this.basePath);
    let uploadTask = storageRef.put(upload.target.files[0]);
    let uploadProgress = uploadTask.percentageChanges();
    // let downloadURL = uploadTask.downloadURL();

    // uploadTask.on(this.af.TaskEvent.STATE_CHANGED,
    //   (snapshot) =>  {
    //     // upload in progress
    //     upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //   },
    //   (error) => {
    //     // upload failed
    //     console.log(error)
    //   },
    //   () => {
    //     // upload success
    //     upload.url = uploadTask.snapshot.downloadURL
    //     upload.name = upload.file.name
    //     this.saveFileData(upload)
    //   }
    // );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    // this.db.list(`${this.basePath}/`).push(upload);
  }


}


