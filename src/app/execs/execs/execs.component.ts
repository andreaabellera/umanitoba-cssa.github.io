import { Component, OnInit } from '@angular/core';
import { Exec } from 'src/app/Interfaces/exec';

@Component({
  selector: 'execs',
  templateUrl: './execs.component.html',
  styleUrls: ['./execs.component.scss']
})
export class ExecsComponent implements OnInit {
  // TODO: Update with proper information
  readonly execs: Exec[] = [
    {
      name: "Ceilidh Simon",
      role: "President",
      photo: "Ceilidh.jpg",
      description: "Ceilidh is the president of the CSSA. Ceilidh is the president of the CSSA. Ceilidh is the president of the CSSA.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
    {
      name: "Caleb Beynon",
      role: "Vice-President, Internal",
      photo: "Caleb.jpg",
      description: "Something about Caleb. Something about Caleb. Something about Caleb.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
    {
      name: "Colton Dietterle",
      role: "Vice-President, Lounge Affairs",
      photo: "Colton.jpg",
      description: "Something about Colton. Something about Colton. Something about Colton.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
    {
      name: "Mark Robitaille",
      role: "Vice-President, Events",
      photo: "Mark.png",
      description: "Something about Mark. Something about Mark. Something about Mark.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
    {
      name: "Abhi Sachdev",
      role: "Vice-President, Student Affairs",
      photo: "Abhi.jpg",
      description: "Something about Abhi. Something about Abhi. Something about Abhi.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
