import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NewProviderComponent} from './components/new-provider/new-provider.component';
import {BookingPageComponent} from './components/booking-page/booking-page.component';
import {ManagerBookingComponent} from './dashboard/manager-booking/manager-booking.component';

export const routes: Routes = [
  { path: 'home', component:HomePageComponent },
  { path: 'new-provider', component:NewProviderComponent},
  { path: 'dashboard', component:ManagerBookingComponent},
  { path: '', component: HomePageComponent },
];
