let data;
let couleur = ["green", "blue", "pink"];
let ast = "*"

function preload() {
  data = loadJSON("data.json");
}

function setup() {

    for (let i = 0; i < 500; i++) {
    //pour chaque sms on crée une astérisque
    let p = createP(ast);
    p.addClass("ast");
  }


  
  //Changer le corpus
  let smsListe = data.corpus.sms;
  //connaître le nbr de sms
  let nbrSms = smsListe.length;
  console.log("nombre de sms : " + nbrSms);

/*
listeMotsAvecFrequences(smsListe)
*/
  //Parcourir toute la liste
  for (let i = 0; i < smsListe.length; i++) {

  //prendre un sms aléatoire :
  let texte = random(smsListe).cont;
  if (typeof texte == "object") {
    texte = texte.__text;
  }

    //pour chaque sms on crée une balise p
  texte = miseEnExergue(texte,'oui')
  texte = miseEnExergue(texte,'non')

  texte = miseEnExergue(texte,'mdr')
  texte = miseEnExergue(texte,'lol')
  texte = miseEnExergue(texte,'ok')

  texte = miseEnExergue(texte,'il')
  texte = miseEnExergue(texte,'tu')
  texte = miseEnExergue(texte,'elle')
  texte = miseEnExergue(texte,'je')
  texte = miseEnExergue(texte,'est')
  

 

  let p = createP(texte);
    
    let content = select("#content2")
    
       p.addClass(random(couleur))
    p.addClass("main");
 
    content.child(p)
 


  }
}



function Maj(texte) {
  let mots = texte.split(" ");
  
  for (let i = 0; i < mots.length; i++) {
    if (random(10) < 5) {  //50 pourcent
      mots[i] = mots[i].toUpperCase();
    }
  }

  return mots.join(" ");
}