function fizzBuzzGenerator(elements){
    for(i=1;i<=elements;i++){
        
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        } else if (i%3==0){
            console.log("Fizz")
        } else if (i%5==0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzzGenerator(15);



function fizzBuzzGeneratorArray (elements){
    list=[]
    for(i=1;i<=elements;i++){
        
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        } else if (i%3==0){
            console.log("Fizz")
        } else if (i%5==0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzzGeneratorArray(15);