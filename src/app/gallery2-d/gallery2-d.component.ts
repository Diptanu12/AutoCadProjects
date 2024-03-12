import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery2D', // Adjust the selector based on the component name
  templateUrl: './gallery2-d.component.html',
  styleUrls: ['./gallery2-d.component.css']
})
export class Gallery2DComponent implements OnInit {
  images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Paths to your images

  constructor() { }

  ngOnInit(): void {
  }
}
