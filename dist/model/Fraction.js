"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fraction {
    constructor(fractionName, deputyList) {
        this.deputyList = [];
        this.fractionName = fractionName;
        this.deputyList = deputyList;
    }
    addDeputy(deputy) {
        this.deputyList.push(deputy);
        console.log(`Deputy ${deputy.lastName} was added to fraction`);
    }
    ;
    deleteDeputy(dep) {
        let arr = this.deputyList;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === dep) {
                arr.splice(i, 1);
                console.log(`${arr[i]} was deleted`);
            }
        }
    }
    ;
    deleteDeputyBribeTaker() {
        let arr = this.deputyList;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].bribe_taker) {
                arr.splice(i, 1);
                console.log(`${arr[i]}`);
            }
        }
        console.log(` these briber-takers was deleted from fraction`);
    }
    ;
    findBriberBoss() {
        let [briberBoss] = this.deputyList.sort((previousDep, currentDep) => {
            return currentDep.bribeValue - previousDep.bribeValue;
        });
        console.log(`${briberBoss.lastName} is the BIGGEST briber-taker`);
    }
    ;
    showAllDeputies() {
        this.deputyList.forEach(dep => {
            console.log(`${dep} \n`);
        });
    }
    deleteAllDeputies() {
        this.deputyList = [];
        console.log('Fraction cleaned');
    }
    sumOfBriber() {
        let sum = this.deputyList.reduce((prev, cur) => {
            return prev + cur.bribeValue;
        }, 0);
        console.log(sum);
    }
}
exports.Fraction = Fraction;
