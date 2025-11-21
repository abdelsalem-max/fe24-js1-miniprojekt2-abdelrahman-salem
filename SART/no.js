const form = document.querySelector ('form')
form.addEventListener ("submit", function(event){
    event. preventDefault()
    const input = document.querySelector ("input").value
    console.log (input)


    const h1 = document.createElement ("h1")
    document.body.appendChild (h1)
    h1.innerText = input;

})


const btn = document.querySelector('#food');
// console.log (btn)
btn.addEventListener('click', myResponseFunction );


function myResponseFunction(event){
    
    const randomRounded = Math.floor (Math.random()*6) +1
    // console.log (randomRounded)
    const diceEl = document.querySelector ("#dice")
    diceEl.innerText = randomRounded;
    

    if (randomRounded == 1)  {
        roundScore = 0;
    }
    else {
         roundScore = roundScore + randomRounded;
    }
     const ScoreMo = document.querySelector ("#op")
    ScoreMo.innerText = roundScore;
    console.log(roundScore);
}

function myResponseFunction(event){
    if (randomRounded == 1) {
        roundScore = ("#numb") + 1
    }
    const bott = document.querySelector ("#numb")
    bott.innerText = roundScore;
 }