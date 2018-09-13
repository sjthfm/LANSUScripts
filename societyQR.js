if (/groups/.test(window.location.href)) {

	 $('<div id="GQR"> </div>').appendTo($("#right-content > h1"));

	  let $showAllSocieties = $('<div class="btnSocieties">'+'<input type="button" value="Show All Societies" id="showAllSocieties" />'+'</div>');
	      $showAllSocieties.appendTo($("#GQR"));

	  let $multiGenQRs = $('<div class="btnSocieties">'+'<input type="button" value="Generate QRs (A3, Multiple)" id="multiGenQRs" />'+'</div>');
	      $multiGenQRs.appendTo($("#GQR"));

	  var $input = $('<div class="btnSocieties" >'+'<input type="button" value="Generate QR (Single Society) A3" id="a3Soc" />'+'</div>');
	      $input.appendTo($("#GQR"));

	  var $input = $('<div class="btnSocieties">'+'<input type="button" value="Generate QR (Single Society) A4" id="oneSoc" />'+'</div>');
	      $input.appendTo($("#GQR"));
	      
	  $('body').on('click', '#showAllSocieties', function(){
	      alert('This process will take (on average) 2 minutes'); 
	      showAllSocieties();
	  });

	  $('body').on('click', '#multiGenQRs', function(){
	      alert('Generating');
	      linkAllSocieties();
	      var css = ("<style>" + "@media print, screen {#socqr > p.group-details {opacity: 0;}#socqr > img {width: auto;max-width: 300px;height: auto;position: absolute;max-height: 300px;min-height:  300px;min-width:  300px;top: 350px;left: -25px;}#socqr > div.group-name {font-size: 7em;}.group-list {width: 1191px;}#socqr > p:nth-child(4) {position: absolute;font-size: 2em;width: 1191px;}#socqr > canvas {position:absolute;width: 725;height: 725;left: 375px;top: 235px;}.uc-load-more-groups{ display:none; }}" + "@media screen, print { .group-box {min-height: 1024px;} #socqr > p {font-size:2em;position: absolute;} #socqr > img {left: 40px;border-width: 0px;border-radius: 0px;}}" + "</style>");
	      exportDocument($('.club-container').html(), css);
	  });


	$('body').on('click', '#oneSoc', function(){
	    alert('Generating');
	    cloneSocieties();
	    exportDoc($('.club-container').html(), '');
	});


	$('body').on('click', '#a3Soc', function(){
	    alert('Generating');
	  $('.category-box-wrapper > div > a:not(.category-box-wrapper > div > a:nth-child(2))').remove();
	    relinkGroups();
	   /* var css = ("<style> @media print, screen {.category-box-wrapper > div > .page-separator-wrapper > div { display:none; }.uc-middle-panel-for-group-cat > div.group-category-title > h2 { display:none;}.group-box {height: max-content;width: 200%;}#socqr > div.group-name {font-size: 16em;width: 100%;}#socqr > canvas {width: 1024px;height: 1024px;top: 2em;left: 0;right: 0;bottom: 0;}.group-list { width: 100%; }#socqr > p { display:block;} #socqr > p:nth-child(4){width: 100%;margin-top: 100px;font-size: 5em;}#socqr > p.group-details{ display: none; } #socqr > canvas{width: 968;height: 968;} .group-banner {width: 200px;height: 200px;}#club-society > div.twelvecol > div.uc-middle-panel-for-group-cat > div.group-category-title { display:none;}  } </style>");*/

	   var css = ("<style>" + "@media print, screen {#socqr > p.group-details {opacity: 0;}#socqr > img {width: auto;max-width: 300px;height: auto;position: absolute;max-height: 300px;min-height:  300px;min-width:  300px;top: 350px;left: -25px;}#socqr > div.group-name {font-size: 7em;}.group-list {width: 1191px;}#socqr > p:nth-child(4) {position: absolute;font-size: 2em;width: 1191px;}#socqr > canvas {position:absolute;width: 800;height: 800;left: 375px;top: 235px;}.uc-load-more-groups{ display:none; }}" + "</style>");
	   exportDoc($('.club-container').html(), css);
	});
	function cloneSocieties() {
		$('.category-box-wrapper > div > a:not(.category-box-wrapper > div > a:nth-child(2))').remove();
		let targetEle = $('.group-box');
		$.each( targetEle, function( key, value ) {
			let currentHref 	= $(this).attr('href');
			let currentEle  	= $(this);
			for (a = 0; a < 2; a++) {
				$( $('.group-box[href*="'+ currentHref +'"]') ).clone().appendTo( ".uc-group-list-page-wrapper" );
			}
			$( $('.group-box[href*="'+ currentHref +'"]') ).clone().appendTo( ".uc-group-list-page-wrapper" );
		});
		relinkGroups();
	}
	function relinkGroups() {
		$('.category-box-wrapper > div > a').each(function(i,link){
			$(".category-box-wrapper > div > a").attr("href", link.href);
		});
		$('.category-box-wrapper > div > a > p').append('<br> <br> <p>'+$('.category-box-wrapper > div > a').attr('href')+'</p>');
		$('.category-box-wrapper > div > a > p > p:not(.category-box-wrapper > div > a > p > p:nth-child(3))').remove();
	}
	function exportDoc( element , moddedcss) {
	   var html, link, blob, url, css, js, jquery;

	   jquery = ('<script type="text/javascript">' + "var script = document.createElement('script'); script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(script);" + '</script>');

	   css = ('<style>' + "@media screen, print{div,span,h1,h2,p,a,img,ul,li{border:0;margin:0;padding:0;}a img{border:0;}.threecol,.ninecol,.twelvecol{margin-right:1.5%;float:left;min-height:1px;}.threecol{width:23.79%;}.ninecol{width:74.6%;}.twelvecol{width:100%;float:left;margin-left:50px;}.last{margin-right:0px;}img{max-width:100%;}img{height:auto;}@media handheld, only screen and (max-width: 767px){.threecol,.ninecol,.twelvecol{width:auto;float:none;margin-left:0px;margin-right:0px;padding-left:00px;padding-right:00px;clear:both;}img{max-width:100%;}}.floatLeft{float:left;}.display-none{display:none;}.clear{clear:both;}h1{color:#333;font-size:2em;padding:0px;}h1{color:#333;}h2{color:#333;}.categoryBox{border-style:solid;border-width:0 0 1px 0;border-color:#ccc;padding:0 0 10px;}.types-list{width:150px;}.group-list{width:510px;}.search-box .search-box-wrapper{border-color:#767676;border-style:solid;border-width:3px;position:relative;padding:5px;-moz-border-radius:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px 10px 10px 10px;width:200px;background:#fff;margin:0 auto;}.search-box .search-box-wrapper .search-input{background:none repeat scroll 0 0 #fff;border:0px solid #E4E4E4;display:block;padding:2px 5px 3px;width:165px;}.search-box .search-box-wrapper .search-button{background:url('https://d2wcds7obmglv2.cloudfront.net/assets/default/search-image.png') no-repeat scroll center center #fff;border:0 none;display:block;height:25px;text-indent:-999px;width:25px;}.club-container{background:none repeat scroll 0 0 #ECEBE7;-moz-border-radius:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px 10px 10px 10px;margin:30px 2% 0;padding:30px 0 15px;}.content .group-category-title h2{margin:0px 12px;}.group-category-title h2{background:none repeat scroll 0 0 #F6F6F6;color:#4A0A6A;font-size:1.6em;margin:0px 12px;padding:10px;border-style:solid;border-color:#CBCBC9;border-width:1px 0 0 1px;text-align:center;}.group-box{background: white; border-color:#E7E7E7;border-style:solid;border-width:1px;float:left;margin:0 5px 3px 0;min-height:120px;padding:5px;text-decoration:none;width:100%;position:relative;}.types-list{margin:0;width:150px;}.group-list{width:540px;}.group-box .group-name{font-size:1.1em;font-weight:bold;color:#44085E;text-transform:capitalize;}.group-banner{display:block;float:left;margin:23px 10px 0 0;width:75px;overflow:hidden;font-size:0.8em;}.group-details{display:block;float:left;margin:10px 0 0;width:60%;word-wrap:break-word;font-size:0.75em;color:#333333;line-height:1.2em;}.group-types{background:url('https://d2wcds7obmglv2.cloudfront.net/assets/default/group-types-bg.png') repeat-y scroll left top transparent;border-bottom:15px solid #999999;border-top:15px solid #999999;color:#333333;display:block;margin:10px 13px;width:auto;}.group-types-wrapper{min-height:220px;background:url('https://d2wcds7obmglv2.cloudfront.net/assets/default/group-types-bg.png') repeat-y scroll right top transparent;margin:0 0 0 15px;}.content-wrap .group-types ul{color:#333333;font-size:0.85em;list-style:none outside none;margin:0 2px 0 0;}.group-types ul li{cursor:pointer;display:block;overflow:hidden;padding:5px;text-overflow:ellipsis;white-space:nowrap;}.group-types ul li.active{background:#fff;}.group-types ul li.active a{color:#480A6F;}.group-types ul li a{color:#666666;font-weight:bold;text-decoration:none;}.categoryBox{border:0 none;margin:10px 0;}#uc-group-homepage .uc-group-list-page-wrapper{margin:0 0 15px;}#uc-group-homepage .page-separator-wrapper{padding:0 0 15px 0;}#uc-group-homepage .page-separator-wrapper .page-separator{background:none repeat scroll 0 0 #f8f8f8;border-top:1px solid #E7E7E7;color:#333333;font-family:'CenturyGothicBold',Arial,Helvetica,sans-serif;font-size:13px;font-style:normal;font-weight:normal;margin:0;padding:10px;clear:both;}#uc-group-homepage #uc-more-group-search{clear:both;padding:0;display:none;margin:10px 0 0;}#uc-group-homepage #uc-more-group-search a.uc-load-more-groups{background:none repeat scroll 0 0 #e7e7e7;box-shadow:0 0 5px #CCCCCC inset;-moz-box-shadow:0 0 5px #CCCCCC inset;-webkit-box-shadow:0 0 5px #CCCCCC inset;display:block;font-family:'CenturyGothicBold',Arial,Helvetica,sans-serif;font-size:15px;font-style:normal;font-weight:normal;margin:0;padding:10px;text-align:center;text-decoration:none;color:#000000;clear:both;}.clear{clear:both;}@media only screen and (max-width: 980px){.types-list{width:225px;}.group-list{width:270px;}.group-box{width:95%;}}@media only screen and (max-width: 767px){#right-content h1{color:#B2CA50;font-size:2.5em;text-shadow:#ccc 1px 1px 0px;padding-left:10px;}h1{color:#B2CA50;font-size:1.5em;text-shadow:1px 1px 0 #666666;}}@media handheld, only screen and (max-width: 685px){.group-list{clear:none;float:left;width:380px;}.types-list{clear:none;float:left;width:225px;}}@media handheld, only screen and (max-width: 480px){.group-box{margin:5px auto;width:96%;}.club-container{margin:30px 10px 10px;padding:30px 0 15px;}.group-details{width:auto;float:none;}.types-list,.group-list{width:auto;}.categoryBox{border:0 none;margin:10px auto;width:100%;}.types-list,.group-list{float:none;margin:0 auto;width:91%;}.group-types{background:url('https://d2wcds7obmglv2.cloudfront.net/assets/default/group-types-bg.png') repeat-y scroll left top transparent;border-bottom:15px solid #999999;border-top:15px solid #999999;color:#333333;display:block;margin:10px auto;width:100%;}}img{border:0;}.clear{clear:both;}}@media print{.clear{clear:both;}}@media screen{*{box-sizing:border-box;}@media only screen and (-webkit-min-device-pixel-ratio:1.3),only screen and (-o-min-device-pixel-ratio:13/10),only screen and (min-resolution:120dpi){*{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;}}.wrapper h1{background-color:rgba(255,255,255,0);font-family:'Roboto',sans-serif;font-weight:600;}.threecol,.ninecol,.twelvecol{position:relative;width:100%;min-height:1px;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%;margin-right:auto;margin-left:auto;margin-bottom:auto;margin-top:auto;}.threecol{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}.ninecol{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}.twelvecol{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}.club-container{background:none repeat scroll 0 0 rgba(255,255,255,0.14);-moz-border-radius:0;border-radius:0;-webkit-border-radius:0;margin:5% 2% 0 0;padding:0;border:#fff 1px solid;border-top:0;border-bottom:0;width:100%;}.group-category-title h2{background:none repeat scroll 0 0 rgba(246,246,246,0);color:#42186c;font-size:2em;border:#71afb5 solid;border-width:0 1px 1px 1px;border-radius:0 0 5px 5px;margin:0 10px;padding:10px;text-align:center;}#uc-group-homepage .page-separator-wrapper .page-separator{background:none repeat scroll 0 0 transparent;border-top:1px solid #000;color:#000;font-family:'CenturyGothicBold',Arial,Helvetica,sans-serif;font-size:13px;font-style:normal;font-weight:normal;margin:0;padding:10px;clear:both;}#club-society>div.twelvecol>div.uc-middle-panel-for-group-cat>div.threecol.types-list{padding-left:0;padding-right:0;}.group-box{background:white;border-color:#fff;border-style:solid;border-width:1px;float:left;margin:0 0 1% 0;min-height:175px;max-height:175px;padding:1% 0 0 1%;text-decoration:none;width:100%;position:relative;border-radius:5px;}.group-banner{display:block;float:left;margin:15px 15px 0 5px;width:85px;overflow:visible;font-size:1em;border:1px #42186c solid;border-radius:0 10px 0 0;border-width:3px 3px 0 0;}div.category-box-wrapper>div>a:nth-child(even)>img{border-color:#71afb5;}div.category-box-wrapper>div>a:nth-child(odd)>img{border-color:#42186c;}.group-box .group-name{font-size:1.1em;font-weight:bold;color:#44085e;text-transform:capitalize;border-bottom:1px white solid;}.group-details{display:block;float:left;margin:25px 0 0;width:74%;word-wrap:break-word;font-size:1em;color:#000;line-height:1.6em;}.group-types{background:white;border-bottom:0 solid #999;border-top:0 solid #999;color:#333;display:block;margin:10px -4px;width:100%;}.group-types ul li a{color:#000;font-weight:100;text-decoration:none;font-family:'Roboto',sans-serif;}.group-types-wrapper{min-height:220px;background:url('https://nusdigital.s3-eu-west-1.amazonaws.com/global_assets/stylesheets/lansu/default/group-types-g.png') repeat-y scroll right top rgba(255,255,255,0.41);margin:0 0 0 7.5px;}.content-wrap .group-types ul{color:#333;font-size:.75em;list-style:none outside none;margin:0;border:1px white solid;border-width:0 1px 0 0;border-radius:0;}.group-types ul li{cursor:pointer;display:block;overflow:hidden;padding:4.5%;text-overflow:ellipsis;white-space:nowrap;border:1px white solid;border-width:1px 0 0 0;}.group-types ul li.active{background:#fff;border:#42186c 3px solid;}#uc-group-homepage #uc-more-group-search a.uc-load-more-groups{background:none repeat scroll 0 0 rgba(231,231,231,0);box-shadow:0 0 0 #ccc inset;-moz-box-shadow:0 0 0 #ccc inset;-webkit-box-shadow:0 0 0 #ccc inset;display:block;font-family:'CenturyGothic',Arial,Helvetica,sans-serif;font-size:15px;font-style:normal;font-weight:normal;margin:0;padding:10px;text-align:center;text-decoration:none;color:#fff;clear:both;border:1px white solid;background-color:rgba(255,255,255,0.16);}#uc-group-homepage #uc-more-group-search a.uc-load-more-groups:hover{border:solid 2px #42186c;}#uc-more-group-search a,#uc-more-group-search a:after,#uc-more-group-search a:before{transition:all .5s;}#All>div.category-box-wrapper>div>a:nth-child(even):hover{background-color:rgba(66,24,108,0.17);border-width:2px;}#All>div.category-box-wrapper>div>a:nth-child(odd):hover{background-color:rgba(113,175,181,0.17);border-width:2px;}#club-society>div.twelvecol>div.uc-middle-panel-for-group-cat>div.threecol.types-list>div>div>ul>li:hover{background-color:rgba(66,24,108,0.16);border-width:1px;}#right-content>h1{text-align:center;color:#42186c;margin:10px;}@media all and (min-width:320px) and (max-width:400px){.search-box .search-box-wrapper{border-color:#fff;border-style:solid;border-width:0;padding:5px;-moz border-radius:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px 10px 10px 10px;background:#fff;margin:0;}}@media all and (min-width:1024px){.search-box .search-box-wrapper{border-color:#fff;border-style:solid;border-width:0;padding:5px;-moz-border-radius:0;border-radius:0;-webkit-border-radius:0;background:#fff;margin:0 auto;}}.search-box .search-box-wrapper{border-color:#fff;border-style:solid;border-width:0;padding:5px;-moz-border-radius:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;-webkit-border-radius:10px 10px 10px 10px;background:#fff;margin:0;}.search-box .search-box-wrapper{border-color:#000;}.content-wrap .group-types ul{border:1px #42186c solid;}.group-types ul li{border:1px #42186c solid;}.group-box{border-color:#fff;}.group-box .group-name{border-bottom:1px #42186c solid;}.group-types ul li.active{background:rgba(66,24,108,0.25);border:#42186c 3px solid;}#uc-group-homepage #uc-more-group-search a.uc-load-more-groups{background:none repeat scroll 0 0 #42186c;border:2px #71afb5 solid;}@media all and (min-width:768px) and (max-width:1000px){.group-details{display:block;float:left;margin:20px 0 0;width:50%;word-wrap:break-word;font-size:.75em;color:#000;line-height:1.6em;}}a:link{color:#42186c;}}@font-face{font-family:'CenturyGothicBold';src:url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothicBold.eot');src:url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothicBold.eot#iefix') format('embedded-opentype'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothicBold.woff') format('woff'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothicBold.ttf') format('truetype'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothicBold.svg#CenturyGothicBold') format('svg');font-weight:normal;font-style:normal;}@font-face{src:url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothic.eot');src:url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothic.eot#iefix') format('embedded-opentype'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothic.woff') format('woff'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothic.ttf') format('truetype'),url('https://d2wcds7obmglv2.cloudfront.net/assets/fonts/CenturyGothic.svg#CenturyGothic') format('svg');font-weight:normal;font-style:normal;}'+ '#left-content {display:none;}#club-society > div.twelvecol > div.uc-middle-panel-for-group-cat > div.threecol.types-list {display:none;}" +"div#left-content {display: block;opacity: 0;} #right-content > div.search.group-search { display:none; } #socqr > canvas { height: 92px; position: relative; top: -5em; left: 50em; right: -42em; bottom: 5em; }@media print {.group-box {height: 150px;}.group-details {margin: 35px 0 0 20px;width: 80%;font-size: 1em;}.group-box { border-width: 0px; } #club-society > div.twelvecol > div.uc-middle-panel-for-group-cat > div.group-category-title { display:none;}     }" +'</style>'
	   );

		js = ('<script type="text/javascript">' + "async function generateQR() {/* var result = await cloneSocieties();*/ $('.category-box-wrapper > div > a:nth-child(10)').remove(); $('.category-box-wrapper > div > a:nth-child(9)').remove(); $.getScript('https://rawcdn.githack.com/jeromeetienne/jquery-qrcode/master/jquery.qrcode.min.js', function() { $.each($('.group-box'), function(key, value) { let currentHref = $(this).attr('href'); let currentEle  = $(this); $(currentEle).addClass('qrcode').attr('id', 'socqr'); $(currentEle).qrcode(currentHref); }); }); }"
	+ 

	 '</script>');


		qr = ('<script type="text/javascript"> </script> ');


		let header = ('<head>' + jquery + css + js + '</head>');

	   html = '<body onload="generateQR()">' + element + '</body>';//element.innerHTML;
	   blob = new Blob(['\ufeff', header + moddedcss + html + qr], {
	     type: 'text/html'//'application/msword'
	   });
	   url = URL.createObjectURL(blob);
	   link = document.createElement('A');
	   link.href = url;
	   link.download = 'Society_QRs';  // default name without extension
	   document.body.appendChild(link);
	   if (navigator.msSaveOrOpenBlob ) navigator.msSaveOrOpenBlob( blob, 'Society_QRs.html'); // IE10-11
	       else link.click();  // other browsers
	   document.body.removeChild(link);

	    $(".club-container").load("group_type=&group_cat=&search=");
	 };
}