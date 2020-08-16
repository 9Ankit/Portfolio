import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss'],
})
export class ParticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    particlesJS('particles-js', './assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}