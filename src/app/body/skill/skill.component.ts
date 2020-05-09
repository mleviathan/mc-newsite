import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() public skill: Skill = new Skill();

  constructor() { }

  ngOnInit(): void {
  }

}
