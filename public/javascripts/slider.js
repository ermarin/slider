$( document ).ready(function() {
    function loadImages() {
        $.ajax({
            method: 'GET',
            url: 'javascripts/imgs.json',
            type: 'GET',
            dataType: 'json'
        }).done(function(data) {
            for(var i in data.images) {
                $('<img>').attr({
                    src: data.images[i].src,
                    id: data.images[i].id
                }).appendTo('#contminImgs').wrap('<div class="image"></div>');
                $('<img>').attr(
                    'src', data.images[i].src
                ).appendTo('#contImgs').wrap('<div class="imageLarge" id='+data.images[i].id+'></div>');
                $('<span class="titles novisible" id='+data.images[i].id+'>').text(data.images[i].title).appendTo('#title');
            }
            $('.titles').first().removeClass('novisible').addClass('visible');
        });
    };
    $('#contminImgs').click(function(event) {
        $('.imageLarge').each(function() {
            var domElement = $(this);
            if(domElement.context.id == event.target.id) {
                $('div.imageLarge').removeClass('visible').addClass('novisible');
                $(this).removeClass('novisible').addClass('visible');
            }
        });
        $('.titles').each(function() {
            var titleElem = $(this);
            if(titleElem.context.id == event.target.id) {
                $('span.titles').removeClass('visible').addClass('novisible');
                $(this).removeClass('novisible').addClass('visible');
            }
        })
    });
    loadImages();
});
