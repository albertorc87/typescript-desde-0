// Tipos primitivos
var variableNumero = 123;
var variableTexto = 'hola mundo';
var variableBooleano = true;
var variableUndefined;
var variableNull;
var variableAny = 'hola';
console.log(variableNumero);
console.log(variableTexto);
console.log(variableBooleano);
console.log(variableUndefined);
console.log(variableAny);
// const variableNumero2: number = 'test'
// Tipado de arrays
var mi_array_numero = [1, 2, 5];
var mi_array_texto = ['a', 'b', 'c'];
var mi_array_valores = [1, 'dato', 5];
console.log(mi_array_numero);
console.log(mi_array_texto);
console.log(mi_array_valores);
// Tipado múltiple
var id;
console.log(id);
var userId = 123;
userId = "c79c56f3-f252-46d2-9182-719588fdd530"; // Válido, porque puede ser `number` o `string`
console.log(userId);
var coche = {
    id: 1,
    name: 'Fiat',
    model: 'Bravo',
    year: 2011
};
console.log(coche);
var currentUserRole = 'user'; // Solo puede ser 'admin', 'user' o 'guest'
console.log(currentUserRole);
// Enums
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum[UserRoleEnum["Admin"] = 0] = "Admin";
    UserRoleEnum[UserRoleEnum["User"] = 1] = "User";
    UserRoleEnum[UserRoleEnum["Guest"] = 2] = "Guest"; // 2
})(UserRoleEnum || (UserRoleEnum = {}));
var currentUserRoleEnum = UserRoleEnum.Admin;
console.log(currentUserRoleEnum); // Salida: 0
var ContactType;
(function (ContactType) {
    ContactType["Personal"] = "personal";
    ContactType["Work"] = "work";
})(ContactType || (ContactType = {}));
var type_contact = ContactType.Personal;
console.log(type_contact); // Salida: 'personal'
var moto = {
    id: 1,
    name: 'Yamaha',
    model: 'TRACER 7',
    year: 2023
};
console.log(moto);
