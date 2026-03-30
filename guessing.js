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



