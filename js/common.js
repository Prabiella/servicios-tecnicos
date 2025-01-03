function addElementForm(element, $target) {
    var prototypeElement = $('#'+$(element).attr('id').replace('add', $target));
    $container = prototypeElement.parent();
    // Get the data-prototype explained earlier
    var prototype = prototypeElement.data('prototype');
    var lastAddedId = $('#'+prototypeElement.attr('id')+'>div.form-group:last').attr('id');
    var totalElements = 1;
    if (lastAddedId != undefined) {
        var lastAddedData = lastAddedId.split('_');
        totalElements = parseInt(lastAddedData[lastAddedData.length - 1]);
    }

    // get the new index
    var index = prototypeElement.data('index')==undefined?totalElements+1:prototypeElement.data('index');

    // Replace '$$name$$' in the prototype's HTML to
    // instead be a number based on how many items we have
    var newForm = prototype.replace(/__name__/g, index);
    newForm = newForm.replace(/label__$/g, index);

    // increase the index with one for the next item
    prototypeElement.data('index', index + 1);

    // Display the form in the page in an li, before the "Add a tag" link li
    var $newFormLi = $('<div></div>').append(newForm);

    // also add a remove button, just for this example
    //$newFormLi.append('<a href="#" class="remove-tag">x</a>');

    $container.append($newFormLi);
}

function formatCollectionItems() {
    $('.remove-collection-item').each(function () {
        var id = $(this).attr('id');
        var containerId = '#sonata-ba-field-container-' + id.replace('_delete', '');
        $(this).closest(containerId).css('background', '#EEE').css('padding', '8px 15px').children('label').remove()
    });
}

function removeCollectionItem(element) {
    var id = $(element).attr('id');
    var containerId = '#sonata-ba-field-container-' + id.replace('_delete', '');

    $(element).closest(containerId).remove();

    return false;
}

setInterval(formatCollectionItems, 1000);


$(document).on('ready', function() {
    $(".carrusel1").slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.carrusel5').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        //speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.banner-container').find('img').attr('style', 'max-width: 100%;');
	$(document).click(function(e){
        //if(e.target.id!='acceso')//suponiendo q el div tiene el id=divi
          //  $('#acceso').hide();
        }); 
	
	/*
	$("html").click(function(){
        if(e.target.id!='acceso')
		 $('#acceso').hide();
    });
	*/

});


document.write('<style type="text/css">div.cp_oculta{display: none;}</style>');
function MostrarOcultar(capa,enlace)
{
    if (document.getElementById)
    {
        var aux = document.getElementById(capa).style;
        aux.display = aux.display? "":"block";
		
    }
}




