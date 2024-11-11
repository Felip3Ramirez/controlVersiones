export function gramosKilogramos() {
    var gramos = Number(prompt("Gramos a convertir"));
    var Kilogramos = gramos / 1000;
    console.log(gramos + " gramos es igual a "+Kilogramos+" kilogramos");
}
export function kilogramosLibras() {
    var kilogramos = Number(prompt("kilogramos a convertir"));
    var libras = kilogramos * 2.20462;
    console.log(kilogramos + " gramos es igual a "+libras+" libras");
}
export function librasGramos() {
    var libras = Number(prompt("libras a convertir"));
    var gramos = libras * 453.592;
    console.log(libras + " libras es igual a "+gramos+" gramos");
}