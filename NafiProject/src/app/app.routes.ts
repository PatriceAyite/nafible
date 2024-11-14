import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NewProviderComponent} from './components/new-provider/new-provider.component';
import {BookingPageComponent} from './components/booking-page/booking-page.component';

export const routes: Routes = [
  { path: 'home', component:HomePageComponent },
  { path: 'new-provider', component:NewProviderComponent},
  { path: 'booking', component:BookingPageComponent},
  { path: '', component: HomePageComponent },
];
