import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { BlocService } from 'src/app/services/bloc.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  blocsA: any []=[];

  constructor(config: NgbModalConfig, private modalService: NgbModal,private storege: Storage, private _blocservices: BlocService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  ngOnInit(): void {
    this.getBloc();
  }
  open(content: any) {
    //let message: string;

    var url= '';




    console.log("descargado archivo ")
    var a=this.descargarArchivo(url)!
    console.log(a)


		this.modalService.open(content);
	}
  closeModal(){
    this.modalService.dismissAll();
  }

  descargarArchivo(url1: string){
    console.log("descagar archivo")
    getDownloadURL(ref(this.storege, 'pdf/DCurriculumJeff2023.pdf')).then((url)=>{
      //console.log(url)
      var url2=url.toString();
       //console.log(url2)

      return(url2)
      //setResume(url);

    })


  }

  getBloc(){
    this._blocservices.getOpinion().subscribe(data=>{

      this.blocsA=[];
      data.forEach((element:any) => {
        console.log("entro al for")

        this.blocsA.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });

      console.log(this.blocsA)


    });


  }



}
