
$("#lista").on("change",function () {  
let opcionLista = $("#lista").val()
switch (opcionLista) {
  case "1":

  $("#imagen").attr("src", "https://picsum.photos/id/688/600/400")
  $("#texto").html(`Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.<br>
  <a href="#" class="card-link">Conocer más</a> <br>`)
  $("#titulo").html(`T R E K K I N G <br>
  <span id="lugar" class="fs-5"><i class="bi bi-geo-alt"></i> Volcan Villarica</span>`)
    break;
    case "2":

    $("#imagen").attr("src", "https://picsum.photos/id/128/600/400")
    $("#texto").html(`La natación es la práctica recreativa o deportiva del movimiento y desplazamiento sobre el agua, empleando sólo los brazos y las piernas del cuerpo humano.<br>
    <a href="#" class="card-link">Conocer más</a> <br>`)
    $("#titulo").html(`N A T A C I Ó N <br>
    <span id="lugar" class="fs-5"><i class="bi bi-geo-alt"></i> Lago Cochrane</span>`)

      break;
      case "3":

      $("#imagen").attr("src", "https://picsum.photos/id/211/600/400")
      $("#texto").html(`Un transbordador o trasbordador​ es una embarcación que enlaza dos puntos llevando pasajeros y a veces vehículos, normalmente en horarios programados.<br>
      <a href="#" class="card-link">Conocer más</a> <br>`)
      $("#titulo").html(`F E R R Y <br>
      <span id="lugar" class="fs-5"><i class="bi bi-geo-alt"></i> Lago LLanquihue</span>`)
        break;
  default:
    break;
}

})

$("#card").mouseenter(function(){
  $("#card_1").removeClass("d-none")
})
$("#card").mouseleave(function(){
  $("#card_1").addClass("d-none")
})