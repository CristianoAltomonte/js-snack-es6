// SNACK 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti
// proprietà: nome e peso.Stampare a schermo la bici con peso minore utilizzando 
// destructuring e template literal


let tipologia = [

    { nome: 'Tandem', peso: '35' },
    { nome: 'Triciclo', peso: '3' },
    { nome: 'Bicicletta', peso: '9' },

]

console.log(tipologia);

let pesoMinore = tipologia[0];

for (let i = 0; i< tipologia.length; i++) {

    if (tipologia[i].peso < pesoMinore.peso) {

        pesoMinore = tipologia[i];

    }
}


const {nome,peso} = pesoMinore;

document.getElementById('print').innerHTML= `<h1>Il mezzo più leggero è ${nome}, con un peso di circa ${peso} kg</h1>`