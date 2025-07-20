//syntax $('selector').action()
$('.a').click(function() {
$('h1').hide(1000)
})

$('.b').click(function() {
$('h1').show()
})

$('.c').click(function() {
$('h1').toggle()
})

$('.d').click(function() {
$('h1').slideUp()
})

$('.e').click(function() {
$('h1').slideDown()
})

$('.f').click(function() {
$('h1').slideToggle()
})

$('.g').click(function() {
$('h1').fadeOut(3000)
})

$('.h').click(function() {
$('h1').fadeIn(3000)
})

$('.i').click(function() {
$('h1').fadeToggle(3000)
})

$('.i').click(function() {
$('h1').fadeToggle(3000)
})

$('.j').click(function() {
$('h1').fadeTo(3000, 0.5)
})

$('.k').click(function() {
$('h1').remove()
})

$('.l').click(function() {
$('h1').empty()
})

$('.m').click(function() {
$('h1').prepend('<input>')
})

$('.n').click(function() {
$('h1').append('<input>')
})

$('.o').click(function() {
$('h1').before('<input>')
})

$('.p').click(function() {
$('h1').after('<input>')
})

$('.q').click(function(){
    $('h1').css({color: 'red', backgroundColor: 'yellow', fontSize: '50px'})
})

$('.r').click(function() {
    $('h1').animate({left : '100px', top: '100px'}, 8000)})

$('.s').click(function() {
    $('h1').stop()
})

$('.t').click(function() {
    $('h1').addClass('abc')
})

$('.u').click(function() {
    $('h1').removeClass('abc')
})

$('.v').click(function() {
    $('h1').toggleClass('abc')
})

$('.w').click(function() {
    $('h1').html('<mark>New Content</mark>')
})

$('.x').click(function() {
    $('h1').text('<mark>New Content</mark>')
})

$('.y').click(function() {
    $('#input').val('Changed')
})

$('.z').dblclick(function() {
    alert('Double Clicked!')
})