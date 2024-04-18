const body = document.querySelector('body');
const lightsUp = document.getElementById('lightsUp');
const lightsOut = document.getElementById('lightsOut');
const readExcerptStation = document.getElementById('readExcerptStation');
const readExcerptFoleys = document.getElementById('readExcerptFoleys');
const stationExcerpt = document.getElementById('stationExcerpt');
const foleyExcerpt = document.getElementById('foleyExcerpt');

lightsUp.addEventListener('click', toggleLight.bind(this));
lightsOut.addEventListener('click', toggleLight.bind(this));
readExcerptStation.addEventListener('click', toggleExcerptVisibility.bind(this, stationExcerpt, readExcerptStation));
readExcerptFoleys.addEventListener('click', toggleExcerptVisibility.bind(this, foleyExcerpt, readExcerptFoleys));

function toggleLight(){
    body.classList.toggle('dark');
    lightsUp.classList.toggle('hidden');
    lightsOut.classList.toggle('hidden');
}

function toggleExcerptVisibility(excerpt, button){
    excerpt.classList.toggle('hidden');
    if (button.innerText == 'read an excerpt'){
        button.innerText = 'hide the excerpt'
    } else {
        button.innerText = 'read an excerpt'
    }
}