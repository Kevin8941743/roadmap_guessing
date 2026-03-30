import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const args = process.argv
let option = Number(args[2])
let random_value = Math.floor(Math.random() * 101)
let difficulty = ""
let count = 0
let choice = 0

if (option === 1) {
    option = 10;
    difficulty = "Easy"
    choice = 1

} else if (option === 2) {
    option = 5
    difficulty = "Medium"
    choice = 2

} else if (option === 3) {
    option = 3
    difficulty = "Hard"
    choice = 3 

} else {
    console.log("Please choose an available option from the list!")
    process.exit(1)
}

console.log(`Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have ${option} chances to guess the correct Number.\n`)

console.log(`Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: ${choice}\n`)

console.log(`Great you have selected the ${difficulty} difficulty level.\nLet's start the game!\n`)

rl.setPrompt("Enter your guess:")
rl.prompt()

rl.on("line", (answer) => {
    const guess = Number(answer)
    count += 1
    if (guess !== random_value && guess < random_value && count < option) {
        console.log(`Incorrect! The number is greater than ${guess}`)
        console.log(`attempts left: ${option - count}\n`)
        rl.prompt()

    } else if (guess !== random_value && guess > random_value && count < option) {
        console.log(`Incorrect! The number is less than ${guess}`)
        console.log(`attempts left: ${option - count}\n`)
        rl.prompt()

    } else if (isNaN(guess)) { 
        console.log(`${answer} is not a valid number!\n`)
        rl.close()
        process.exit(1)

    } else if (guess === random_value && count <= option) {
        console.log(`attempts left: ${option - count} `)
        console.log(`Congratulations! You guessed the correct answer in ${count} attempt(s)\n`)
        rl.close()

    } else if (guess !== random_value && count === option) {
        console.log("Failed! You have exceeded the amount of guesses!\n")
        rl.close()
        process.exit(0)
    }
    }
)


