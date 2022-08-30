import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const textAnim = document.querySelector('.text-animation');
    let typewriter = new Typewriter(textAnim, {
      loop: false,
      deleteSpeed: 20,
    });
    typewriter
      .pauseFor(500)
      .changeDelay(20)
      .typeString('<strong>Developpeur Full-Stack : </strong> ')
      .pauseFor(1000)
      .typeString('<span style="color: #EA39ff"> Javascript</span> !')
      .pauseFor(1000)
      .deleteChars(12)
      .typeString('<span style="color: #8A3033"> Node.js</span> !')
      .pauseFor(1000)
      .deleteChars(9)
      .typeString('<span style="color: #D3FFF3"> Typescript</span> !')
      .pauseFor(1000)
      .deleteChars(12)
      .typeString('<span style="color: #E9C46A"> React</span> !')
      .pauseFor(1000)
      .deleteChars(7)
      .typeString('<span style="color: #12664F"> M.E.R.N</span> !')
      .pauseFor(1000)
      .deleteChars(9)
      .typeString('<span style="color: #85FFC7"> Angular</span> !')
      .pauseFor(1000)
      .deleteChars(9)
      .typeString('<span style="color: #ff6c37"> M.E.A.N</span> !')
      .start();
  }
}
