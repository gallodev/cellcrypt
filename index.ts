import Factorial from './src/Factorial';
import NameBook from './src/NameBook';

const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(' Choose the challenge : [1] Factorial hash | [2] Name book : ' , (value) => {
    console.log(value);
    switch(parseInt(value)){
        case 1:
            rl.question(' Enter the value of X : ', (value) => {             
                let factorialObj = new Factorial(BigInt(value));
                let response = factorialObj.factorialX();
                console.log("The result is : " + response)
            rl.close();
          });
        break;
        case 2:
            rl.question(' Enter a list of names : ', (value) => {             
                let NameBookObj = new NameBook(value);
                let response = NameBookObj.isConsistentName();
                console.log("The list is consistent : " + response)                
                rl.close();
            });           
        break;
        default: 
            console.log(" Invalid option. ");
            rl.close();
        break;
    }    
});



