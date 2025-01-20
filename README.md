# WhatDoIPlay

## 🛠️ Background
**WhatDoIPlay** is a simple and fun utility designed to help users decide what game to play next from their Steam library.

---

## 🔍 How It Works
1. **User Authentication**:
    - Leverages Steam Web APIs to authenticate the user.

2. **Library Retrieval**:
    - Fetches the user's Steam library.
    - Sorts the games based on ratings or user-defined criteria.

3. **Interactive Decision Process**:
    - Displays the top **N** games (where **N** is a user-defined number) in pairs.
    - The user selects one game from each pair in a head-to-head comparison.
    - The process continues until the user has made a choice for all games in the selection.

4. **Result**:
    - At the end, the app suggests the best game to play based on the user's choices.

---

## 🌟 Features
- **Customizable Game Pool**:
    - Choose how many games (**N**) to include in the selection process.
- **Sorted by Ratings**:
    - Games are ranked based on their ratings, ensuring the best options are considered first.
- **Interactive Pairwise Comparison**:
    - Makes decision-making easier and more fun.

---

## 💡 Why Use WhatDoIPlay?
- **Combat Decision Fatigue**:
    - We've all been there. Steam Sales drop and now you have 10 more games added to your library
    - If you're overwhelmed by a large Steam library, this app simplifies the choice.
- **Engaging and Personalized**:
    - Your choices determine the best game for your mood or preferences.

---

## 🚀 Future Enhancements
- Integration with **non-Steam libraries** (e.g., Epic Games, GOG).
- Add an option to skip already played games/minimum hours played limit
- Add an option to use genre/steam tags to filter user library

---

## 📦 Tech Stack
- **Backend**: Node.js, Express, OpenID
- **Frontend**: Angular
- **API**: Steam Web API

---

## 🎮 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/AmanBhardwaj25/whatdoiplay.git
