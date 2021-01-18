var zucchine = [
    {
        varietà: 'lunga',
        peso: 15,
        lunghezza: 25
    },
    {
        varietà: 'corta',
        peso: 5,
        lunghezza: 10
    },
    {
        varietà: 'media',
        peso: 10,
        lunghezza: 20
    },
    {
        varietà: 'buona',
        peso: 25,
        lunghezza: 36
    },
    {
        varietà: 'amara',
        peso: 14,
        lunghezza: 48
    },
    {
        varietà: 'dolce',
        peso: 18,
        lunghezza: 37
    },
    {
        varietà: 'salata',
        peso: 4,
        lunghezza: 9
    },
    {
        varietà: 'niente male',
        peso: 26,
        lunghezza: 52
    },
    {
        varietà: 'cinese',
        peso: 4,
        lunghezza: 6
    },
    {
        varietà: 'italiana',
        peso: 18,
        lunghezza: 55
    },
];

for(var j = 0; j < zucchine.length; j++) {
    console.log(zucchine[j].peso);
}

var somma = 0;
for (var i = 0; i < zucchine.length; i++){
    somma += zucchine[i].peso;
}

console.log("la somma dei pesi è " + somma);