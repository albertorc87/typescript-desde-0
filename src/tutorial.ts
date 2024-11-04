
// Tipos primitivos
const variableNumero: number = 123
const variableTexto: string = 'hola mundo'
const variableBooleano: boolean = true
let variableUndefined: undefined
let variableNull: null
const variableAny: any = 'hola'

console.log(variableNumero);
console.log(variableTexto);
console.log(variableBooleano);
console.log(variableUndefined);
console.log(variableAny);


// const variableNumero2: number = 'test'

// Tipado de arrays
const mi_array_numero: number[] = [1, 2, 5]
const mi_array_texto: string[] = ['a', 'b', 'c']
const mi_array_valores: any[] = [1, 'dato', 5]

console.log(mi_array_numero);
console.log(mi_array_texto);
console.log(mi_array_valores);

// Tipado múltiple
let id: number | null | undefined;
console.log(id);

// Type
type ID = number | string;
let userId: ID = 123;
userId = "c79c56f3-f252-46d2-9182-719588fdd530"; // Válido, porque puede ser `number` o `string`
console.log(userId);

// Type en objetos

type Car = {
    id: number;
    name: string;
    model: string;
    year?: number;
}

const coche: Car = {
    id: 1,
    name: 'Fiat',
    model: 'Bravo',
    year: 2011
}
console.log(coche);

// Interfaces

// Tipos literales

type UserRole = 'admin' | 'user' | 'guest';
const currentUserRole: UserRole = 'user'; // Solo puede ser 'admin', 'user' o 'guest'
console.log(currentUserRole);

// Enums

enum UserRoleEnum {
    Admin,    // 0
    User,     // 1
    Guest     // 2
}

const currentUserRoleEnum: UserRoleEnum = UserRoleEnum.Admin;
console.log(currentUserRoleEnum); // Salida: 0

enum ContactType {
    Personal = 'personal',
    Work = 'work',
}

const type_contact: ContactType = ContactType.Personal;
console.log(type_contact); // Salida: 'personal'

// Interfaces
interface Motorcycle {
    id: number;
    name: string;
    model: string;
    year?: number;
}

const moto: Motorcycle = {
    id: 1,
    name: 'Yamaha',
    model: 'TRACER 7',
    year: 2023
}
console.log(moto);