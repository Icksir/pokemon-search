$(function() {
  var api = 'https://pokeapi.co/api/v2/pokemon/';
  var currentPokemonId = 1;
  var buscado;

  function buscarPokemon(buscado, api){
    var url = api + buscado;
    $.getJSON(url, function(data) {
      currentPokemonId = data.id;
      agregarTexto(data.name);
      agregarFoto(data.sprites.front_default);
    })
  }

  function agregarTexto(nombre){
    $('#nombre').text(nombre);
  }

  function agregarFoto(imagen){
    $('#pokemon-image').attr('src', imagen);
  }

  // Botón Enviar
  $('#enviar').click(function() {
    buscado = $('#buscador').val();
    buscarPokemon(buscado, api);
  })

  // Botón Anterior
  $('#anterior').click(function() {
    currentPokemonId -= 1;
    buscarPokemon(currentPokemonId, api);
  })

  // Botón Siguiente
  $('#siguiente').click(function() {
    currentPokemonId += 1;
    buscarPokemon(currentPokemonId, api);
  })
});
