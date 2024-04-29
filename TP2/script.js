let btnred = document.getElementById('btnred');
let btngreen = document.getElementById('btngreen');
let btnblue = document.getElementById('btnblue');
let paragraph = document.getElementById('text');
let divchangable = document.getElementById('changable');

btnred.addEventListener('click', function() {
    paragraph.innerHTML = 'Red';
    divchangable.classList.remove('divgreen');
    divchangable.classList.remove('divblue');
    divchangable.classList.add('divred');

})

btngreen.addEventListener('click', function() {
    paragraph.innerHTML = 'Green';
    divchangable.classList.remove('divred');
    divchangable.classList.remove('divblue');
    divchangable.classList.add('divgreen');
})

btnblue.addEventListener('click', function() {
    paragraph.innerHTML = 'Blue';
    divchangable.classList.remove('divred');
    divchangable.classList.remove('divgreen');
    divchangable.classList.add('divblue');
})

let name = document.getElementById('name');
let surname = document.getElementById('surname');
let btnsend = document.getElementById('send');
let result = document.getElementById('result');

btnsend.addEventListener('click', function() {
    result.innerHTML = name.value + ' ' + surname.value;
})

let btnhide = document.getElementById('hide');

btnhide.addEventListener('click', function() {
    divchangable.classList.toggle('hidden');
})

let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let operation = document.getElementById('operator');
let btnresult = document.getElementById('calculate');
let result2 = document.getElementById('result2');

btnresult.addEventListener('click', function() {
    const operator = operation.options[operation.selectedIndex].text;

    if(operator === '+'){
        console.log(parseInt(number1.value) + parseInt(number2.value));
        result2.innerHTML = parseInt(number1.value) + parseInt(number2.value);
    } else if(operator === '-'){
        result2.innerHTML = parseInt(number1.value) - parseInt(number2.value);
    } else if(operator === '*'){
        result2.innerHTML = parseInt(number1.value) * parseInt(number2.value);
    } else if(operator === '/'){
        result2.innerHTML = parseInt(number1.value) / parseInt(number2.value);
    }
})

let apuesta = document.getElementById('apuesta');
let btnApostar = document.getElementById('apostar');
let salioApuesta = document.getElementById('salioapuesta');
let resultadoApuesta = document.getElementById('resuladoapuesta');

apuesta.addEventListener('input', function() {
    if(apuesta.value > 36){
        apuesta.value = 36;
    } else if(apuesta.value < 0){
        apuesta.value = 0;
    }
})

btnApostar.addEventListener('click', function() {
    let random = Math.floor(Math.random() * 36) + 1;
    salioApuesta.innerHTML = random;
    if(apuesta.value == random){
        resultadoApuesta.innerHTML = 'Ganaste!!';
    } else {
        resultadoApuesta.innerHTML = 'Perdiste :(';
    }
})

let hover = document.getElementsByClassName('hover');

for(let i = 0; i < hover.length; i++){
    hover[i].addEventListener('mouseover', function() {
        hover[i].classList.add('hovered');
    })
    hover[i].addEventListener('mouseout', function() {
        hover[i].classList.remove('hovered');
    })
}
