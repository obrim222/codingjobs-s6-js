//Ajax
//The technique used to fetch data from a server with Javascript
/*
function reqListener () {
  // console.log(this.responseText);
  var json = JSON.parse(this.responseText);
 // or json["Data"]
 console.log(json);
 console.log(json.name);
 console.log(json.height);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.dev/api/people/1");
oReq.send();
*/

/*
//By default we can omit the method type 
var jqxhr = $.ajax( {method: "GET", url: "https://swapi.dev/api/people/1/" })
  .done(function(data) {
    alert( "success" );
    console.log(data);
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "complete" );
});
*/

/*
$.get( "https://swapi.dev/api/people/1/", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
  console.log( data );
  console.log( JSON.stringify(data) );
});*/

/*
$.get("https://swapi.dev/api/planets/", function (data) {
  data.results.forEach((planet) => {
    if (planet.population === "unkn own") {
      planet.population = "";
    }
    $("#test").append($("<p>").text(planet.name + " " + planet.population));
  });
});
*/
/*
$.get("https://api.coingecko.com/api/v3/indexes", function (data) {
  data.forEach((index) => {
    if (index.name === "unkn own") {
      index.name = "";
    }
    $("#test").append($("<p>").text(index.name + " " + index.market));
  });
});*/

$.get("https://api.coingecko.com/api/v3/coins/swissborg?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function (data) {
  for (const key in data.market_data.current_price) {
    if (Object.hasOwnProperty.call(data.market_data.current_price, key)) {
      const element = data.market_data.current_price[key];
      $("#test").append($("<p>").text(key + " " + element));
    }
  }
});


$.get("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true", function (data) {
  for (const key in data.market_data.current_price) {
    if (Object.hasOwnProperty.call(data.market_data.current_price, key)) {
      const element = data.market_data.current_price[key];
      $("#test2").append($("<p>").text(key + " " + element));
    }
  }
});

