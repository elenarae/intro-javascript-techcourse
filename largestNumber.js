const a=26, b=12, c=10;

let largestNumber=c

if(a>b && a>c){
    largestNumber=a
}
else if(b>a && b>c){
    largestNumber=b
}

console.log(`The largest number is ::${largestNumber}`)

// Testing a comment

let largestValue = computeLargestNumber(400,600,800);

function computeLargestNumber(firstNumber, secondNumber, thirdNumber){
    let largestNumber=firstNumber

    if(secondNumber>firstNumber && secondNumber>thirdNumber){
        largestNumber=secondNumber
    }
    else if(thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber
    }

    return largestNumber
}

console.log(`The largest number is ::${largestValue}`);

//write functions using arrows... interesting - functional programming?

computeLargestNumber (30,40,50);
const computeLargestNumberArrowWay=(firstNumber, secondNumber, thirdNumber)=>{

    let largestNumber=firstNumber;
    firstNumber=100;
    if(secondNumber>firstNumber && secondNumber>thirdNumber){
        largestNumber=secondNumber;
    }
    else if(thirdNumber>secondNumber && thirdNumber>firstNumber){
        largestNumber=thirdNumber;
    }

    return largestNumber;

}
console.log (`The largest number is ::${computeLargestNumber}`)
