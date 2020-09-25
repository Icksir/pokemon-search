$(function() {
  var api = 'https://pokeapi.co/api/v2/pokemon/';
  var currentPokemonId = 1;
  var buscado;

  function buscarPokemon(buscado, api){
    var url = api + buscado;
    $.getJSON(url, function(data) {
      currentPokemonId = data.id;
      var tipo = $('#tipo-pokemon').val();
      var elegido = $('#buscador').val();
      agregarTexto(data.name);  
      if (tipo == 'shiny'){
        agregarFoto(data.sprites.front_shiny)
      } else {
        if (data.sprites.other['official-artwork'].front_default != null){
          agregarFoto(data.sprites.other['official-artwork'].front_default);
        }
        else{
          agregarFoto(data.sprites.front_default);
        }
      }

      if (elegido > 0){
        document.getElementById('buscador').value = currentPokemonId;
      } else {
        document.getElementById('buscador').value = data.name;
      }
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
