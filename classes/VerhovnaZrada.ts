import {Fraction} from "./Fraction";
import {Deputy} from "./Deputy";

export class VerhovnaZrada {
    fracList: Array<Fraction>;


    constructor(fracList: Array<Fraction>) {
        this.fracList = fracList;
    }

    addFraction(frac:Fraction) {
        this.fracList.push(frac);
        console.log(`${frac.fractionName} was added`);
    }

    deleteFraction (name: string) {
        let arr = this.fracList;
        for ( let i = 0; i<arr.length; i++) {
            if(arr[i].fractionName === name) {
                arr.slice(i,1);
            }
        }
    }

    showFractionByName(name:string) {
        let fracByName = this.fracList.find(fracName=> {
            if (fracName.fractionName === name) {
                return fracName;
            }
        })
        console.log(fracByName);
    }

    showAllFractions () {
        let fractions = this.fracList.forEach(frack => console.log(frack));
    }

    showAndDeleteAllFractionBribeTakers (fraction:Fraction){
        fraction.deleteDeputyBribeTaker();
    }

    getFractionBriberBoss (fraction:Fraction) {
        fraction.findBriberBoss();
    }

    // getRadaBriberBoss () {
    //
    //     let Rada = this.fracList;
    //     let openArrays = [].concat(...Rada);
    //     let [briberBoss] =  openArrays.sort((previousDep:Deputy, currentDep:Deputy) => {
    //         return currentDep.bribeValue - previousDep.bribeValue;
    //     });
    //     console.log(`${briberBoss.lastName} is the BIGGEST briber-taker`);
    // }
}