"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = require("./Human");
class Deputy extends Human_1.Human {
    constructor(weight, height, lastName, firstName, age, bribe_taker, bribeValue) {
        super(weight, height);
        this.getBribe = (bribe) => {
            if (!this.bribe_taker && bribe) {
                if (!this.bribe_taker && bribe > 1000000) {
                    console.log('Hmmm...Let me think, let me think...');
                }
                else
                    console.log("NO. WHO DO YOU THINK I AM?!!!");
            }
            else
                console.log("OOOOOOH! With big pleasure!!!");
        };
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.bribe_taker = bribe_taker;
        this.bribeValue = bribeValue;
    }
}
exports.Deputy = Deputy;
