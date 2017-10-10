var diceValues = []

var Die = function () {
    this.value = getRandomDie(),
    this.span = document.createElement('span'),
    this.span.className = 'dice dice-' + this.value,
    this.span.addEventListener("click", this.roll.bind(this)),
    this.span.addEventListener("dblclick", this.remove.bind(this)),
    document.body.appendChild(this.span);
}

function getRandomDie() {
    min = Math.ceil(7);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min)) + min;
}

var button1 = document.getElementById("btn1");
    button1.addEventListener("click", function () {
    diceValues.push(new Die())
});

var button2 = document.getElementById("btn2");
button2.addEventListener("click", function () {
    for (var i = 0; i < diceValues.length; i++) {
        var diceIndex = diceValues[i];
        diceIndex.value = getRandomDie();
        diceIndex.span.className = 'dice dice-' + diceIndex.value;
    }
});

var button3 = document.getElementById('btn3');
button3.addEventListener('click', function() {
    var sumDice = diceValues.reduce (function (total, current) {
        return total + current.value;
        }, 0);
    alert(`Total of all dice on screen: ${sumDice}`);
})

Die.prototype.roll = function() {
    this.value = getRandomDie();
    this.span.className = 'dice dice-' + this.value;
}

Die.prototype.remove = function() {
    var removeDie = diceValues.indexOf(this);
    diceValues.splice(removeDie, 1);
    this.span.remove();
}