var button = document.getElementById('button1');

var display = document.getElementById('txtidea');
var magicNumber = 55;

// For random number
// magicNumber = Math.floor(Math.random()*100)

button.addEventListener('click', function(){
    var input = document.getElementById('input1').value;
    if (input == magicNumber){
        display.innerHTML = `You guessed right number which is ${magicNumber}`
    }else if (input < magicNumber){
        display.innerHTML = `You guessed number is lower`
    }else {
        display.innerHTML = `You guessed number is higher`
    }
})