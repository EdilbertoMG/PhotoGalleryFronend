import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import {Router} from '@angular/router'
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];
  loading: boolean;

  constructor( private photogallery: PhotogalleryService, private router: Router ) {}
  
   ngOnInit() {
    this.loading = true;
    this.photogallery.getAllPhotos()
    .subscribe( (data: any) =>{
      this.photos = data.photos
    })
    this.loading = false;
  }

  /*  deletePhoto(id: string) {
    this.photogallery.deletePhoto(id)
      .subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => {
        console.log(err)
      }
      )
  } */

  /* addPhotoAlbum(id:HTMLInputElement,id_album:HTMLInputElement){
    this.photogallery.addPhotoAlbum(id.value, id_album.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['photos'])
      }, 
      err => {
        console.log(err)
      }
    )
  } */

}
