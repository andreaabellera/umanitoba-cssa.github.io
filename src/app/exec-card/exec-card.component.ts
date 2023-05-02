import { Component, Input, OnInit } from '@angular/core';
import { Exec } from '../interfaces/exec';

@Component({
  selector: 'exec-card',
  templateUrl: 'src/app/exec-card/exec-card.component.html',
  styleUrls: ['src/app/exec-card/exec-card.component.scss']
})
export class ExecCardComponent implements OnInit {
  @Input() exec!: Exec;

  constructor() { }

  ngOnInit(): void {
  }
}
