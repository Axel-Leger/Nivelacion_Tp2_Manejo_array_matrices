async function agregarPersona() {
    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    const nota = document.getElementById("nota").value


    await fetch("/agregar",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            nombre:nombre,
            edad:edad,
            nota:nota

        })
        });

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("nota").value = "";
}


async function mostrarDatos() {
    const res = await fetch("/mostrar");
    const data = await res.json()

    const resultado = document.getElementById("resultado")
    resultado.textContent = `
    Lista Original:
    ${JSON.stringify(data.original, null, 2)}

    Lista Ordenada:
    ${JSON.stringify(data.ordenado, null, 2)}
    `;
}