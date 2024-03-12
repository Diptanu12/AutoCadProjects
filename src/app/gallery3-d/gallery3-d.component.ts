import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery3-d',
  templateUrl: './gallery3-d.component.html',
  styleUrls: ['./gallery3-d.component.css']
})
export class Gallery3DComponent implements OnInit {
  images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Paths to your images

  constructor() { }

  ngOnInit(): void {
  }
}