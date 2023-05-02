import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../interfaces/resource';

@Component({
  selector: 'resource-card',
  templateUrl: 'src/app/resource-card/resource-card.component.html',
  styleUrls: ['src/app/resource-card/resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }
}
