var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 0
});

var mySwiper = document.querySelector('.swiper-container').swiper




$(document).ready(function() {
	var mayor = $('.card').eq(1).height(); // tomamos el valor primero como mayor
	// recorremos cada card existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.card').each(function() {
	  if ($(this).height() > mayor) mayor = $(this).height();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.card').height(mayor);
  });




  $(document).ready(function() {
	var mayor = $('.space').eq(5).height(); // tomamos el valor primero como mayor
	// recorremos cada space existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.space').each(function() {
	  if ($(this).height() > mayor) mayor = $(this).height();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.space').height(mayor);
  });




  
  $(document).ready(function() {
	var mayor = $('.name-card').eq(3).height(); // tomamos el valor primero como mayor
	// recorremos cada space existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.name-card').each(function() {
	  if ($(this).height() > mayor) mayor = $(this).height();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.name-card').height(mayor);
  });

  
  $(document).ready(function() {
	var mayor = $('.servicio').eq(3).height(); // tomamos el valor primero como mayor
	// recorremos cada space existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.servicio').each(function() {
	  if ($(this).height() > mayor) mayor = $(this).height();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.servicio').height(mayor);
  });

  

