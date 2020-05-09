import {Component, OnInit} from '@angular/core';
import {Experience} from './experience.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Skill} from './skill.model';

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

  officineExp = new Experience('Full Stack Developer', 'Officine Telematiche S.r.l',
    '10 2019', 'Current', 'Sviluppo di app Android ed iOS tramite Xamarin.\n' +
    '    Web app per importanti clienti con ASP.NET. Sviluppo di soluzioni per l\'industria attraverso Unity3D.');
  experiences = Array<Experience>(3);
  skills = Array<Skill>();
  state = 'preload';

  constructor() {
    // Experiences
    this.experiences.push(this.officineExp);

    // Skills
    const cSharp: Skill = new Skill();
    cSharp.name = 'C#';
    cSharp.width = '75';
    cSharp.percentage = 80;
    this.skills.push(cSharp);
  }

  ngOnInit(): void {
    this.state = 'loaded';
  }

}
