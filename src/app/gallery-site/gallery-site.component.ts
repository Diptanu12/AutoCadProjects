import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-site',
  templateUrl: './gallery-site.component.html',
  styleUrls: ['./gallery-site.component.css']
})

export class GallerySiteComponent implements OnInit {
  images: string[] = ['https://picsum.photos/350/250?image=444']; // Paths to your images

  constructor() { }

  ngOnInit(): void {
  }
}