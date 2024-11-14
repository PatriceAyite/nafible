import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeadPageComponent} from './components/head-page/head-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {NewProviderComponent} from './components/new-provider/new-provider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadPageComponent, HomePageComponent, NewProviderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
