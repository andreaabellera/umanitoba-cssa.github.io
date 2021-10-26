import { Component, OnInit } from '@angular/core';

interface categoryItem {
  id: number;
  name: string;
}
@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  readonly categories: categoryItem[] = [
    { id: 1, name: "Communities" },
    { id: 2, name: "Learning" },
    { id: 3, name: "U of M Resources" },
    { id: 4, name: "Student Perks" },
    // { id: 5, name: "FAQ" } // TODO: Compile FAQ to put here
  ];

  currentCategory: categoryItem = this.categories[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(category: categoryItem) {
    this.currentCategory = category;
  }
}
