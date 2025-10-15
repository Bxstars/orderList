import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images: string[] = [
    './assets/images/stefen-tan-_sfMD-OhFR8-unsplash.jpg 600w',
    './assets/images/derek-duran-Jz4QMhLvGgw-unsplash.jpg 600w',
    './assets/images/bon-vivant-qom5MPOER-I-unsplash.jpg 600w',
    './assets/images/annie-spratt-Pk6nuEXu_Lo-unsplash.jpg 1200w',
  ];

  currentIndex = 0;
  slideInterval: any;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    console.log(this.images);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.next();
    }, 3000)
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  ngOnInit() {
    this.startAutoSlide();
  }
}
