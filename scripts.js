function calcular() {
    var metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    var metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    var metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;

    var obraGris = metrosCubiertos * 400000 + metrosPergola * 120000 + metrosGaleria * 250000;
    var llaveEnMano = metrosCubiertos * 700000 + metrosPergola * 250000 + metrosGaleria * 400000;

    var duplex = metrosCubiertos * 420000 + metrosPergola * 105000 + metrosGaleria * 190000;
    var duplexLlaveEnMano = metrosCubiertos * 750000 + metrosPergola * 190000 + metrosGaleria * 310000;

    document.getElementById("resultadoObraGris").innerText = obraGris.toLocaleString('es-ES');
    document.getElementById("resultadoLlaveEnMano").innerText = llaveEnMano.toLocaleString('es-ES');
    document.getElementById("resultadoDuplex").innerText = duplex.toLocaleString('es-ES');
    document.getElementById("resultadoDuplexLlaveEnMano").innerText = duplexLlaveEnMano.toLocaleString('es-ES');
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
}
