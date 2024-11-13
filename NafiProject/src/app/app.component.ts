import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeadPageComponent} from './components/head-page/head-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NafiProject';
}
