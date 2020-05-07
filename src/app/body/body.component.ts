import {Component, OnInit} from '@angular/core';
import {ExperienceInterface} from './experience.interface';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [trigger('bodyState', [
    state('preload', style({
      opacity: 0
    })),
    state('loaded', style({
      opacity: 1
    })),
    transition('preload <=> loaded', animate('10s'))
  ])]})
export class BodyComponent implements OnInit {

  officineExp = new ExperienceInterface('Full Stack Developer', 'Officine Telematiche S.r.l',
    '10 2019', 'Current', 'Sviluppo di app Android ed iOS tramite Xamarin.\n' +
    '    Web app per importanti clienti con ASP.NET. Sviluppo di soluzioni per l\'industria attraverso Unity3D.');
  experiences = Array<ExperienceInterface>(3);
  state = 'preload';

  constructor() {
    this.experiences.push(this.officineExp);
  }

  ngOnInit(): void {
    this.state = 'loaded';
  }

}
