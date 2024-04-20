$(document).ready(() => {
    getDataEdicion();
});

const getDataEdicion = () =>  {
    $.blockUI({
        message: '<i class="fa fa-solid fa-spinner fa-spin-pulse fa-2x"></i>',
        baseZ: 5000,
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    });

    axios.get(urlApi + 'sets', {'Cache-Control': 'max-age=0'}).then(function (response) {
        console.log(response);

        let data = response.data;

        data.data.forEach(set => {
            $("#tabla_sets").append("" +
                "<tr class='has-text-centered'>" +
                "<td><a href='./listaPokemon.html?tipo-busqueda=set.id&valor=" + set.id + "'>" + set.name + "</a></td>" +
                "<td><a href='./listaPokemon.html?tipo-busqueda=set.id&valor=" + set.id + "'><img src='" + set.images.logo + "' style='height: 100px;'></a></td>" +
                "</tr>");
        });

        $.unblockUI();
    });
}
