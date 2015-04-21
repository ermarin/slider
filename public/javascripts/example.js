// Este codigo funcionaba para mostrar las imagenes
$('#contminImgs').click(function(event) {
    var img1 = $('img')[0];
    var imagenes = $('.image').find(img1);
    var text = [];
    for(var i = 0; i < imagenes.length; i++) {
        text.push(imagenes[i].src);
    }
    if (text == event.target.src) {
        $('div.imageLarge').css('display', 'none');
        $('.imageLarge').first().css('display', 'block');
    } else {
        $('.imageLarge').each(function() {
            var domElement = $(this);
            if(domElement.context.id == event.target.id) {
                $('div.imageLarge').css('display', 'none');
                $(this).css('display', 'block');
            }
        });
    }
});


/* OTROS "EJEMPLOS" */

/*$(document).ready(function() {
    var images = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    var loadImages = function() {
        $('.load').css('display', 'block');
        $.getJSON(images, {
            format: 'json'
        }).done(function(data) {
            console.log(data.items);
            $.each( data.items, function( i, item ) {
                $( '<img>' ).attr( 'src', item.media.m ).appendTo( '#cont' );
                $('<div class="titles">').attr('title', item.title).html(item.title).appendTo('#title');
                if ( i === 0 ) {
                    return false;
                }
            });
            $('.load').css('display', 'none');
        });
    };
    var prevImages = function() {
        $('.load').css('display', 'block');
        $.getJSON(images, {
            format: 'json'
        }).done(function(data) {
            $.each( data.items, function( i, item ) {
                $( '<img>' ).attr( 'src', item.media.m ).appendTo( '#cont' );
                $('<div class="titles">').attr('title', item.title).html(item.title).appendTo('#title');
                if ( i === 0 ) {
                    return -1;
                }
            });
            $('.load').css('display', 'none');
        });
    }
    $('.left').click(function() {
        prevImages();
        /*var $imgDisplay = $('img');
        $imgDisplay = $imgDisplay.prev();
        $('img').css('display', 'none');
        $imgDisplay.css('display', 'block');
    });
    $('.right').click(function() {
        $('img').css('display', 'none');
        $('.titles').remove();
        loadImages();
    });
    loadImages();
});
*/



// SERVER WITH NODE
/*var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hola');
    res.end();
}).listen(8888);
console.log('Iniciando...')*/



/* ANIMACION CSS EN COMPASS
.load {
    @include animation(mymove 0.5s 1);
}
@include keyframes(mymove) {
    100% {
        @include transform(rotate(360deg));
    }
}


.load {
    width:12px;
    height: 120px;
    margin-top: 10% !important;
    margin-left: 25% !important;
    position: absolute;
    border: 1px solid darkslategrey;
    @include background-image(linear-gradient(white, darkslategrey, white));
    @include border-radius(100px);
    @include animation(mymove 0.5s infinite);
}
img {
    width: 500px !important;
    height: 300px !important;
    position: relative;
    cursor: pointer;
}
@include keyframes(mymove) {
    100% {
        @include transform(rotate(360deg));
    }
}