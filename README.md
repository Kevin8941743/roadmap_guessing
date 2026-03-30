# Number Guessing Game 

A simple command-line number guessing game built with Node.js. Players try to guess a randomly generated number between 1 and 100 within a limited number of attempts based on difficulty level.  

## Features

- Select difficulty:  
  - Easy (10 attempts)  
  - Medium (5 attempts)  
  - Hard (3 attempts)  
- Real-time feedback: tells you if your guess is too high or too low.  
- Tracks number of attempts.  
- Ends the game when the player guesses correctly or runs out of attempts.  

## Requirements

- Node.js installed on your machine  
- Terminal or command-line access  

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/roadmap_counting.git
```

Navigate into the project folder:

```bash
cd road_counting
```

Run the game with Node.js and choose a difficulty (1, 2 or 3):
(1 = Easy, 2 = Medium, 3 = Hard)

```bash
node guessing.js 2
```

Example:

```bash

Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct Number.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2

Great you have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is greater than 50
Attempts left: 4

Enter your guess: 75
Congratulations! You guessed the correct answer in 2 attempt(s)
```

## License

This project is open source and available under the MIT License.

roadmap.sh Node.js Number Guessing Game project URL: https://roadmap.sh/projects/number-guessing-game
