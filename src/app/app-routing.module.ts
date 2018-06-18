import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { SingleTrackComponent } from './single-track/single-track.component';
import { FunctionalityBarComponent } from './functionality-bar/functionality-bar.component';
const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path : 'login', component: LoginComponent},
    {path : 'app-functionality-bar/:userId', component: FunctionalityBarComponent},
    {path : 'single-track', component: SingleTrackComponent},
  ];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ]
})
export class AppRoutingModule {
}
