//let roundScore  = 0;


const form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector("input").value;
    console.log(input);

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = input;
});

const btn = document.querySelector('#food');
btn.addEventListener('click', myResponseFunction);

// Initialize the roundScore variable
let roundScore = 0;

function myResponseFunction(event) {
    // Generate a random number between 1 and 6 (dice roll)
    const randomRounded = Math.floor(Math.random() * 6) + 1;
    console.log(randomRounded);

    // Update the dice element with the random number
    const diceEl = document.querySelector("#dice");
    diceEl.innerText = randomRounded;

    // Check if the rolled number is 1, and set roundScore to 0 if so
    if (randomRounded === 1) {
        roundScore = 0;
    } else {
        // Otherwise, add the rolled number to roundScore
        roundScore += randomRounded;
    }

    // Update the score display element
    const scoreMo = document.querySelector("#op");
    scoreMo.innerText = roundScore;
    console.log(roundScore);

    // Check if the roundScore is 1, and increment the 'numb' element by 1
    if (roundScore === 1) {
        const numbElement = document.querySelector("#numb");
        let currentNumb = Number(numbElement.innerText); // Get the current value
        numbElement.innerText = currentNumb + 1;  // Increment by 1
    }
}


//function myResponseFunction(event){
  //  if (randomRounded == 1) {
    //    roundScore = ("#numb") + 1
    //}
    //const bott = document.querySelector ("#numb")
    //bott.innerText = roundScore;
 //}