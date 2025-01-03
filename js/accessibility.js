//Articulate test
function speak(obj) {
  $(obj).articulate('speak');
};

function pause() {
  $().articulate('pause');
};

function resume() {
  $().articulate('resume');
};

function stop() {
  $().articulate('stop');
};
//Articulate test






setTimeout(function(){

// $("#search").append('<etiqueta><label id="slab" for="text-search">Búsqueda:</label> <input type="text" id="text-search"/></etiqueta>');

// $("#search").append('<style type="text/css">.highlight {    background-color: #fff34d;    -moz-border-radius: 5px; /* FF1+ */    -webkit-border-radius: 5px; /* Saf3-4 */    border-radius: 5px; /* Opera 10.5, IE 9, Saf5, Chrome */    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* FF3.5+ */    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Saf3.0+, Chrome */    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Opera 10.5+, IE 9.0 */}.highlight {    padding:1px 4px;    margin:0;}etiqueta {    background-color: #337ab7;    border-radius: 8px 0 0 8px;    color: white;    display: inline-block;    float: left;    font-size: 14px;    font-weight: 400;    height: 36px;    left: 83.5%;    line-height: 1.42857;    padding: 2em 0; width: 50%; margin:0 25%;}etiqueta input{  color:black}</style>');





/////show-hide//////
    //$("li a[href*=tab]").attr("target", "self"); para ver a que le aplica el target self en submenú paquetes
$("li a[href*=tab]").attr("target", "_self"); // arregla link en submenu paquetes

    $("footer").attr("id","ftest");
    
    $(".dacc ul.dropdown-menu").attr("id","menu-access");
    


// jQuery.fn.highlight = function(pat) {
//  function innerHighlight(node, pat) {
//   var skip = 0;
//   if (node.nodeType == 3) {
//    var pos = node.data.toUpperCase().indexOf(pat);
//    if (pos >= 0) {
//     var spannode = document.createElement('span');
//     spannode.className = 'highlight';
//     var middlebit = node.splitText(pos);
//     var endbit = middlebit.splitText(pat.length);
//     var middleclone = middlebit.cloneNode(true);
//     spannode.appendChild(middleclone);
//     middlebit.parentNode.replaceChild(spannode, middlebit);
//     skip = 1;
//    }
//   }
//   else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
//    for (var i = 0; i < node.childNodes.length; ++i) {
//     i += innerHighlight(node.childNodes[i], pat);
//    }
//   }
//   return skip;
//  }
//  return this.each(function() {
//   innerHighlight(this, pat.toUpperCase());
//  });
// };

// jQuery.fn.removeHighlight = function() {
//  function newNormalize(node) {
//     for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
//         var child = children[i];
//         if (child.nodeType == 1) {
//             newNormalize(child);
//             continue;
//         }
//         if (child.nodeType != 3) { continue; }
//         var next = child.nextSibling;
//         if (next == null || next.nodeType != 3) { continue; }
//         var combined_text = child.nodeValue + next.nodeValue;
//         new_node = node.ownerDocument.createTextNode(combined_text);
//         node.insertBefore(new_node, child);
//         node.removeChild(child);
//         node.removeChild(next);
//         i--;
//         nodeCount--;
//     }
//  }

//  return this.find("span.highlight").each(function() {
//     var thisParent = this.parentNode;
//     thisParent.replaceChild(this.firstChild, this);
//     newNormalize(thisParent);
//  }).end();
// };



$(function() {
    $('#text-search').bind('keyup change', function(ev) {
        // pull in the new value
        var searchTerm = $(this).val();
        // remove any old highlighted terms
        $('body').removeHighlight();
        // disable highlighting if empty
        if ( searchTerm ) {
            // highlight the new term
            $('body').highlight( searchTerm );
        }
    });
});

},400);


$(document).ready(function() {
        $("#clickass").css("display","none");
        // $('#showmenu00').click(function() {
        //         $('div#dvisual').slideToggle("fast");
        //         $('div#search').hide();
        // });
	

        // $('#showmenu').click(function() {
        //         $('div#dvisual').slideToggle("fast");
        //         $('div#search').hide();
        // });
        // $('#showmenu02').click(function() {
        //         $('div#acontrol').slideToggle("fast");

        // });

        // $('#showmenu03').click(function() {
        //         if($("#search etiqueta").length==0){
        //           $("#search").append('<etiqueta><label id="slab" for="text-search">Búsqueda:</label> <input type="text" id="text-search"/></etiqueta>');
        //           $("#search").append('<style type="text/css">.highlight {    background-color: #fff34d;    -moz-border-radius: 5px; /* FF1+ */    -webkit-border-radius: 5px; /* Saf3-4 */    border-radius: 5px; /* Opera 10.5, IE 9, Saf5, Chrome */    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* FF3.5+ */    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Saf3.0+, Chrome */    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Opera 10.5+, IE 9.0 */}.highlight {    padding:1px 4px;    margin:0;}etiqueta {    background-color: #337ab7;    border-radius: 8px 0 0 8px;    color: white;    display: inline-block;    float: left;    font-size: 14px;    font-weight: 400;    height: 36px;    left: 83.5%;    line-height: 1.42857;    padding: 2em 0; width: 50%; margin:0 25%;}etiqueta input{  color:black}</style>');
        //           jQuery.fn.highlight = function(pat) {
        //                function innerHighlight(node, pat) {
        //                 var skip = 0;
        //                 if (node.nodeType == 3) {
        //                  var pos = node.data.toUpperCase().indexOf(pat);
        //                  if (pos >= 0) {
        //                   var spannode = document.createElement('span');
        //                   spannode.className = 'highlight';
        //                   var middlebit = node.splitText(pos);
        //                   var endbit = middlebit.splitText(pat.length);
        //                   var middleclone = middlebit.cloneNode(true);
        //                   spannode.appendChild(middleclone);
        //                   middlebit.parentNode.replaceChild(spannode, middlebit);
        //                   skip = 1;
        //                  }
        //                 }
        //                 else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
        //                  for (var i = 0; i < node.childNodes.length; ++i) {
        //                   i += innerHighlight(node.childNodes[i], pat);
        //                  }
        //                 }
        //                 return skip;
        //                }
        //                return this.each(function() {
        //                 innerHighlight(this, pat.toUpperCase());
        //                });
        //           };

        //           jQuery.fn.removeHighlight = function() {
        //            function newNormalize(node) {
        //               for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
        //                   var child = children[i];
        //                   if (child.nodeType == 1) {
        //                       newNormalize(child);
        //                       continue;
        //                   }
        //                   if (child.nodeType != 3) { continue; }
        //                   var next = child.nextSibling;
        //                   if (next == null || next.nodeType != 3) { continue; }
        //                   var combined_text = child.nodeValue + next.nodeValue;
        //                   new_node = node.ownerDocument.createTextNode(combined_text);
        //                   node.insertBefore(new_node, child);
        //                   node.removeChild(child);
        //                   node.removeChild(next);
        //                   i--;
        //                   nodeCount--;
        //               }
        //            }

        //            return this.find("span.highlight").each(function() {
        //               var thisParent = this.parentNode;
        //               thisParent.replaceChild(this.firstChild, this);
        //               newNormalize(thisParent);
        //            }).end();
        //           };



        //             $(function() {
        //                 $('#text-search').bind('keyup change', function(ev) {
        //                     // pull in the new value
        //                     var searchTerm = $(this).val();
        //                     // remove any old highlighted terms
        //                     $('body').removeHighlight();
        //                     // disable highlighting if empty
        //                     if ( searchTerm ) {
        //                         // highlight the new term
        //                         $('body').highlight( searchTerm );
        //                     }
        //                 });
        //             });
        //         }

        //          $('div#search').slideToggle("fast");
        //          $('div#dvisual').hide();
        // });

        //  $('#close').click(function() {
        //         $('div#dvisual').slideToggle("fast");
        // });

        //  $('#closes').click(function() {
        //         $('div#search').slideToggle("fast");
        // });

        //  $('#closea').click(function() {
        //         $('div#acontrol').slideToggle("fast");
        // });
    });



////NUEVO--Switch responsivo de imágenes////
        $(function() {
            painKiller();
            $(window).resize(function() {
                painKiller();
            });
        });

        function painKiller() {
            if ($(window).width() <= 1440) {
            }
            if ($(window).width() > 800) {
            }
        }

setTimeout(function(){


 var facehead="<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K54NKJX');</script> ";
  
var facebody=' ';
 
$("head").prepend(facehead);
$("body").prepend(facebody);


 var facehead="<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '481718705632312'); fbq('track', 'PageView');</script><noscript><img height='1' width='1' src='https://www.facebook.com/tr?id=481718705632312&ev=PageView&noscript=1'/></noscript>";
// var facebody=' ';
// var facelayer="<script>var facepath=window.location.pathname;dataLayer = [{ 'event':facepath, 'page': facepath, 'site': 'dish.com.mx'}];</script>";
// var cc_a="<script src='https://tags.crwdcntrl.net/c/12208/cc_af.js'></script>";

$("head").prepend(facehead);
//$("head").append(cc_a);
// $("body").prepend(facebody);
//$("body").append(facelayer);

},5);



  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-3597453-10', 'auto');
  ga('require', 'displayfeatures',);
  ga('send', 'pageview');


setTimeout(function(){

  // $("head").prepend("<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MJWZL34');</script>");
  // $("body").prepend('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJWZL34"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
  //var cc_a="<script src='https://tags.crwdcntrl.net/c/12208/cc_af.js'></script>";
  // $("head").prepend(cc_a);
  // alert("test");

},13);

// setTimeout(function(){
//  var facehead=" ";
//   var facebody=' ';
//   var facelayer="<script>var facepath=window.location.pathname;dataLayer = [{ 'event':facepath, 'page': facepath, 'site': 'dish.com.mx'}];</script>";
//   var cc_a="<script src='https://tags.crwdcntrl.net/c/12208/cc_af.js'></script>";

// $("head").prepend(facehead);
// //$("head").append(cc_a);
// $("body").prepend(facebody);
// alert("test");
// //$("body").append(facelayer);

// },5);


if(window.location.pathname=="/hd/" || window.location.pathname=="/hd"){
  window.location.pathname="/hd/index.html";
}

if(window.location.pathname=="/ego" || window.location.pathname=="/ego"){
  window.location="https://www.dishcelular.com.mx/";
}

if(window.location.pathname=="/skyworth/" || window.location.pathname=="/skyworth"){
  window.location="/skyworth/index.html";
}

if(window.location.pathname=="/amazon/" || window.location.pathname=="/amazon"){
  window.location="/amazon/index.html";
}
if(window.location.pathname=="/adultos/" || window.location.pathname=="/adultos"){
  window.location="/adultos/adultos.html";
}
  if(location.protocol=="http:"){
  window.location.href="https://"+location.hostname+location.pathname;

}



//Aquí val código del GTM para facebook
// setTimeout(function(){
  var appKey = '98bc228f-fe69-4bbf-9d45-e65fe8de2dc4';

  function setCookie(name, value, expirationDays, path, domain) {
      if (typeof name !== "string" || name.length < 1) {
          console.error('setCookie: missing mandatory param "name". setCookie(name, value, expirationDays, path, domain)');
          return;
      }
      var expiresStr = "";
      if (typeof expirationDays === "number" && expirationDays > 0) {
          var d = new Date();
          d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
          expiresStr = ";expires=" + d.toUTCString();
      }
      var pathStr = ";path=" + "/";
      if (typeof path === "string" && path.length > 0) {
          pathStr = ";path=" + path;
      }
      var domainStr = "";
      if (typeof domain === "string" && domain.length > 0) {
          domainStr = ";domain=" + domain;
      }
      document.cookie = name + "=" + value + expiresStr + pathStr + domainStr;
  }

  function getCookie(name) {
      var cname = name + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(cname) == 0) {
              return c.substring(cname.length, c.length);
          }
      }
      return "";
  }

  function registerNavigationTopic() {

    var url = new URL(location.href);
    var topic = url.searchParams.get("tab_paquete");
    if(topic != null){

      var now = (new Date()).getTime();
      var userAlreadySubscribed = (now - (parseInt(localStorage.getItem(topic), 10)) < (1000 * 3600 * 24 * 7));

      if(!userAlreadySubscribed){
        localStorage.setItem(topic, now);
        indigitall.topicsSubscribe([topic]);
      }
    }
  }

  function onIndigitallLoaded() {

    var pushRegistrationDomain = getCookie("webpushDomain");
    if(pushRegistrationDomain === ""){
      setCookie("webpushDomain", window.location.hostname, 6000, "/", ".dish.com.mx");
      pushRegistrationDomain = window.location.hostname;
    }

    if(window.location.hostname == pushRegistrationDomain){

      indigitall.init({
        appKey: appKey,
        workerPath:'js/worker.min.js',
        requestLocation: true
      }, function(device) {

        if(!device){ return; }

        setCookie("webpushDeviceId", device.deviceId, 6000, "/", ".dish.com.mx");
        registerNavigationTopic();
      });

    }else{

      var deviceId = getCookie("webpushDeviceId");
      if(deviceId === ""){ return; }

      localStorage.setItem("indigitall.repository.APP_KEY", appKey);
      localStorage.setItem("indigitall.repository.DEVICE_ID", deviceId);
      registerNavigationTopic();
    }

     // alert("test");
  }
  // alert("test");
//indigitall.init({ appKey:'98bc228f-fe69-4bbf-9d45-e65fe8de2dc4', workerPath:'/js/worker.min.js',requestLocation:true });
// },22);



setTimeout(function(){
 var facehead=" ";
	
var facebody=' ';
 
 var sdkinidigital='<script src="/js/sdk.min.js"  async> </script>';
//var sdkinidigital='<script src="/js/sdk.min.js" onload="indigitall.init({ appKey:\'98bc228f-fe69-4bbf-9d45-e65fe8de2dc4\', workerPath:\'/js/worker.min.js\' })" async> </script>';
//var sdkinidigital='<script src="/js/sdk.min.js" onload="indigitall.init({ appKey:"98bc228f-fe69-4bbf-9d45-e65fe8de2dc4", workerPath:"/js/worker.min.js" })" async> </script>';

$("head").prepend(sdkinidigital);
$("head").prepend(facehead);
$("body").prepend(facebody);
 $("#clickass").css("display","none");
 $(".dacc").css("display","none");


// $("body").append('<script>(function(){var s = document.createElement("script");s.setAttribute("data-account","gOUakjs1wr");s.setAttribute("src","https://cdn.userway.org/widget.js");document.body.appendChild(s);})();</script>');

},8);

setTimeout(function(){
 onIndigitallLoaded();
 $("a.item8.level0").first().attr("onclick",'indigitall.topicsSubscribe(["freedom_pop"])');
console.log("Funcion llamada");
},4500);


