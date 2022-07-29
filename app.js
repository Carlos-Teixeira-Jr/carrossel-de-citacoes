let nameContainer = document.getElementById("author-name");
let image = document.getElementById("author-img");
let job = document.getElementById("author-job");
let quoteText = document.getElementById("author-quote");
let previousBtn = document.getElementById("previous-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.getElementById("random-btn");

const quotes = [
  {
    id: 1,
    quote: "Existem momentos na vida onde a questão de saber se se pode pensar diferentemente do que se pensa, e perceber diferentemente do que se vê, é indispensável para continuar a olhar ou a refletir.",
    author: "Michel Foucault",
    img: "/img/michel-foucault.jpeg",
    job: "Filósofo"
  },
  {
    id: 2,
    quote: "Um conceito é como um tijolo. Ele pode ser usado pra construir um tribunal da razão. Ou pode ser jogado através da janela..",
    author: "Gilles Deleuze",
    img: "/img/deleuze.png",
    job: "Filósofo"
  },
  {
    id: 3,
    quote: "As convicções são inimigas mais perigosas da verdade do que as mentiras.",
    author: "Friedrich Nietzsche",
    img: "/img/Nietzsche1882.jpg",
    job: "Filósofo"
  }
];

//Contador do index do array
let currentItem = 0;

//Carregar item inicial
window.addEventListener('DOMContentLoaded',function(){
    const item = quotes[currentItem];
    nameContainer.innerText = item.author;
    image.src = item.img;
    /*image.appendChild(document.createElement('img')).src = item.img;*/
    job.innerHTML = item.job;
    quoteText.innerHTML = item.quote;
    console.log(currentItem);
});

//Função para mostrar as propriedades de quotes
function showItem(thinker){
  const item = quotes[thinker];
  nameContainer.innerText = item.author;
  image.src = item.img;
  job.innerHTML = item.job;
  quoteText.innerHTML = item.quote;
  console.log(currentItem);
};

//Mostrar próximo item
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > quotes.length -1){
    currentItem = 0;
  }
  showItem(currentItem);
});

//mostrar item anterior
previousBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = quotes.length - 1;
  }
  showItem(currentItem);
});

randomBtn.addEventListener('click', function getRandomItem(){
  randomItem = Math.floor(Math.random() * quotes.length);
  if(randomItem == currentItem){
    getRandomItem();
  }
  currentItem = randomItem;
  showItem(currentItem);
});

//mostrar item de forma aleatória
/*randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * quotes.length);
  showItem(currentItem);
});*/

