import { metrosKilometros,kilometrosMillas,millasMetros } from "./conversorLongitud.js";
import { gramosKilogramos , kilogramosLibras, librasGramos } from "./conversorPeso.js";
var salir = true;

while (salir) {
    var opc =Number(prompt("1.Conversor de logitud\n2.Conversor de peso\n3.salir"))
    switch (opc) {
        case 1:
            while (salir) {
            opc = Number(prompt("1.Metros a Kilometros\n2.Kilometros a Millas\n3.Millas a Metros\n4.salir"))
            switch (opc) {
                case 1:
                    metrosKilometros()
                    break;
                case 2:
                    kilometrosMillas()
                    break;
                case 3:
                    millasMetros()
                    break
                case 4:
                    salir = false
                    break;
            
                default:
                    console.log("Opcion invalida");
                    break;
            }
        }
        salir=true;
            break;
        case 2:
            opc = Number(prompt("1.Gramos a Kilogramos\n2.kilogramos a Gramos\n3.Libras a Gramos"))
            switch (opc) {
                case 1:
                    gramosKilogramos()
                    break;
                case 2:
                    kilogramosLibras()
                    break;
                case 3:
                    librasGramos()
                    break
            
                default:
                    console.log("Opcion invalida");
                    break;
            }
            break;
        case 3:
            salir=false;
            break; 
        default:
            alert("Invalido");
            
            break;          
    }

}