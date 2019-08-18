import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-m-slider',
  templateUrl: './m-slider.component.html',
  styleUrls: ['./m-slider.component.css']
})
export class MSliderComponent {
  
  mySlideImages = [1,2,3].map((i)=> `.../../assets/${i}.jpg`);
  myCarouselImages = [1,2,3,4,5,6].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 3, dots: true, nav: true};
}
