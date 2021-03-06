import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add component
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MasterkpaComponent } from './components/masterkpa/masterkpa.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MasterppkComponent } from './components/masterppk/masterppk.component';
import { TindaklanjutComponent } from './components/tindaklanjut/tindaklanjut.component';
import { ApprovaldocComponent } from './components/approvaldoc/approvaldoc.component';

// add component





  const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'masterkpa', component: MasterkpaComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'masterppk', component: MasterppkComponent },
    { path: 'tindaklanjut', component: TindaklanjutComponent },
    { path: 'approvaldoc', component: ApprovaldocComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
