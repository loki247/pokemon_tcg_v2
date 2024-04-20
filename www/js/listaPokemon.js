$(document).ready(() => {
    var urlParams = new URLSearchParams(window.location.search);
    let data = {tipo: urlParams.get('tipo-busqueda'), valor: urlParams.get('valor')}

    getCartas(data);
});

const getCartas = (data) =>  {
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

    axios.get(urlApi + 'cards?q=' + data.tipo + ":" + data.valor + "&orderBy=number", {'Cache-Control': 'max-age=0'}).then(function (response) {
        console.log(response);

        let data = response.data.data;

        data.forEach(carta => {
            $("#tabla_cartas").append("" +
                "<tr class='has-text-centered'>" +
                "<td><a href='#'>" + carta.name + "</a></td>" +
                "<td><a href='./carta.html?id=" + carta.id + "'><img src='" + carta.images.small + "' style='height: 150px;'></a></td>" +
                "</tr>");
        });

        $.unblockUI();
    });
}
