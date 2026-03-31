let data;

let images = [
  "giovanna/g1.png",
  "giovanna/g2.png",
  "giovanna/g3.png",
  "giovanna/g4.png"
];

function preload() {
  font = loadFont("../0xA000/0xA000-Mono-Bold.ttf");
  data = loadJSON("data.json");
}

function setup() {
  //Chager le corpus
  let smsListe = data.corpus.sms;
  //connaître le nbr de sms
  let nbrSms = smsListe.length;
  console.log("nombre de sms : " + nbrSms);

  //afficher un sms aléatoire :
  let texte = random(smsListe).cont;
  if (typeof texte == "object") {
    texte = texte.__text;
  }
  console.log(texte);

  //Parcourir toute la liste
  for (let i = 0; i < smsListe.length; i++) {
    let smsData = smsListe[i];
    let texte = smsData.cont;

    if (typeof texte == "object") {
      texte = texte.__text;
    }

    let p;

  if (i%2 != 0) {

    p = createP("meow meow meow"); 
    p.addClass("yellowcell");


    p.mouseOver(() => {
      p.html(texte);
    });


    p.mouseOut(() => {
      p.html(texte);
    });

  } else {
    let imgPath = random(images);
    p = createImg(imgPath);
    p.addClass("imgcell");

    // Sauvegarder la taille originale
    let originalWidth = 400; // ou p.width par défaut
    let originalHeight = 400;

    p.style('width', originalWidth + 'px');
    p.style('height', originalHeight + 'px');

    // Agrandir au survol
    p.mouseOver(() => {
        p.style('transform', 'scale(2)');
        p.style('z-index', '20'); // pour qu'elle passe au-dessus
    });

    // Revenir à la taille originale quand la souris quitte
    p.mouseOut(() => {
        p.style('transform', 'scale(1)');
        p.style('z-index', '15');
    });

  }


  }
}