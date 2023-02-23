import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlocService } from 'src/app/services/bloc.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  createBloc: FormGroup;
  submitted= false;
  router: any;
  loading=false;




  constructor(private fb: FormBuilder, private _blocservice: BlocService,private toastr: ToastrService) {

    this.createBloc= this.fb.group({
      nombre:['', Validators.required],
      mail:['', Validators.required],
      opinion:['', Validators.required,, Validators.maxLength(1000)]
    })
  }

  ngOnInit(): void {
  }

  AgregarOpinion(){
    this.submitted=true;

    if(this.createBloc.invalid){
      return;
    }

    const bloc: any ={
      nombre: this.createBloc.value.nombre,
      mail: this.createBloc.value.mail,
      opinion: this.createBloc.value.opinion,
      fechacreacion: new Date()

    }
    this.loading=true;

    this._blocservice.agregarOpinion(bloc).then(()=>{
      this.toastr.success("Opinion registrada con exito!","Opinion registrada",{positionClass:'toast-bottom-right'});
      this.loading=false
      this.router.navigate(['/app-root'])
    }).catch(erros=>{
      console.log("error no se pudo agregar")
      this.loading=false;
    })

  }


}


