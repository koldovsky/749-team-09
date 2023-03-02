
// function for translating
function switchLanguage(language) {
  var elements = document.getElementsByClassName('station__text__about');
  var title = document.getElementById('station-title');
  var button = document.getElementsByName('button-info')[0];
  
  for (var i = 0; i < elements.length; i++) {
      if (language === 'italian') {
          elements[i].innerHTML = 'Il Posto è spazioso e il miglior spazio di coworking nel cuore di Londra. Offriamo uffici di lusso progettati per sentirsi come a casa e per soddisfare le tue esigenze uniche. Oltre al lato pratico, abbiamo creato un ambiente in cui la tua creatività interiore ti ispirerà a lavorare in modo più produttivo. Accogliamo imprenditori instancabili, artisti, liberi professionisti e startup per lavorare sotto lo stesso tetto!';
          title.innerHTML = 'Benvenuti alla Stazione!';
          button.innerHTML = 'MAGGIORI INFORMAZIONI SULLA COWORKING';
      } else if (language === 'polish') {
          elements[i].innerHTML = 'Stacja jest przestronna i najlepszą przestrzenią coworkingową w samym sercu Londynu. Oferujemy luksusowe biura zaprojektowane tak, aby poczuć się jak w domu i dopasować do Twoich unikalnych potrzeb. Oprócz strony praktycznej, stworzyliśmy środowisko, w którym twoja wewnętrzna kreatywność zainspiruje Cię do pracy bardziej produktywnie. Zapraszamy niezmordowanych przedsiębiorców, artystów, wolnych strzelców i start-upy do pracy pod jednym dachem!';
          title.innerHTML = 'Witaj na Stacji!';
          button.innerHTML = 'WIĘCEJ O COWORKINGU';
      } else {
          elements[i].innerHTML = 'The Station is spacious and the best coworking space in the very heart of London. We offer luxury offices designed to feel like home and to fit your unique needs. Besides the practical side, we\'ve created an environment where your inner creativity will inspire you to work more productively. We welcome relentless entrepreneurs, artists, freelancers, and startups to work under one roof!';
          title.innerHTML = 'Welcome to The Station!';
          button.innerHTML = 'MORE ABOUT COWORKING';
      }
  }
}

// Processing for buttons
document.getElementById('italian-btn').addEventListener('click', function() {
  switchLanguage('italian');
});

document.getElementById('polish-btn').addEventListener('click', function() {
  switchLanguage('polish');
});

document.getElementById('english-btn').addEventListener('click', function() {
  switchLanguage('english');
});

const buttons = document.querySelectorAll(".language-buttons button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", function () {
    this.classList.add("rotate");
  });
  buttons[i].addEventListener("mouseleave", function () {
    this.classList.remove("rotate");
  });
}