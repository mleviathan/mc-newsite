import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../experience.model';

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.css']
})
export class ExperienceBoxComponent implements OnInit {

  @Input() public experience: Experience = new Experience('', '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
