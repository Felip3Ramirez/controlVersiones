export function gramosKilogramos() {
    var gramos = Number(prompt("Gramos a convertir"));
    var Kilogramos = gramos / 1000;
    alert(gramos + " gramos es igual a "+Kilogramos+" kilogramos");
}
export function kilogramosLibras() {
    var kilogramos = Number(prompt("kilogramos a convertir"));
    var libras = kilogramos * 2.20462;
    alert(kilogramos + " gramos es igual a "+libras+" libras");
}
export function librasGramos() {
    var libras = Number(prompt("libras a convertir"));
    var gramos = libras * 453.592;
    alert(libras + " libras es igual a "+gramos+" gramos");
}