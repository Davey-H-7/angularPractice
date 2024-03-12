import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent {
  @Input() details:any; 
  @Input() index:any;
  @Output() ownedEvent = new EventEmitter();
  @Output() add = new EventEmitter();

  ownedClicked(){
    this.ownedEvent.emit(this.details.id)
  }

  addClicked(){
    this.add.emit()
  }
}
