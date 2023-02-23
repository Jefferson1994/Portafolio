import { Component, ViewChild, ElementRef,HostListener, TemplateRef } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalcurriculumComponent } from '../modalcurriculum/modalcurriculum.component';


@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',

  styleUrls: ['./navar.component.css'],
  //provider: [NgbModalConfig, NgbModal],

})
export class NavarComponent  {



  //constructor(private storege: Storage) { }
  constructor(config: NgbModalConfig, private modalService: NgbModal,private storege: Storage) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
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

  ngOnInit(): void {
  }



  cargarArchivo($event: any){

    const file= $event.target.files[0];
    console.log(file);

    const imgRef= ref(this.storege, 'images/${file.name}');

    uploadBytes(imgRef, file).then(response=> console.log(response)).catch(error=> console.log(error)
    )


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










}




