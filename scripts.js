function calcular() {
    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    var obraGrisStandard = metrosCubiertos * 266805 + metrosPergola * 105000 + metrosGaleria * 194040;
    var obraGrisPremium = metrosCubiertos * 323400 + metrosPergola * 105000 + metrosGaleria * 194040;

    var obraGrisECAPStandard = obraGrisStandard + metrosCubiertos * 52500;
    var obraGrisECAPPremium = obraGrisPremium + metrosCubiertos * 52500;

    var llaveEnManoStandard = metrosCubiertos * 450450 + metrosPergola * 190575 + metrosGaleria * 315315;
    var llaveEnManoPremium = metrosCubiertos * 531300 + metrosPergola * 190575 + metrosGaleria * 315315;

    var llaveEnManoECAPStandard = llaveEnManoStandard + metrosCubiertos * 52500;
    var llaveEnManoECAPPremium = llaveEnManoPremium + metrosCubiertos * 52500;

    var duplex = metrosCubiertos * 400000 + metrosPergola * 105000 + metrosGaleria * 194040;
    var duplexLlaveEnMano = metrosCubiertos * 650000 + metrosPergola * 190575 + metrosGaleria * 315315;

    var duplexECAP = duplex + metrosCubiertos * 52500;
    var duplexLlaveEnManoECAP = duplexLlaveEnMano + metrosCubiertos * 52500;

    document.getElementById("resultadoObraGrisStandard").innerText = obraGrisStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisPremium").innerText = obraGrisPremium.toLocaleString('es-ES');

    document.getElementById("resultadoObraGrisECAPStandard").innerText = obraGrisECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoObraGrisECAPPremium").innerText = obraGrisECAPPremium.toLocaleString('es-ES');

    document.getElementById("resultadoLlaveEnManoStandard").innerText = llaveEnManoStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoPremium").innerText = llaveEnManoPremium.toLocaleString('es-ES');

    document.getElementById("resultadoLlaveEnManoECAPStandard").innerText = llaveEnManoECAPStandard.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnManoECAPPremium").innerText = llaveEnManoECAPPremium.toLocaleString('es-ES');

    document.getElementById("resultadoDuplex").innerText = duplex.toLocaleString('es-ES');
    document.getElementById("resultadoDuplexLlaveEnMano").innerText = duplexLlaveEnMano.toLocaleString('es-ES');

    document.getElementById("resultadoDuplexECAP").innerText = duplexECAP.toLocaleString('es-ES');
    document.getElementById("resultadoDuplexLlaveEnManoECAP").innerText = duplexLlaveEnManoECAP.toLocaleString('es-ES');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
}
