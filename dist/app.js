"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
let Rabokon = new classes_1.Deputy(100, 170, 'Rabokon', 'Valera', 48, true, 12350000);
let Vilkul = new classes_1.Deputy(90, 180, 'Vilkul', 'Oleksandr', 45, true, 3235000000);
let Vakarchuk = new classes_1.Deputy(78, 176, 'Vakarchuk', 'Slavko', 44, false, 0);
let Skotunyaka = new classes_1.Deputy(76, 172, 'Skotunyaka', 'TuTaka', 46, true, 500000);
let num = 1;
switch (num) {
    case 1:
        console.log('1. Verhovna Rada\n 2.Fraction\n 3. Deputy');
        let chooseStructure = 2;
        switch (chooseStructure) {
            case 1:
                console.log('1. Add Fraction\n 2.Delete Fraction\n 3. Get Fraction Briber Boss');
                break;
            case 2:
                console.log('1. Add Deputy\n 2.Delete Deputy\n 3. Find Briber Boss');
                break;
            case 3:
                console.log('1. Take Bribe');
                break;
            default:
                console.log("Don't have that param");
                break;
        }
        break;
    default:
        console.log("Don't have that param");
        break;
}
// Vakarchuk.getBribe(500000000);
// Vakarchuk.getBribe(500);
// Vilkul.getBribe(5);
//
// let pPp = new Fraction('SomeParty', []);
// let wer = new Fraction('Party', []);
//
// pPp.addDeputy(Vilkul);
// pPp.addDeputy(Rabokon);
// pPp.addDeputy(Skotunyaka);
// pPp.addDeputy(Vakarchuk);
//
// wer.addDeputy(Vilkul);
// wer.addDeputy(Rabokon);
// wer.addDeputy(Skotunyaka);
//
//
// let Rada = new VerhovnaZrada([pPp,wer]);
//
// Rada.getFractionBriberBoss(pPp);
