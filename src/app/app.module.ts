import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BodyComponent } from './body/body.component';
import { ExperienceBoxComponent } from './body/experience-box/experience-box.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SkillComponent } from './body/skill/skill.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    BodyComponent,
    ExperienceBoxComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // Default circles
      radius: 60,
      maxPercent: 100,
      showUnits: true,
      showBackground: true,
      showInnerStroke: true,
      responsive: false,
      outerStrokeWidth: 4,
      innerStrokeWidth: 1,
      outerStrokeColor: '#00a3ff',
      innerStrokeColor: '#00a3ff',
      animationDuration: 300,
      titleFontSize: '15',
      subtitleFontSize: '12',
      titleColor: '#ffffff',
      unitsColor: '#ffffff',
      subtitleColor: '#ffffff'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
