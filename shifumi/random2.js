var score = "0";
var nb = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function start() {
    ++nb;
    if (nb > 10)
        return 0;
    else { 
    var player1 = getRandomInt(3);
    var cpu = getRandomInt(3);
    writespan(player1, "player1");
    writespan(cpu, "cpu");
    wincheck(player1, cpu);
    }
}

function writespan(player, id) {
    if (player == 0)
        document.getElementById(id).innerHTML = "pierre";
    else if (player == 1)
        document.getElementById(id).innerHTML = "papier";
    else
        document.getElementById(id).innerHTML = "ciseaux";
}
function wincheck(player1, cpu) {
    if (player1 == cpu)
        return 0;
    else if (((player1 == 0) && (cpu == 2)) || ((player1 == 1) && (cpu == 0)) || ((player1 == 2) && (cpu == 1)))
        document.getElementById("score").innerHTML = ++score;
    else  {
        if (score > 0)
            document.getElementById("score").innerHTML = --score;
        else
            return 0;
    }
}
