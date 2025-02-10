import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';
@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [CommonModule,LightboxModule],
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.scss'
})
export class EventModalComponent {
  @Input() images: IAlbum[] = [];
  @Input() showModal: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();
  constructor(private lightbox: Lightbox) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('working');
    if ('showModal' in changes) {
      
      if (this.showModal) {
        document.body.classList.add('modal-open');  // ✅ Prevent scrolling
      } else {
        document.body.classList.remove('modal-open');  // ✅ Allow scrolling
      }
    }
  }
  openLightbox(index: number): void {
    // this.lightbox.open(this.images, index);
  }

  closeModal() {
    this.showModal = false;
    document.body.classList.remove('modal-open');  // ✅ Allow scrolling when closed
    this.modalClosed.emit(); 
  }
}
