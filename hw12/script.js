const photosOfCharacters = {
    "Luke Skywalker": "images/lukeSkywalker.jpg",
    "R2-D2": "images/r2D2.jpg",
    "Darth Vader": "images/darthVader.jpeg",
    "C-3PO": "images/c3po.png",
    "Leia Organa": "images/leia.jpg",
    "Wedge Antilles": "images/vedge.jpg",
    "Chewbacca": "images/chew.jpg",
    "Han Solo": "images/hanS.jpg",
    "Yoda": "images/yoda.jpg",
    'Obi-Wan Kenobi': "images/obiVan.jpg",
    "Boba Fett": "images/bobaFet.jpg",
    "Palpatine": "images/palpatine.jpg",
    "IG-88": "images/ig88.jpg",
    "Lobot": "images/lobot.jpeg",
    "Bossk": "images/bossk.jpg",
    "Lando Calrissian": "images/landoC.jpg",
}

const previous = document.querySelector('.previous');
const container = document.querySelector('.planets_wrapper');
const next = document.querySelector('.next');
const btnPlanets = document.getElementById('planets');
const infoBtn = document.getElementById('btn1');
let currentPage;



async function getCharacters() {
    const res =  await axios.get('https://swapi.co/api/films/2');
    const arr = res.data.characters;
    const container = document.querySelector('.users');
   arr.forEach(el => {
      let newR = axios.get(el).then(newR => {
       const infoCharacter = document.createElement('div');
       const name = newR.data.name;
       infoCharacter.innerHTML = `
       <img class="photo" src="${photosOfCharacters[name]}">
       <h3>${newR.data.name}</h3>
       <h5>${newR.data.birth_year}</h5>
       <p>${newR.data.gender}</p>
       `
       container.append(infoCharacter);
       infoCharacter.classList.add('user')
       });
    })
}


infoBtn.addEventListener('click', (event) => {
    let removeList = document.querySelector('.planets_wrapper');
    removeList.innerHTML = '';
    getCharacters().then(film => {})}, );


async function getPlanets(currentPage) {
    const res = await axios.get('https://swapi.co/api/planets/' + '?page=' + currentPage);
    return res.data.results;
}

function renderPlanets (planets) {
    const container = document.querySelector('.planets_wrapper');
    container.innerHTML = '';
    planets.forEach(el => {
        const planet = document.createElement('div');
        planet.innerHTML = `
        <ul class="planetsList">
        <li class="planetItem">${el.name}</li>
        </ul>
        `
        container.append(planet);
    })
}
 
    btnPlanets.addEventListener('click', () => {
        let removeItem = document.querySelector('.users');
        removeItem.innerHTML = ''
        next.style.display = 'block';
        currentPage = 1;
        getPlanets(currentPage).then(renderPlanets)
    })

    next.addEventListener('click', async function () {
        if (currentPage === 6) {
            next.style.display = 'none';
        }
        if (currentPage >= 1) {
            previous.style.display = 'block';  
        } 
        currentPage += 1;
        container.innerHTML = '';
        await getPlanets(currentPage).then(renderPlanets);
    })

    previous.addEventListener('click', async function () {
        currentPage -= 1;
        container.innerHTML = '';
        await getPlanets(currentPage).then(renderPlanets);
    })

  