function first() {
    console.log("welcome to js")
    var a = 3;
    var b = 678;
    var c = (a + b);
    console.log(c);
    return c
}
first();

function befa() {
    let demo = ["desu", "tesfu", "kucho", "lemu", 3546, 576, 78, 1234];

    console.log(demo[0] + "befa is here!")
    console.log(demo[1] + " is here")
    console.log(demo[2] + " is here")
    console.log(demo[3] + " is here")
}

befa();

let pcWaga = 20000;
let kinashi = pcWaga * (10 / 100);
let gbr = pcWaga * (2 / 100);
let muluWaga = pcWaga + gbr - kinashi;
console.log(muluWaga);

function adiss(x,y) {
    console.log("arguments and parameters");
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
}
adiss(23, 12)