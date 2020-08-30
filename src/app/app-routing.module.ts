import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home', component:HomeComponent, children:[
    {path:'', pathMatch:'full',redirectTo:'feed'},
    {path:'feed', pathMatch:'full', component:PostsComponent},
    {path:'messenger',component:MessengerComponent}
  ]},
  {path:'profile',component:ProfileComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
