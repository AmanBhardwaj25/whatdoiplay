# whatdoiplay

## Background
a simple utility that grabs a user's steam library
and lets them choose which game they would want to pay next

## How it works
uses steam web api's to authenticate user, grab their library,
sort their games based on rating. Then grabs the top N (N being
a number the user provides) and views two games at a time
to the user. The user makes a choices between the two games and 
the game chosen. The app then views the next set of games.
The choice continues until the user has made a choice on all games