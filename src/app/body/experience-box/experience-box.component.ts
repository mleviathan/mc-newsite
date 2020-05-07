import {Component, Input, OnInit} from '@angular/core';
import {ExperienceInterface} from '../experience.interface';

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.css']
})
export class ExperienceBoxComponent implements OnInit {

  @Input() public experience: ExperienceInterface = new ExperienceInterface('', '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
