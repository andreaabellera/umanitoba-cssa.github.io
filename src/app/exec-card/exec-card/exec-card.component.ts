import { Component, Input, OnInit } from '@angular/core';
import { Exec } from 'src/app/exec';

@Component({
  selector: 'exec-card',
  templateUrl: './exec-card.component.html',
  styleUrls: ['./exec-card.component.scss']
})
export class ExecCardComponent implements OnInit {
  @Input() exec!: Exec;

  constructor() { }

  ngOnInit(): void {
  }

}
