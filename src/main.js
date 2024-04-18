const body = document.querySelector('body');
const lightsUp = document.getElementById('lightsUp');
const lightsOut = document.getElementById('lightsOut');

var isDark = false;

lightsUp.addEventListener('click', toggleLight.bind(this));
lightsOut.addEventListener('click', toggleLight.bind(this));

function toggleLight(){
    if (isDark){
        body.classList.remove('dark');
        isDark = false;
    } else {
        body.classList.add('dark');
        isDark = true;
    }
    lightsUp.classList.toggle('hidden');
    lightsOut.classList.toggle('hidden');
}