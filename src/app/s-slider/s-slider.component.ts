import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-slider',
  templateUrl: './s-slider.component.html',
  styleUrls: ['./s-slider.component.css']
})
export class SSliderComponent{
  title = 'carouseldemo';
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items:4,
        nav: true,
        loop: false
      },
      1200:{
        items:4,
        nav: true,
        loop: true
      },
      1500: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "B. Sc.(Special) in Statistics in Finance",
      image:'../assets/4.jpg'
    },
    {
      text: "B.A. Special Degree Course -Mass Communication",
      image: "../assets/22.jpg"
    },
    {
      text: "B.Sc Accounting (Special) Degree Programme",
      image: "../assets/6.jpg"
    },
    {
      text: "B.Sc Business Administration (Special)",
      image: "../assets/7.jpg"
    },
    {
      text: "B. Sc. (special) in Physics and ICT",
      image: "../assets/8.jpg"
    },
    {
      text: "B. Sc.(Special) in Management & Forestry",
      image: "../assets/10.jpg"
    },
    {
      text: "B. Sc.(Special) in Computer Science",
      image: "../assets/25.jpg"
    }
  ]

}
