const body = document.querySelector('body');
const lightsUp = document.getElementById('lightsUp');
const lightsOut = document.getElementById('lightsOut');

var isDark = false;

lightsUp.addEventListener('click', toggleLight.bind(this));
lightsOut.addEventListener('click', toggleLight.bind(this));

function toggleLight(){
    if (isDark){
        console.log('making it light');
        body.classList.remove('dark');
        isDark = false;
    } else {
        console.log('making it dark');
        body.classList.add('dark');
        isDark = true;
    }
    lightsUp.classList.toggle('hidden');
    lightsOut.classList.toggle('hidden');
}