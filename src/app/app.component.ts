import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EventModalComponent } from "./event-modal/event-modal.component";
import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EventModalComponent,LightboxModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[Lightbox]
})
export class AppComponent implements AfterViewInit {
  title = 'Happy-Happenings';
  @ViewChild('swiperContainer', { static: false }) swiperRef!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper(this.swiperRef.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 3, // Show 3 slides at a time
      spaceBetween: 30, // Space between slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: { slidesPerView: 1 }, // Mobile: Show 1 slide
        768: { slidesPerView: 2 }, // Tablet: Show 2 slides
        1024: { slidesPerView: 3 }, // Desktop: Show 3 slides
      },
    });
  }

  showModal = false;

  eventImages: IAlbum[] = [
    {
      src: 'assets/decor9.jpg',
      thumb: 'assets/images/event1-thumb.jpg',
      caption: 'Event 1 - Amazing Decoration'
    },
    {
      src: 'assets/decor10.jpg',
      thumb: 'assets/images/event2-thumb.jpg',
      caption: 'Event 2 - Stunning Lights'
    },
    {
      src: 'assets/decor8.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/anniverssary.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor1.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/bi.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/birthday.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/birthday1.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor2.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor3.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor4.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor5.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    },
    {
      src: 'assets/decor6.jpg',
      thumb: 'assets/images/event3-thumb.jpg',
      caption: 'Event 3 - Elegant Setup'
    }
  ];

  openModal() {
    this.showModal = true;
  }
  onModalClosed() {
    this.showModal = false; // ✅ Properly resets modal state
  }
}
