import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumsServiceService } from '../albums-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgFor, 
    FormsModule,
    CommonModule
  ],
  template: `
  <h2>{{title}}</h2>

  <!-- uppercase, lowercase etc below are 'pipes' which alter how data is displayed -->
  {{album.title | uppercase}}<br/>
  {{album.artist | lowercase}}<br/>
  {{album.rating | number: '1.2-2'}}<br/>
  {{album.price | currency:'GBP'}}<br/>
  {{album.releaseDate | date:'shortDate'}}<br/>

  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save </button>
  </div>

  <!-- below #artist is a template variable assigned to input parameters of the input ie value can be accessed using this tag -->

  <!-- <input #artist (keyup.enter)="onKeyUp(artist.value)"/> -->

  <!-- in this scenario "artist" is a two-way variable
  initial value "Fall Out Boy" is displayed on load but can be updated by user by altering the input -->
  <input [(ngModel)]="artist" (keyup.enter)="onKeyUp()"/>

  `,
  styleUrl: './albums.component.css'
})

export class AlbumsComponent {
title = "List of Albums";
albums: any;
isActive:boolean = true;
artist:String = "Fall Out Boy";
album:any = {
  title:"Snake Sideways",
  artist:"Do Nothing",
  rating: 90.876,
  price: 10.454,
  releaseDate: new Date(2023, 0,30)}



constructor(service: AlbumsServiceService){
  this.albums = service.getAlbums();
}

onSave($event:any){

  // prevents event bubbling
  $event.stopPropagation();
  console.log("Button clicked", $event);
}

onDivClicked(){
  console.log("Div clicked");
}

onKeyUp(){
  console.log(this.artist);
}

}


