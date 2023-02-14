console.log("ciao team!");

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede (trovato un esempio allegato, ma siete liberi di gestire la grafica a vostro piacimento)

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

var team =[
    membro1 ={
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "./img/wayne-barnett-founder-ceo.jpg",
    },
    membro2 ={
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "./img/wayne-barnett-founder-ceo.jpg",
    },
    membro3 ={
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "./img/walter-gordon-office-manager.jpg",
    },
    membro4 ={
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "./img/angela-lopez-social-media-manager.jpg",
    },
    membro5 ={
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "./img/scott-estrada-developer.jpg",
    },
    membro6 ={
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "./img/barbara-ramos-graphic-designer.jpg",
    },
]

console.log(team)

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )

for (let i = 0; i < team.length; i++){

    let membro = team[i]

    for (let info in membro) {
        
        console.log(membro[info]);
    }
}