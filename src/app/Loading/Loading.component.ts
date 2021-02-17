import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Loading',
  templateUrl: './Loading.component.html',
  styleUrls: ['./Loading.component.css']
})
export class LoadingComponent implements OnInit, AfterViewInit {
  @ViewChild("text") Text: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
    this.Text.nativeElement.innerHTML = this.Text.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
    setTimeout(() => { this.router.navigate(['/light']) }, 5000);
  }

  ngAfterViewInit() {
    anime.timeline({ loop: true })
      .add({
        targets: ".text span",
        translateX: [72, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
      })
      .add({
        targets: ".text span",
        translateX: [0, -72],
        scale: [1, 1],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
      });
  }

}
