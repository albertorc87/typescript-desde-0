import { Employee } from "./Employee";


export class Developer<T> extends Employee {
     
    constructor(
        protected name: string,
        protected salary: number,
        private knownProgrammingLanguaes: string[],
        private typeDev: T
    ) {
        super(name, salary)
    }
}


type typeDevs = 'team lead' | 'senior' | 'junior'
const dev = new Developer<typeDevs>('Alber', 1000, ['php', 'node.js', 'python'], 'senior')