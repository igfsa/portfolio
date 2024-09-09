$(document).ready(function(){

    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').hide();

        $('#l1').css({color: 'blue'})
        $('#l2').css({color: 'gray'})
        $('#l3').css({color: 'gray'})
        $('#l4').css({color: 'gray'})
        $('#l5').css({color: 'gray'})
    })

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').hide();

        $('#l1').css({color: 'gray'})
        $('#l2').css({color: 'blue'})
        $('#l3').css({color: 'gray'})
        $('#l4').css({color: 'gray'})
        $('#l5').css({color: 'gray'})
    })

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
        $('#i5').hide();
        
        $('#l1').css({color: 'gray'})
        $('#l2').css({color: 'gray'})
        $('#l3').css({color: 'blue'})
        $('#l4').css({color: 'gray'})
        $('#l5').css({color: 'gray'})
    })

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
        $('#i5').hide();

        $('#l1').css({color: 'gray'})
        $('#l2').css({color: 'gray'})
        $('#l3').css({color: 'gray'})
        $('#l4').css({color: 'blue'})
        $('#l5').css({color: 'gray'})
    })

    $('#l5').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
        $('#i5').show();

        $('#l1').css({color: 'gray'})
        $('#l2').css({color: 'gray'})
        $('#l3').css({color: 'gray'})
        $('#l4').css({color: 'gray'})
        $('#l5').css({color: 'blue'})
    })

});