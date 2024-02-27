import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent {
  @Input() details:any; 
  @Output() ownedEvent = new EventEmitter();

  ownedClicked(){
    this.ownedEvent.emit(this.details.id)
  }
}
