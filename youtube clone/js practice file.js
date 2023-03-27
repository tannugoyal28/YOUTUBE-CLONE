let b = document.querySelector('button');
b.addEventListener('click', enter);

function enter(){
    let name = prompt('enter name of student');
    alert('name of student is ' + name);
}

let nm = prompt("eneter no of maggies you want to make");
let water = prompt("eneter no of watere cup ");
let m = prompt("enetr number of m packets you want to add");

function maggeMaking( nm , water , m){
    let maggie = nm + 'jhbdi' + water + "hfcuwhd" + " " + 'nbcaw';
    return maggie;
}

console.log(maggeMaking(nm , water , m));
