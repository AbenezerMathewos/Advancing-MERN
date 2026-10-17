// algorthim thinking
function add(a,b){
    if ( isNaN(a) || isNaN(b) ){
        return "Please Provide the number only"
    };
    var dmr = a+b;
    return dmr;
}
var dmir = add(89.9,9);
console.log(dmir);

function triVal(b, h){
    if (typeof b !== "number" || typeof h !== "number"){
        return "please insert number";
    }
    return (b*h)/2;
}
triangleValue=triVal(6,5);
console.log(triangleValue);

function trianglewaga(bs, ht){
    if (isNaN(bs) || isNaN(ht)){
        return"please provide number only";
    } else if(bs <=0 || ht <=0 ){
        return "please provide positive number only";
    }
    return (bs*ht)/2;
}
mels = trianglewaga(4, 3);
console.log(mels);

// Minute to Second Converter
function minuteToSecondConverter(min) {
if(isNaN(min)){
    return"please enter number";
} else if (min<0) {
    return"please insert postive number";
} else{
     return (min*60);
}
}
// second = minuteToSecondConverter(4);
console.log(minuteToSecondConverter(5));
console.log(minuteToSecondConverter(-5));
console.log(minuteToSecondConverter("h"));

//Working with Decision loop
function greeting(){
    for(i=0; i<=7; i++){
        console.log(i+ " Hello World");
    }}
    greeting();

// printing elements using for loop
function listElements(someNumbers){
    console.log(someNumbers);
    for(i=0; i<someNumbers.length; i++){
        console.log("index numbers" ,i);
        console.log("Element "+ someNumbers[i])
    }
}
listElements([16,52,33,54,85,56,37,82,91]);