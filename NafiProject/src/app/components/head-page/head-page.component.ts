import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-head-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './head-page.component.html',
  styleUrl: './head-page.component.css'
})
export class HeadPageComponent implements  OnInit{


  constructor(private router :Router) {
  }
  ngOnInit(): void {
  }


}
