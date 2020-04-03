function onlyNums(e) {
    const code = window.event ? e.which : e.ketCode;
    return !(code < 48 || code > 57);
}

function begin() {
    const vOne = document.getElementById('valueOne').value;
    const vTwo = document.getElementById('valueTwo').value;
    //const options = document.getElementById('opt').options

    const dates = [

        {
            code: "32423",
            name: "Juan Roa"
        },
        {
            code: "98734",
            name: "Maria Rojas"
        },
        {
            code: "8927423",
            name: "Lola Hernandez"
        }
]

    dates.forEach((record)=>{
        alert(`Codigo=${record.code} Name=${record.name}`)
    })

}

$(document).ready(function () {
    $('#btnHide').click( () =>{
       $('#layout').fadeOut('slow');
    });

    $('#btnView').click( () =>{
       $('#layout').fadeIn('slow');
    });
})

