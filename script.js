$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()

        const valorinput = $('#campo-colocar-item').val()
        const novatarefa = $(`<li>${valorinput}</li>`)
        
        $(novatarefa).appendTo('ul')
        $('#campo-colocar-item').val('')
        
    })

    $('ul').on('click','li', function(e){
        e.preventDefault()
        $(this).toggleClass('riscartarefa')
        
    })

    

})