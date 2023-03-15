"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordernarFechas = void 0;
function ordernarFechas(orden) {
    const fechas = this.fechasRepo.getFechas();
    const sortedFechas = fechas.slice().sort((a, b) => b.fecha - a.fecha);
    if (orden === 'decendente') {
        return sortedFechas;
    }
    return sortedFechas.reverse();
}
exports.ordernarFechas = ordernarFechas;
//# sourceMappingURL=ordenarFechas.js.map