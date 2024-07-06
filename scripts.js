function calcular() {
    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    // Resultados para Obra Gris
    var resultadoObraGrisStandard = calcularObraGris(metrosCubiertos, metrosGaleria, metrosPergola);
    var resultadoObraGrisECAPStandard = calcularObraGrisConECAP(metrosCubiertos, metrosGaleria, metrosPergola);
    
    // Resultados para Llave en Mano
    var resultadoLlaveEnManoStandard = calcularLlaveEnMano(metrosCubiertos, metrosGaleria, metrosPergola);
    var resultadoLlaveEnManoECAPStandard = calcularLlaveEnManoConECAP(metrosCubiertos, metrosGaleria, metrosPergola);

    // Resultados para Premium
    var resultadoObraGrisPremium = calcularPremiumBase(metrosCubiertos, metrosGaleria, metrosPergola);
    var resultadoObraGrisECAPPremium = calcularPremiumConECAP(metrosCubiertos, metrosGaleria, metrosPergola);
    var resultadoLlaveEnManoPremium = calcularPremiumLlaveEnMano(metrosCubiertos, metrosGaleria, metrosPergola);
    var resultadoLlaveEnManoECAPPremium = calcularPremiumLlaveEnManoConECAP(metrosCubiertos, metrosGaleria, metrosPergola);

    // Mostrar resultados
    document.getElementById("resultadoObraGrisStandard").innerText = resultadoObraGrisStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisECAPStandard").innerText = resultadoObraGrisECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoStandard").innerText = resultadoLlaveEnManoStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoECAPStandard").innerText = resultadoLlaveEnManoECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisPremium").innerText = resultadoObraGrisPremium.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisECAPPremium").innerText = resultadoObraGrisECAPPremium.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoPremium").innerText = resultadoLlaveEnManoPremium.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoECAPPremium").innerText = resultadoLlaveEnManoECAPPremium.toLocaleString('es-ES');
}

// Funciones de cálculo
function calcularObraGris(cubierto, galeria, pergola) {
    return cubierto * 254100 + galeria * 184800 + pergola * 100000;
}

function calcularObraGrisConECAP(cubierto, galeria, pergola) {
    return calcularObraGris(cubierto, galeria, pergola) + cubierto * 50000;
}

function calcularLlaveEnMano(cubierto, galeria, pergola) {
    return cubierto * 429000 + galeria * 300300 + pergola * 181500;
}

function calcularLlaveEnManoConECAP(cubierto, galeria, pergola) {
    return calcularLlaveEnMano(cubierto, galeria, pergola) + cubierto * 50000;
}

function calcularPremiumBase(cubierto, galeria, pergola) {
    return cubierto * 308000 + galeria * 184800 + pergola * 100000;
}

function calcularPremiumConECAP(cubierto, galeria, pergola) {
    return calcularPremiumBase(cubierto, galeria, pergola) + cubierto * 50000;
}

function calcularPremiumLlaveEnMano(cubierto, galeria, pergola) {
    return cubierto * 506000 + galeria * 300300 + pergola * 181500;
}

function calcularPremiumLlaveEnManoConECAP(cubierto, galeria, pergola) {
    return calcularPremiumLlaveEnMano(cubierto, galeria, pergola) + cubierto * 50000;
}
