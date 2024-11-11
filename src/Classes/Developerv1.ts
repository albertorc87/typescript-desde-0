import { IEmployee } from "./IEmployee";


export class Developer implements IEmployee {
    name: string = '';
    constructor(name: string) {}
}