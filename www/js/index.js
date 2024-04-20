$(document).ready(() => {
    getDataCartasTipo();
});

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
