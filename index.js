const randit = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

let max = 2;
let dname;

const username = (name) => {
  dname = name;
  return console.log('Welcome to the game '+dname+'. Use the function guess("A number") to guess between 1 and '+max);
}

const guess = (num) => {
  let die = randit(max);
  if(num === die){
    max++;
    console.log('You did it '+dname+'. Continue using the guess function to keep on playing! \nThis time guess between the numbers 1 and '+max)
  } else {
    console.log('Oops... the correct number was '+die+'. Try again.')
  }
}

console.log('Welcome to the game. What is your username!! \n\n Tell me by typing username("name") and hitting the enter key. \n\n Wish you luck')

