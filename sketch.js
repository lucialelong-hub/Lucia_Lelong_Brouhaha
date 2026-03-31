let data;
let taille = ["moyen", "petit"];


function preload() {
  data = loadJSON("data.json");
}

function setup() {



  //Changer le corpus
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

    //pour chaque sms on crée une balise p
    let p = createP(texte);
    
    let content = select("#content")
    
    

    //on ajoute aléatoirement des classes à ces balises pour les modifiers en css
   


  if (floor(random(46)) === 10) {
    p.addClass("bbg");
    let boite = select('#grille2')
    boite.child(p)
  } else {
    content.child(p)
     p.addClass(random(taille));
  }

  if (floor(random(10)) === 5) {
    let t = getHeure(smsData.date)
    let h = createP(int((t*10))/10);
    h.addClass("grand");
    let boite2 = select('#heure')
    boite2.child(h)

    let delay = random(5) 
    h.style("animation-delay", delay + "s");
  }

  


  }
}


