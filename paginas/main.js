	

/***********************JavaScript***********************/


	var social=document.getElementsByClassName("Rs");

	var Cambio=function(x){
			window.document["imagen"].src=img[x];
		}
	
	


	var vidMiami=["../videos/y2mate.com - Como Preparar Ceviche Peruano en un Toque _ Cocina Fácil_480p.mp4"];
	var vidAreq=["../videos/y2mate.com - ARROZ CON MARISCOS RECETA PERUANA FÁCIL Y RÁPIDA DE PREPARAR_480p.mp4"];
	var vidSaoPau=["../videos/y2mate.com - Como Preparar Leche de Tigre_480p.mp4"];	
	var vidOrl=["../videos/y2mate.com - CHILCANO DE PESCADO _ NUTRITIVO Y RICO _ RECETA FÁCIL_480p.mp4"];
	var vidCuz=["../videos/y2mate.com - CHUPE DE PESCADO_480p.mp4"];


	var verImg1 = function(a,b){
		
			document.querySelectorAll("article video")[0].src=b[a];
			document.querySelectorAll("article video")[1].src=b[a];
			a++ 
			document.querySelectorAll("article video")[2].src=b[a];
			a++
			document.querySelectorAll("article video")[3].src=b[a];
			a++
			document.querySelectorAll("article video")[4].src=b[a];
			a++
			document.querySelectorAll("article video")[5].src=b[a];
	}
			
			

$(document).ready(function() {
	
	$(".rs").mouseover(function(event) {
		switch ($(this).data('rs')) {
			case 0:
				// statements_1
				$(this).attr('src', 'fb1.png');
				break;
			case 1:
				$(this).attr('src', 'gmail1.png');
				break;
			case 2:
				$(this).attr('src', 'yt1.png');
				break;
			default:
				$(this).attr('src', 'tw1.png');
				// statements_def
				break;
		}
	});



	
	
	
	$(".cont_baner").cycle({
		fx:'zoom',
		timeout:2000,
		delay:-1000
	});
	
	$("nav li").mouseover(function(event) {
		/* Act on the event */
		$(this).css({
			'background': 'orange',
			'text-decoration': 'underline'
		});
	});
	$("nav li").mouseout(function(event) {
		/* Act on the event */
		$(this).css({
			'background': 'black',
			'text-decoration': 'none'
		});
	});
	$(".cont").mouseover((function(event) {
			/* Act on the event */
			$(this).find($("p")).css({
				'visibility': 'visible'
			}).end();
		}));
	$(".cont").mouseout(function(event) {
		/* Act on the event */
		$(this).find($("p")).css({
			'visibility': 'hidden'
		}).end();
	});

	$(".cont").mouseover(function(event) {
		/* Act on the event */
		$(this).css('text-decoration', 'underline');
	});

	$(".cont").mouseout(function(event) {
		/* Act on the event */
		$(this).css('text-decoration', 'none');
	});

	$(".livd").click(function(event) {
		/* si se desea modificar los videos solo hay que descargalos y cambiar el nombre */
		/* Act on the event */
		switch ($(this).data('livd')) {
			case 1:/*En cuanto le das click comenzara a reproducir el video*/
				$(".cont-video video").attr({
					'src': 'Dread_Mar_I_-_arbol_sin_hojas(youtube.com).mp4',
					//'autoplay': 'true',
					'poster':'2.jpg'/*es para una personalizada del video antes de reproducirse
				*/
				});
				break;
			case 2:
				$(".cont-video video").attr('src', '32_Habitos_Que_Te_Mantienen_Pobre(youtube.com).mp4');
				break;
			case 3:
				$(".cont-video video").attr('src', 'Dread_Mar_I_-_arbol_sin_hojas(youtube.com).mp4');
				break;
			case 4:
				$(".cont-video video").attr('src', '32_Habitos_Que_Te_Mantienen_Pobre(youtube.com).mp4');
				break;
			case 5:
				$(".cont-video video").attr('src', 'Dread_Mar_I_-_arbol_sin_hojas(youtube.com).mp4');
				break;
			default:
				$(".cont-video video").attr('src', 'Dread_Mar_I_-_arbol_sin_hojas(youtube.com).mp4');
				break;
		}
	});
});

