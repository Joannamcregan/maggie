const body = document.querySelector('body');
const lightsUp = document.getElementById('lightsUp');
const lightsOut = document.getElementById('lightsOut');
const readExcerptStation = document.getElementById('readExcerptStation');
const readExcerptFoleys = document.getElementById('readExcerptFoleys');

// var isDark = false;

lightsUp.addEventListener('click', toggleLight.bind(this));
lightsOut.addEventListener('click', toggleLight.bind(this));

function toggleLight(){
    // if (isDark){
    //     body.classList.remove('dark');
    //     isDark = false;
    // } else {
    //     body.classList.add('dark');
    //     isDark = true;
    // }
    body.classList.toggle('dark');
    lightsUp.classList.toggle('hidden');
    lightsOut.classList.toggle('hidden');
}