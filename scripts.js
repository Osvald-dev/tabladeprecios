function calcular() {
    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    var obraGrisStandard = metrosCubiertos * 254100 * 1.05 + metrosPergola * 100000 * 1.05 + metrosGaleria * 184800 * 1.05;
    var obraGrisPremium = metrosCubiertos * 308000 * 1.05 + metrosPergola * 100000 * 1.05 + metrosGaleria * 184800 * 1.05;

    var obraGrisECAPStandard = obraGrisStandard + metrosCubiertos * 50000 * 1.05;
    var obraGrisECAPPremium = obraGrisPremium + metrosCubiertos * 50000 * 1.05;

    var llaveEnManoStandard = metrosCubiertos * 429000 * 1.05 + metrosPergola * 181500 * 1.05 + metrosGaleria * 300300 * 1.05;
    var llaveEnManoPremium = metrosCubiertos * 506000 * 1.05 + metrosPergola * 181500 * 1.05 + metrosGaleria * 300300 * 1.05;

    var llaveEnManoECAPStandard = llaveEnManoStandard + metrosCubiertos * 50000 * 1.05;
    var llaveEnManoECAPPremium = llaveEnManoPremium + metrosCubiertos * 50000 * 1.05;

    document.getElementById("resultadoObraGrisStandard").innerText = obraGrisStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisPremium").innerText = obraGrisPremium.toLocaleString('es-ES');

    document.getElementById("resultadoObraGrisECAPStandard").innerText = obraGrisECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisECAPPremium").innerText = obraGrisECAPPremium.toLocaleString('es-ES');

    document.getElementById("resultadoLlaveEnManoStandard").innerText = llaveEnManoStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoPremium").innerText = llaveEnManoPremium.toLocaleString('es-ES');

    document.getElementById("resultadoLlaveEnManoECAPStandard").innerText = llaveEnManoECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoECAPPremium").innerText = llaveEnManoECAPPremium.toLocaleString('es-ES');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
}
