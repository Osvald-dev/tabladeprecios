function calcular() {
    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    var obraGrisStandard = metrosCubiertos * 350000 + metrosPergola * 105000 + metrosGaleria * 190000;
    var obraGrisPremium = metrosCubiertos * 420000 + metrosPergola * 105000 + metrosGaleria * 190000;

    var obraGrisECAPStandard = obraGrisStandard + metrosCubiertos * 70000;
    var obraGrisECAPPremium = obraGrisPremium + metrosCubiertos * 80000;

    var llaveEnManoStandard = metrosCubiertos * 650000 + metrosPergola * 190000 + metrosGaleria * 310000;
    var llaveEnManoPremium = metrosCubiertos * 750000 + metrosPergola * 190000 + metrosGaleria * 310000;

    var llaveEnManoECAPStandard = llaveEnManoStandard + metrosCubiertos * 50000;
    var llaveEnManoECAPPremium = llaveEnManoPremium + metrosCubiertos * 50000;

    var duplex = metrosCubiertos * 420000 + metrosPergola * 105000 + metrosGaleria * 190000;
    var duplexLlaveEnMano = metrosCubiertos * 750000 + metrosPergola * 190000 + metrosGaleria * 310000;

    var duplexECAP = duplex + metrosCubiertos * 80000;
    var duplexLlaveEnManoECAP = duplexLlaveEnMano + metrosCubiertos * 50000;

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
