function add(x, y){
    return x+y;
} 

add(10, 5);

console.log( add(10, 5) );

const sum = add (6, 3);
console.log(sum);

console.log( `Summan av 4 och 8 är ${ add(4, 8)}`);

function createEl(text){
    const pEl = document.createElement('p');
    pEl.innerText = text;
    return pEl;
}

const returnedPEl = createEl('undrar vad som kommer hända');

console.log(returnedPEl);
document.body.appendChild(returnedPEl);



function multiply(x, y){
    return x*y;
}
console.log( multiply(10, 2) )


function getSum(){
    console.log(arguments)
    let sum2 = 0;
    
    for(const num of arguments){
        sum2+=num;
        console.log('sum i loopen: ', sum2);
    }
    return sum2;
}

console.log( getSum(10, 20, 30 ))