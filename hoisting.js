console.log(myname);
console.log(job); //error
console.log(year);  //error

logMe();
exprExample();  //error
arrowExample();  //error
var myname = 'Arjun';
let job = 'Software engineer';
const year = 110;

function logMe() {
    console.log('logMe is called........')
}

const exprExample = function () {
    console.log('exprExample is called........')
}

const arrowExample = () => {
    console.log('arrowExample called....')
}