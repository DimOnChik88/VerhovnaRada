import {Human} from "./Human";

export  class Deputy extends Human{
    lastName: string;
    firstName: string;
    age: number;
    bribe_taker?: boolean;
    bribeValue: number;

    constructor(weight: number, height: number, lastName: string, firstName: string,
                age: number, bribe_taker: boolean, bribeValue: number) {

        super(weight, height);
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.bribe_taker = bribe_taker;
        this.bribeValue = bribeValue;
    }



    getBribe = (bribe:number) => {

        if (!this.bribe_taker && bribe) {
            if (!this.bribe_taker && bribe > 1000000) {
                console.log('Hmmm...Let me think, let me think...');
            }
            else console.log("NO. WHO DO YOU THINK I AM?!!!")
        }

        else  console.log("OOOOOOH! With big pleasure!!!")
    }
}