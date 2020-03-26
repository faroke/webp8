function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function random() {
    document.getElementById("value").innerHTML = getRandomInt(99) + 1;
}
//99 = 0, 1, 2, 3, ..., 98
