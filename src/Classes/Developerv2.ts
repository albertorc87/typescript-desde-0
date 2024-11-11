import { Employee } from "./Employee";


export class Developer extends Employee {
    constructor(
        protected name: string,
        protected salary: number,
        private knownProgrammingLanguaes: string[]
    ) {
        super(name, salary)
    }
}