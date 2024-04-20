$(document).ready(() => {
    getPokemon();
    getDataCartasTipo();
    
});

const getPokemon = () =>  {
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

    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1500', {'Cache-Control': 'max-age=0'}).then(function (response) {
        console.log(response.data.results);

        let data = response.data.results;
        let listaPokemon = [];

        data.forEach(pokemon => {
            listaPokemon.push(pokemon.name)
        });

        autocomplete(document.getElementById("nombre_carta"), listaPokemon);
        $.unblockUI();
    });
    
}

const buscarPokemon = () => {
    let pokemon = $("#nombre_carta").val();

    window.location.href = "./listaPokemon.html?tipo-busqueda=name&valor=" + pokemon;
}


const getDataCartasTipo = () =>  {
    for (const subtipo of subtipos) {
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

        axios.get(urlApi + 'cards?q=subtypes:' + subtipo, {'Cache-Control': 'max-age=0'}).then(function (response) {
            console.log(response);

            let data = response.data;
            $("#" + subtipo).append(data.totalCount);
            $.unblockUI();
        });
    }
}
