const character = window.localStorage.getItem('characterId');
const characterSchemaUrl = 'https://rickandmortyapi.com/api/character/' + character;

const profileImage = document.querySelector('.profile-img');
const profileName = document.querySelector('.profile-name');
const profileStatus = document.querySelector('.profile-status');
const profileSpecies = document.querySelector('.profile-species');
const profileGender = document.querySelector('.profile-gender');
const profileOrigin = document.querySelector('.profile-origin');
const profileLocation = document.querySelector('.profile-location');

fetch(characterSchemaUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const characterImg = data.image;
    const characterName = data.name;
    const characterStatus = data.status;
    const characterSpecies = data.species;
    const characterGender = data.gender;
    const characterOrigin = data.origin.name;
    const characterLocation = data.location.name;


    profileImage.innerHTML += `<img src="${characterImg}" class="img-fluid mx-auto d-block" id="character-img">`;
    profileName.innerHTML += `<h1 id="character-name">${characterName}<h1>`;
    profileStatus.innerHTML += `<p>${characterStatus}</p>`;
    profileSpecies.innerHTML += `<p>${characterSpecies}</p>`;
    profileGender.innerHTML += `<p>${characterGender}</p>`;
    profileOrigin.innerHTML += `<p>${characterOrigin}</p>`;
    profileLocation.innerHTML += `<p>${characterLocation}</p>`;
  })