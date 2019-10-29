"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerhovnaZrada {
    constructor(fracList) {
        this.fracList = fracList;
    }
    addFraction(frac) {
        this.fracList.push(frac);
        console.log(`${frac.fractionName} was added`);
    }
    deleteFraction(name) {
        let arr = this.fracList;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].fractionName === name) {
                arr.slice(i, 1);
            }
        }
    }
    showFractionByName(name) {
        let fracByName = this.fracList.find(fracName => {
            if (fracName.fractionName === name) {
                return fracName;
            }
        });
        console.log(fracByName);
    }
    showAllFractions() {
        let fractions = this.fracList.forEach(frack => console.log(frack));
    }
    showAndDeleteAllFractionBribeTakers(fraction) {
        fraction.deleteDeputyBribeTaker();
    }
    getFractionBriberBoss(fraction) {
        fraction.findBriberBoss();
    }
}
exports.VerhovnaZrada = VerhovnaZrada;
