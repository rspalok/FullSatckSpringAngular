import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { JavaComponent } from './java/java.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ServerComponent } from './server/server.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path : 'welcome', component: WelcomeComponent,canActivate:[RouteGuardService]},
  {path : 'java/:name',component:JavaComponent,canActivate:[RouteGuardService]},
  {path : 'server',component:ServerComponent,canActivate:[RouteGuardService]},
  {path : 'todos' , component:ListToDoComponent,canActivate:[RouteGuardService]},
  {path : 'logout' , component: LogoutComponent,canActivate:[RouteGuardService]},


  {path :'**',component:ErrorComponent}//put at the last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
