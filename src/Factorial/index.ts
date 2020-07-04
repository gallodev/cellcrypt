export default class Factorial{
    x : bigint;

    constructor(x : bigint){
        this.x = x;
    }

    factorialX() {    
        let fatorial : bigint = BigInt(1);

        if(this.x == BigInt(0) || this.x == BigInt(1)){
            return fatorial;
        }

        for(let i = 1;i<=this.x;i++){
            fatorial = fatorial * BigInt(i);
        }
                                
        const result = fatorial.toString().split("").map(items=>parseInt(items)).reduce((total, currentElement) => total + currentElement)
        
        return result;
    }    
}