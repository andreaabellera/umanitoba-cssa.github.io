import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-bar',
  templateUrl: 'src/app/img-bar/img-bar.component.html',
  styleUrls: ['src/app/img-bar/img-bar.component.scss']
})
export class ImgBarComponent implements OnInit {
  @Input() image!: string;
  @Input() alt: string = "Image";
  @Input() centerImage: string = "center";

  constructor() { }

  ngOnInit(): void {
  }
}
