import { ICeo } from "./ceoEntity";
import {v4} from 'uuid';

export class CeoValue implements ICeo{
    id : string;
    firstname : string;
    lastname : string;
    age : number;
    business : string[];
    fortune : number;

    constructor({firstname, lastname,age,business,fortune}:{firstname : string,lastname : string,age : number,business : string[],fortune : number}){
        this.id = v4();
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.business = business;
        this.fortune = fortune
    }

}