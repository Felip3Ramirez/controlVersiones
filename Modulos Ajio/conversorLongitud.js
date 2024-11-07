

export function metrosKilometros() {
    var metros = Number(prompt("Metros a convertir"));
    var Kilometros = metros / 1000;
    alert(metros + " metros es igual a "+Kilometros+" kilometros");
}
export function kilometrosMillas() {
    var kilometros = Number(prompt("Kilometros a convertir"));
    var millas = kilometros * 0.621371;
    console.log(kilometros + " kilometros es igual a "+millas+" millas");
}
export function millasMetros() {
    var millas = Number(prompt(" millas a convertir"));
    var metros = millas * 1609.34;
    console.log(millas + " millas es igual a "+metros+" metros");
}