import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../Interfaces/resource';

@Component({
  selector: 'resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
