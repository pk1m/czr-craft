# React Craft Coding Exercise


### Task:

Your task is to build a simplified sportsbook application. You will integrate three mock APIs:
1. **Games API** – Provides a list of games and their selectable players for wagering.
2. **Scores Streaming API** – Streams real-time game scores.
3. **Odds Streaming API** – Streams real-time odds for each selection.
    
Using these APIs, develop a simple app that displays all available games along with their dynamically updating scores and their selections with dynamically updated odds. The app should allow users to click on a selection to add it to the betslip. Users should also be able to remove selections from the betslip and return them to the game list.

###  Acceptance Criteria:

**Display games and their scores and selections**
- The app gets the list of games from the Games API
- For each game, display the game name and the sport.
- For each game, display the current score dynamically updated from the Scores Streaming API
- For each game, display each of the selections by name and with their odds dynamically updated from the Odds Streaming API
    
**Add selection to betslip**
- User can click on a selection from a game which adds the selection to the betslip and removes it from the game.
- The selection in the betslip should display the name and their odds dynamically updated from the Odds Streaming API.
- User can add multiple selections to the betslip

**Remove selection from betslip**
- User can click on a selection in the betslip which removes it from betslip and returns it to the game it was added from.

###  Things to consider:

- Code readability & maintainability
- Performance & Efficiency
- Correctness & Completeness
- Testability
- Enhancement & Optimization when requested