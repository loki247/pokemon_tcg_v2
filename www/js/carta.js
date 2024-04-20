$(document).ready(() => {
    var urlParams = new URLSearchParams(window.location.search);
    let idCarta = urlParams.get('id');
    getCarta(idCarta);
});

const getCarta = (id) =>  {
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

    axios.get(urlApi + 'cards/' + id, {'Cache-Control': 'max-age=0'}).then(function (response) {
        console.log(response);

        let carta = response.data.data;

        $("#nombre_carta").html(carta.name);
        $("#img_carta").attr("src", carta.images.large);
        $("#supertype").html(carta.supertype);
        $("#hp").html(carta.hp);
        $("#subtype").html(carta.subtypes[0]);
        $("#type").html(carta.types[0]);
        $("#evolves_from").html(carta.evolvesFrom != null ? carta.evolvesFrom : "-");

        if (carta.evolvesTo != null){
            carta.evolvesTo.forEach(evolution => {
                $("#evolves_to").append("<li>" + evolution + "</li>")
            });
        }

        $("#number").html(carta.number + "/" + carta.set.printedTotal);
        $("#rarity").html(carta.rarity);

        if (carta.tcgplayer.prices.normal != null){
            $("#price_tcg_player").append("<li>Normal: US$ " + carta.tcgplayer.prices.normal.market + "</li>")
        }

        if (carta.tcgplayer.prices.holofoil != null){
            $("#price_tcg_player").append("<li>Foil: US$ " + carta.tcgplayer.prices.holofoil.market + "</li>")
        }

        if (carta.tcgplayer.prices.reverseHolofoil != null){
            $("#price_tcg_player").append("<li>Reverse: US$ " + carta.tcgplayer.prices.reverseHolofoil.market + "</li>")
        }

        $("#price_tcg_player").append("<li><a href='" + carta.tcgplayer.url + "'>Fuente: TCG Player</a></li>")

        $.unblockUI();
    });
}
