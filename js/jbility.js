/**
*	jBility
*	jBility is a free set of accessibility functions that uses JQuery.
*	By: Uriel Cairê Balan Calvi
*	Available on: https://github.com/urielcaire/jBility
*/
jQuery(document).ready(function( $ ){
	/*===================================================================
	*	jBility uses JsCookie to manager cookies.
	*	JsCookie is available on: https://github.com/urielcaire/jscookie
	*====================================================================*/
	var numberOfClicks = 0;
	function createCookie(name, value, days){
		var expires = "";
		if(days){
			var time = new Date();
			time.setTime(time.getTime()+(days*24*60*60*1000));
		}
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function getCookie(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return "";
	}

	function deleteCookie(name) {
		createCookie(name,"",-1);
	}

	function checkCookie(name){
		var check = getCookie(name);
		if(check != "")
			return true;
		return false;
	}

	 
	//$head.append($("<link>", { rel: "stylesheet", href: "../css/jbility.css", type: "text/css" }));

	



	/*======================================
	*		jBility functions
	*======================================*/
	function addConstrast(){
	//$("#idjbility").contents().find("head").append.(cssjbility);
	var cssjbility = "<link href='../css/jbility.css' rel='stylesheet'>"; 
	//$('#idjbility',framejbility.document).append(cssjbility);
	$("#vacant").contents().find('head').append(cssjbility);
	$("#idjbility").contents().find('head').append(cssjbility);
    $('*').addClass('pagina-acessivel');
    $('.acess-container').addClass('f-transparent');
    $('#botao').addClass('f-transparent');
    $('#acess-icons').addClass('f-transparent');
    $('.acess-icon').addClass('f-transparent');
    $('img').addClass('desaturate');
    $('#jbbutton').addClass('f-transparent');

    // para contraste en iframe
    //$('*',framejbility.document).addClass('pagina-acessivel');
    $("#idjbility").contents().find('img').addClass('desaturate');
     $(".idjbility-guia").contents().find('img').addClass('desaturate');
    $("#vacant").contents().find('img').addClass('desaturate');
    $('.img-rounded').addClass('desaturate');
    //$(".item").css("filter":"grayscale() invert() contrast(105%) saturate(103%)");


   
  }

  function removeConstrast(){
    console.log('removeConstrast');
    $('*').removeClass('pagina-acessivel');
    $('.acess-container').removeClass('f-transparent');
    $('#botao').removeClass('f-transparent');
    $('#acess-icons').removeClass('f-transparent');
    $('.acess-icon').removeClass('f-transparent');
    $('img').removeClass('desaturate');
    $('#jbbutton').removeClass('f-transparent');
    // para contraste en iframe
    //$('*',framejbility.document).removeClass('pagina-acessivel');
    $(".idjbility-guia").contents().find('img').removeClass('desaturate');
    $("#idjbility").contents().find('img').removeClass('desaturate');
    $("#vacant").contents().find('img').removeClass('desaturate');
    $('.img-rounded').removeClass('f-transparent');

  }

  if(checkCookie('ccontrast')){
  	addConstrast();
  	$(".dacc ul.dropdown-menu").attr("id","menu-access");
  }

  $('#contrast').click(function(){
  	var ck = checkCookie('ccontrast');
	  if(ck){
	  	deleteCookie('ccontrast');
	    removeConstrast();
	  }else{
	    createCookie('ccontrast', 'cookieContrast');
	    addConstrast();
	  }
  });

	var $cElements = $("body").find("*");
	
	var fonts = [];
	var fonts2 = [];

	
	function getFontSize() {
		for (var i = 0; i < $cElements.length; i++) {
	 		fonts.push(parseFloat($cElements.eq(i).css('font-size')));
			
			
	  }
	}

	function square(){
		var c =   $( "#idjbility" ).contents().find( "*" );
		
		for (var i = 0; i < c.length; i++) {
	 		fonts2.push(parseFloat(c.eq(i).css('font-size')));
			
	  }
		return c;
	}
		

	getFontSize();

	$("#increaseFont").on('click', function() {
			var $cElements2 = square();
			if (numberOfClicks <=4){				
				for (var i = 0; i < $cElements.length; i++) {
	   				++fonts[i];
					$cElements.eq(i).css('font-size', fonts[i]);
			
				}
				 for (var i2 = 0; i2 < $cElements2.length; i2++) {
	   				++fonts2[i2];
	   				$cElements2.eq(i2).css('font-size', fonts2[i2]);
				}
	   	
	   		numberOfClicks++;
		}else { 

		}
	});

	$("#decreaseFont").on('click', function() {
		var $cElements2 = square();
		//console.log ($cElements2);
		if (numberOfClicks >=1){
	
			for (var i = 0; i < $cElements.length; i++) {
			--fonts[i];
			$cElements.eq(i).css('font-size', fonts[i]);
			}
			for (var i3 = 0; i3 < $cElements2.length; i3++) {
			--fonts2[i3];
			$cElements2.eq(i3).css('font-size', fonts2[i3]);
			}
		
			
			numberOfClicks--;

		}else { }



	});




	$('#jbbutton').click(function(){
    $('#acess-icons').toggle(150);
  });

});
