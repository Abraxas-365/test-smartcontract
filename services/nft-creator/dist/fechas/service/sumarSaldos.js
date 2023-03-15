"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarSaldos = void 0;
function sumarSaldos() {
    const fechas = this.fechasRepo.getFechas();
    console.log(fechas);
    let sum = 0;
    for (let i = 0; i < fechas.length; i++) {
        if (typeof fechas[i].saldoAntiguo === "number") {
            sum = sum + fechas[i].saldoAntiguo;
        }
        if (typeof fechas[i].saldoNuevo === "number") {
            sum = sum + fechas[i].saldoNuevo;
        }
    }
    return sum;
}
exports.sumarSaldos = sumarSaldos;
//# sourceMappingURL=sumarSaldos.js.map