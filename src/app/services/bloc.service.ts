import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private firestore: AngularFirestore) { }

  agregarOpinion(bloc: any): Promise<any>{
    return this.firestore.collection('blocs').add(bloc);


  }

  getOpinion(): Observable<any>{
    return this.firestore.collection('blocs').snapshotChanges();
  }


}
