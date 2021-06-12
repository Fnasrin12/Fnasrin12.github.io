import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { InterestComponent } from './interest/interest.component'
import { EducationComponent } from './education/education.component'

const routes: Routes = [
  {path:'home', component: HomeComponent, data:{ animationState: 'one' }},
  {path:'about',component:AboutComponent, data:{ animationState: 'two' }},
  {path:'interest', component:InterestComponent, data:{ animationState: 'three'}},
  {path:'projects',component:ProjectComponent, data:{ animationState:'six' }},
  {path:'contact',component:ContactComponent, data:{ animationState:'seven' }},
  {path:'education',component:EducationComponent, data:{ animationState:'four'}},
  {path:'skills',component:SkillsComponent, data:{ animationState:'five' }},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
