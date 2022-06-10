const container = document.querySelector("#container");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

one.classList.remove('hidden');
container.addEventListener('click', check);

function check () {
    if (one.classList != 'hidden') {
        return checkOne();
    }
    if (two.classList != 'hidden') {
        return checkTwo();
    }
    if (three.classList != 'hidden'){
        return checkThree();
    }
}
function checkOne () {
    one.classList.add('hidden');
    two.classList.remove('hidden');
}    
function checkTwo () {
    two.classList.add('hidden');
    three.classList.remove('hidden');
}
function checkThree () {
    three.classList.add('hidden');
    one.classList.remove('hidden');
}
function loopBack () {
    one.classList.remove('hidden');
}