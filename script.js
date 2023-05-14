const rowSquares = [1,2,3,4];

rowSquares.forEach(function() {
    $('#mainContainer').append(
        `<div class="row"><div class="squares"></div>
        <div class="squares"></div>
        <div class="squares"></div>
        <div class="squares"></div><div class="row">`
    );
});


$('#mainContainer').on('click', '.squares', function(){
    let toggle = $(this);
    $(toggle).toggleClass('lightSquares')
});