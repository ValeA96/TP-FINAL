//contador javascript

// establecer la fecha futura
var countDownDate = new Date("jul, 1 2023 00:00:00").getTime();

// actualizar el temporizador cada segundo
var x = setInterval(function () {
  // obtener la fecha actual
  var now = new Date().getTime();

  // calcular la diferencia de tiempo entre la fecha futura y la fecha actual
  var distance = countDownDate - now;

  // calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // mostrar el resultado en un elemento HTML
  document.getElementById("countdown").innerHTML = `<div class="d-flex">
  <div class="container-date d-flex align-items-center justify-content-center flex-column">
    <div><h3 class="m-0">${days}</h3></div>
    <div><p class="m-0">Días</p></div>
  </div>
  <div class="container-date d-flex align-items-center justify-content-center flex-column">
    <div><h3 class="m-0">${hours}</h4></div>
    <div><p class="m-0">Horas</p></div>
  </div>
  <div class="container-date d-flex align-items-center justify-content-center flex-column">
    <div><h3 class="m-0">${minutes}</h4></div>
    <div><p class="m-0">Minutos</p></div>
  </div>
  <div class="container-date d-flex align-items-center justify-content-center flex-column">
    <div><h3 class="m-0">${seconds}</h4></div>
    <div><p class="m-0">Segundos</p></div>
  </div>
</div>`;
 
  // si el tiempo ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
