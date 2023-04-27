import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { StatesComponent } from './states/states.component';
import { TracksComponent } from './tracks/tracks.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'flights', component: FlightsComponent},
  { path: 'states', component: StatesComponent},
  { path: 'tracks', component: TracksComponent},

  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
