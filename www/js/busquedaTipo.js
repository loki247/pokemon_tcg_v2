$(document).ready(() => {
    tipos.forEach(tipo => {
        $("#tabla_tipos").append("" +
            "<tr class='has-text-centered'>" +
            "<td><a href='./listaPokemon.html?tipo-busqueda=types&valor=" + tipo.name_ing + "'>" + tipo.name + "</a></td>" +
            "<td><a href='./listaPokemon.html?tipo-busqueda=types&valor=" + tipo.name_ing + "'><img src='" + tipo.img + "' style='height: 50px;'></a></td>" +
            "</tr>");
    });
});
