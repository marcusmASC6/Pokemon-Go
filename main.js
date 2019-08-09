function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
  return parent.appendChild(el);
  }

  var map;

  function initMap(){

   map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat:1,lng:1}
        });
  }
  let Pokemon;
  let peopleArray = []
  var numUsers = 960;
  let url = `https://pokeapi.co/api/v2/pokemon/?limit=${numUsers}`
  const ul = document.getElementById('people');
  fetch( url )
  .then((resp) => resp.json())
  .then(function(data) {
    Pokemon = data;
    for(let i=0; i<700;i++){
    getRandomPokemon(Pokemon)
    }
  });


  function getRandomPokemon(){
    let a = Math.floor(Math.random()*(Pokemon.results.length +1))
    // console.log(Pokemon.results[a].name)
    // document.getElementById('pokemon').innerHTML = Pokemon.results[0].name
    fetch(Pokemon.results[a].url)
    .then((resp) => resp.json())
    .then(function(pokeData) {
      let PokeCoord = Math.floor(Math.random()*11)
        // console.log(pokeData);
        if(pokeData.sprites.front_shiny != null){
          if (PokeCoord == 1){
            var myLatLng = {lat:40.7128 + Math.random(), lng: -74.0060 + Math.random()};
          }
          else if (PokeCoord == 2){
            var myLatLng = {lat:42.8864 + Math.random(), lng: -78.8784 + Math.random()};
          }
          else if (PokeCoord == 3){
            var myLatLng = {lat:43.1566 + Math.random(), lng: -77.6088 + Math.random()};
          }
          else if (PokeCoord == 4){
            var myLatLng = {lat:40.9312 + Math.random(), lng: -73.8987 + Math.random()};
          }
          else if (PokeCoord == 5){
            var myLatLng = {lat:43.0481 + Math.random(), lng: -76.1474 + Math.random()};
          }
          else if (PokeCoord == 6){
            var myLatLng = {lat:42.6526 + Math.random(), lng: -73.7562 + Math.random()};
          }
          else if (PokeCoord == 7){
            var myLatLng = {lat:40.9115 + Math.random(), lng: -73.7824 + Math.random()};
          }else if (PokeCoord == 8){
            var myLatLng = {lat:40.9126 + Math.random(), lng: -73.8371 + Math.random()};
          }
          else if (PokeCoord == 9){
            var myLatLng = {lat:Schenectady + Math.random(), lng: Schenectady + Math.random()};
          }
          else if (PokeCoord == 10){
            var myLatLng = {lat:Utica + Math.random(), lng: Utica + Math.random()};
          }
            var iconBase = pokeData.sprites.front_shiny
            var marker = new google.maps.Marker({
            position: myLatLng,
            icon: iconBase,
            map: map
            });
        } else {
            getRandomPokemon()
        }
        });
      }