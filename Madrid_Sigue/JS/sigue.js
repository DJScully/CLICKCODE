$(document).ready(function() {
	var mayor = $('.nav').eq(1).width(); // tomamos el valor primero como mayor
	// recorremos cada card existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.nav').each(function() {
	  if ($(this).width() > mayor) mayor = $(this).width();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.nav').width(mayor);
  });

  $(document).ready(function() {
	var mayor = $('.redes').eq(1).width(); // tomamos el valor primero como mayor
	// recorremos cada card existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.redes').each(function() {
	  if ($(this).width() > mayor) mayor = $(this).width();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.redes').width(mayor);
  });


  $(document).ready(function() {
	var mayor = $('.superior').eq(1).width(); // tomamos el valor primero como mayor
	// recorremos cada card existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.superior').each(function() {
	  if ($(this).width() > mayor) mayor = $(this).width();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.superior').width(mayor);
  });


  
  $(document).ready(function() {
	var mayor = $('.list').eq(1).width(); // tomamos el valor primero como mayor
	// recorremos cada card existente comparando su altura con la variable ya almacenada
	// si la altura almacenada es menor a la altura del loop se asigna nuevamente
	$('.list').each(function() {
	  if ($(this).width() > mayor) mayor = $(this).width();
	});
	// con la variable ya almacenada con el valor mayor se asigna a todas las variables
	$('.list').width(mayor);
  });

