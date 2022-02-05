import {bold,bgGreen,bgYellow} from "https://deno.land/std/fmt/colors.ts" ;

const MAX_TRIES = 6
const previousGuesse: Array<string> = []

let globalResults = ''

// this pokemon should be a random pokemon for the API
const pokemon = 'PIKACHU'


let tries = 0

function askWord (){
    const response = prompt('What is the pokemon name?')
    if(response == null){
        return {error: 'not is a possible pokemon name'}
    }else if(response.length != pokemon.length){
            return {error: 'not is a possible name'}
        }else if (previousGuesse.includes(response.toUpperCase())){
            return {error: 'you already try this pokemon name!'}
        }else if(!response.match(/^[a-zA-Z]+$/)){
            return {error: 'not is a possible name'}
        }
        return {response: response.toUpperCase()}
    }


    let guess = ''
while(guess == ''){
    const {error, response} = askWord()
    if(error){
        console.error(error)
        continue
}

if(response) guess = response
}

if(guess == pokemon){
    print(guess)
    console.log('You win!')
}else{
    console.log('You lose!')
    tries++
    start(tries)
}

function start(tries:number){
    const length = pokemon.length

    if (tries > MAX_TRIES){
        console.log('You lose!')
        console.log(`You have ${tries} tries left`)
        return
    }
}


function print(guess:string){
    console.log(`${bgGreen(guess)}`)

    let results = ''

    const letters: Array<string> = [...guess]

    letters.forEach((letter, index) => {
        if(letter == pokemon[index]){
            results += bgGreen(bold(letter))
        }else if(pokemon.includes(letter)){
            results += bgYellow(letter)
        }else{
            results += '_'
        }
    })

    globalResults = results
}

start(0)    