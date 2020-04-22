const pets = [
  {
    image: 'https://i.postimg.cc/kDrXqHK4/lincolnfinal.jpg',
    name: 'Lincoln',
    color: 'Green',
    specialSkill: 'Coding',
    typeOfPet: 'Lizard'
  },
  {
    image: 'https://i.postimg.cc/mDk1X0T1/larryfinal.jpg',
    name: 'Larry',
    color: 'Blue',
    specialSkill: 'Catching Flies',
    typeOfPet: 'Lizard'
  },
  {
    image: 'https://i.postimg.cc/x8xntyv0/hairyfinal.jpg',
    name: 'Hairy',
    color: 'Tan',
    specialSkill: 'Gardening',
    typeOfPet: 'Hamster'
  },
  {
    image: 'https://i.postimg.cc/xjKsM104/hattiefinal.jpg',
    name: 'Hattie',
    color: 'White',
    specialSkill: 'Relaxing',
    typeOfPet: 'Hamster'
  },
  {
    image: 'https://i.postimg.cc/cCVHZGHK/feliciafinal.jpg',
    name: 'Felicia',
    color: 'Yellow',
    specialSkill: 'Blowing Bubbles',
    typeOfPet: 'Fish'
  },
  {
    image: 'https://i.postimg.cc/qMWGzNYY/frankiefinal.jpg',
    name: 'Frankie',
    color: 'Purple',
    specialSkill: 'Treasure Hunting',
    typeOfPet: 'Fish'
  },
]

 const printsToDom = (selector, textToPrint) => {
   const selectedDiv = document.querySelector(selector);
   selectedDiv.innerHTML = textToPrint;
 }

 const buildPetCards = () => {
   let domString = '';

   for (let i = 0; i < pets.length; i++) {
     domString += '<div class="petCard">';
     domString += `<h3>${pets[i].name}</h3>`;
     domString += `<img src="${pets[i].image}" alt="${pets[i].typeOfPet}">`;
     domString += `<h4>${pets[i].color}</h4>`;
     domString += `<p>${pets[i].name}'s special skill is: ${pets[i].specialSkill}</p>`;
     domString += `<h3>${pets[i].typeOfPet}</h3>`;
     domString += '</div>'
  }
  printsToDom('#petContainer', domString);
 }

 const init = () => {
   buildPetCards();
 }

 init();
