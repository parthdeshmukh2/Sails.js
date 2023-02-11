$(document).ready(()=>{
    $('p').click(()=>{
    console.log("Clicked");
    $(this).hide();
})
$('#first').click();

$('p').dblclick(()=>{
    console.log("Double Clicked");
    $(this).hide();
});

$('p').mouseenter(()=>{
    console.log("Mouse Entered");
    $(this).hide();
})

// $('#para').hide(1000, ()=>{
//     console.log("Hidden");
// })
// $('#para').show(1000, ()=>{
//     console.log("Show");
// })


$('#btn').click(()=>{
    $('#para').toggle(1000);
})

$('#btn').css('background-color', 'red')
$('#btn').css('color', 'white');
$('#btn').css('border', 'none')


$('#para').animate({opacity:'0.3'}, 4000);
$('#para').animate({opacity:'0.9'}, 3000);
$('#para').animate({width:'150px'}, 1500);

$('#btn2').click(()=>{
    $('#inp1').val("The Value is set Successfully");
   console.log("Changed")
})

let value = document.getElementById('text').value

$('#btn3').click(()=>{
    let value = $('#text').val();
    console.log(value);
})

})
