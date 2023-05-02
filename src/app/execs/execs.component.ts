import { Component, OnInit } from '@angular/core';
import { Exec } from '../interfaces/exec';

@Component({
  selector: 'execs',
  templateUrl: 'src/app/execs/execs.component.html',
  styleUrls: ['src/app/execs/execs.component.scss']
})
export class ExecsComponent implements OnInit {
  readonly execs: Exec[] = [
    {
      name: "Ceilidh Simon",
      role: "President",
      photo: "Ceilidh.jpg",
      description: "I’m a fourth year computer science student who has completed co-op terms at Bold, Agco Winnipeg, and Ubisoft Winnipeg. This is my first year as a CSSA executive, but I was previously treasurer and then president of U of M’s Women In Computer Science Council. In my spare time I play a lot of video games, embroider, and do various martial arts.",
      email: "simonc@myumanitoba.ca",
      website: "http://ceilidhsimon.com/",
      linkedin: "ceilidhsimon",
      github: "LeeSimon77"
    },
    {
      name: "Caleb Beynon",
      role: "Vice-President, Internal",
      photo: "Caleb.png",
      description: "I’m a third year computer science student and I’m currently on my second co-op term. I worked at G3 Canada for my first co-op term and am currently working at Bison Transport. This is my second year as a CSSA executive. I love making digital art and playing video games in my spare time! I’m particularly fond of Hollow Knight and the Zero Escape series.",
      email: "beynonc@myumanitoba.ca",
      github: "CM-beynon"
    },
    {
      name: "Colton Dietterle",
      role: "Vice-President, Lounge Affairs",
      photo: "Colton.jpg",
      description: "I'm in my final year of the CS program at the UofM, specializing in theoretical Computer Science. I can usually be found working on a project, gaming with friends in a Discord call, or studying! My favorite type of projects to work on are with Arduino or doing game dev.",
      email: "dietterc@myumanitoba.ca",
      github: "dietterc"
    },
    {
      name: "Mark Robitaille",
      role: "Vice-President, Events",
      photo: "Mark.jpg",
      description: "I’m a fourth-year computer science student, and this is my 3rd and final year as a CSSA executive. I have completed co-op terms at Bold Commerce, Conquest Planning, and Agriculture and Agri-Food Canada. In my spare time, I often play Pokemon or Animal Crossing. Feel free to message me on the CS Discord.",
      email: "robitai4@myumanitoba.ca",
      website: "https://markrobitaille.ca",
      linkedin: "mark-robitaille",
      github: "MarkRobitaille"
    },
    {
      name: "Abhi Sachdev",
      role: "Vice-President, Student Affairs",
      photo: "Abhi.jpg",
      description: "I’m in my final year of the CS program, and this is my first year as a CSSA executive. I am also an alumnus of the CS co-op program and have previously worked at iQmetrix, Librestream, Amazon, and Google. I spend my free time at the gym or at home watching random YouTube videos. Feel free to send me your anime recommendations.",
      email: "sachdev1@myumanitoba.ca",
      linkedin: "abhi-sachdev",
      github: "abhisachdev17"
    },
    {
      name: "Anna Stacey",
      role: "WICS Representative",
      photo: "Anna.png",
      description: "I'm in my last year of studying computer science (co-op) and linguistics. I'm the Vice-Pres of WICS, which means I'm the WICS Rep on the CSSA this year. After long days of coding, I like to play piano, do some baking or just spend time outside.",
      email: "staceya3@myumanitoba.ca"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
