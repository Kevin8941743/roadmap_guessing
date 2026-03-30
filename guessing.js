import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const args = process.argv
let option = Number(args[2])
let random_value = Math.floor(Math.random() * 101)
console.log(random_value)
let difficulty = ""
let count = 0
let choice = 0


