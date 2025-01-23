import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-makechoice',
  templateUrl: './makechoice.component.html',
  styleUrls: ['./makechoice.component.css']
})
export class MakechoiceComponent {
  topGames: number = 10; // User input for top games
  userGames: any[] = []; // Full list of games
  filteredGames: any[] = []; // Games filtered by user's choice
  showGames = false; // Whether to display the games
  loading = false; // Loading state
  errorMessage: string | null = null; // Error message

  constructor(private http: HttpClient) {}

  // Handle form submission
  submitChoice(): void {
    if (this.topGames && this.topGames > 0) {
      this.loading = true; // Show loading indicator
      this.errorMessage = null;

      // Fetch games from the backend
      const apiUrl = 'http://localhost:5005/rankUserGames';
      this.http.get<any>(apiUrl, { withCredentials: true })
        .subscribe({
          next: (response) => {
            this.userGames = response.data || [];
            // Filter the top games based on user input
            this.filteredGames = this.userGames.slice(0, this.topGames);
            this.showGames = true;
            this.loading = false; // Hide loading indicator
          },
          error: (error) => {
            console.error('Error loading user games:', error);
            this.errorMessage = 'Failed to load user games. Please try again.';
            this.loading = false; // Hide loading indicator
          }
        });
    }
  }
}
