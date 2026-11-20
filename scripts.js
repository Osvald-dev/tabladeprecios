// ===============================
// PRECIOS OFICIALES SMARTPANEL
// ===============================

const precios = {

    woodframe: {
        obraGris: {
            cubiertos: 583000,
            galeria: 180200,
            pergola: 127200
        },
        llave: {
            cubiertos: 1007000,
            galeria: 371000,
            pergola: 212000
        }
    },

    duplex: {
        obraGris: {
            cubiertos: 901000,
            galeria: 477000,
            pergola: 371000
        },
        llave: {
            cubiertos: 1272000,
            galeria: 530000,
            pergola: 371000
        }
    },

    prefabricado: {
        obraGris: {
            cubiertos: 477000,
            galeria: 180200,
            pergola: 127200
        },
        llave: {
            cubiertos: 901000,
            galeria: 371000,
            pergola: 212000
        }
    }

};


// ===============================
// CALCULO
// ===============================

function calcular() {

    const metrosCubiertos = parseFloat(document.getElementById("metrosCubiertos").value) || 0;
    const metrosGaleria = parseFloat(document.getElementById("metrosGaleria").value) || 0;
    const metrosPergola = parseFloat(document.getElementById("metrosPergola").value) || 0;


    // ===== WOODFRAME 2x4 =====

    const obraGris =
        metrosCubiertos * precios.woodframe.obraGris.cubiertos +
        metrosGaleria * precios.woodframe.obraGris.galeria +
        metrosPergola * precios.woodframe.obraGris.pergola;

    const llaveEnMano =
        metrosCubiertos * precios.woodframe.llave.cubiertos +
        metrosGaleria * precios.woodframe.llave.galeria +
        metrosPergola * precios.woodframe.llave.pergola;


    // ===== DUPLEX =====

    const duplex =
        metrosCubiertos * precios.duplex.obraGris.cubiertos +
        metrosGaleria * precios.duplex.obraGris.galeria +
        metrosPergola * precios.duplex.obraGris.pergola;

    const duplexLlaveEnMano =
        metrosCubiertos * precios.duplex.llave.cubiertos +
        metrosGaleria * precios.duplex.llave.galeria +
        metrosPergola * precios.duplex.llave.pergola;


    // ===== PREFABRICADO 1x3 =====

    const prefabricadoGris =
        metrosCubiertos * precios.prefabricado.obraGris.cubiertos +
        metrosGaleria * precios.prefabricado.obraGris.galeria +
        metrosPergola * precios.prefabricado.obraGris.pergola;

    const prefabricadoLlave =
        metrosCubiertos * precios.prefabricado.llave.cubiertos +
        metrosGaleria * precios.prefabricado.llave.galeria +
        metrosPergola * precios.prefabricado.llave.pergola;


    // ===============================
    // MOSTRAR RESULTADOS
    // ===============================

    document.getElementById("resultadoObraGris").innerText = obraGris.toLocaleString('es-AR');
    document.getElementById("resultadoLlaveEnMano").innerText = llaveEnMano.toLocaleString('es-AR');

    document.getElementById("resultadoDuplex").innerText = duplex.toLocaleString('es-AR');
    document.getElementById("resultadoDuplexLlaveEnMano").innerText = duplexLlaveEnMano.toLocaleString('es-AR');

    document.getElementById("resultadoPrefabricadoGris").innerText = prefabricadoGris.toLocaleString('es-AR');
    document.getElementById("resultadoPrefabricadoLlave").innerText = prefabricadoLlave.toLocaleString('es-AR');
}


// ===============================
// MODO OSCURO
// ===============================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
}