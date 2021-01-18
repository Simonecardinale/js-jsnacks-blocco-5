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


var zucchinePiccole = [];
var zucchineGrandi = [];

for (var i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza <= 15){
        zucchinePiccole.push(zucchine[i].lunghezza);
    } else {
        zucchineGrandi.push(zucchine[i].lunghezza);
    }
};

console.log(zucchinePiccole);
console.log(zucchineGrandi);

var sumPiccole = peso(zucchinePiccole, sumPiccole);
var sumGrandi = peso (zucchineGrandi, sumGrandi)

// for (var j = 0; j < zucchinePiccole.length; j++) {
//     sumPiccole += zucchinePiccole[j];
// };

// for (var k= 0; k < zucchineGrandi.length; k++){
//     sumGrandi += zucchineGrandi[k];
// }

console.log(sumPiccole);
console.log(sumGrandi);


function peso(a, b){
    var b = 0;
    for(var j = 0; j < a.length; j++){
        b += a[j];
    }
    return b;
}