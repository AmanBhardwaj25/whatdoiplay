import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class Landing implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Extract user details from query params
    this.route.queryParams.subscribe(params => {
      this.user = params;
      console.log('User authenticated:', this.user);
    });
  }

  navigateToMakeChoice(): void {
    this.router.navigate(['/wizard']); // Navigates to MakeChoiceComponent
  }
}
