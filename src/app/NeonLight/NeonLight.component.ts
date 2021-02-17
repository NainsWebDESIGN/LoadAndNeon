import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NeonLight',
  templateUrl: './NeonLight.component.html',
  styleUrls: ['./NeonLight.component.css']
})
export class NeonLightComponent implements OnInit {
  @HostListener('window:beforeunload')
  backLoding() {
    this.router.navigate(['/loading']);
  }

  constructor(private router: Router) { }
  ngOnInit() {
  }

}
