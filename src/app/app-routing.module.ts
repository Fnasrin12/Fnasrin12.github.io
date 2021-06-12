import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent, data:{ animationState: 'one' }},
  {path:'about',component:AboutComponent, data:{ animationState: 'two' }},
  {path:'projects',component:ProjectComponent, data:{ animationState:'four' }},
  {path:'contact',component:ContactComponent, data:{ animationState:'five' }},
  {path:'skills',component:SkillsComponent, data:{ animationState:'three' }},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
