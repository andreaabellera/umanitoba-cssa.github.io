import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-bar',
  templateUrl: './img-bar.component.html',
  styleUrls: ['./img-bar.component.scss']
})
export class ImgBarComponent implements OnInit {
  @Input() image!: string;
  @Input() alt: string = "Image";
  @Input() centerImage: string = "center";

  constructor() { }

  ngOnInit(): void {
  }

}
