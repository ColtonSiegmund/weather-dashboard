// grab user input
// concat API link
var cityInput = document.querySelector(".inputText")
var weatherContainer = document.querySelector('.weather')
var inputValue = $('.inputTxt').val();



function getLatLong () {
var inputValue = $('.inputTxt').val();
var apiURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&limit=1&appid=633f2ef3a054cf44fe6adc7f6717f94c';
fetch(apiURL)
.then(function (response){
  return response.json();
})
.then(function (data){
  for(var i=0; i< data.length; i++){
  var latInput = (data[i].lat);
  var lonInput = (data[i].lon);
  };
})
.then(function (fetch){
  var weatherURL = 'api.openweathermap.org/data/2.5/forecast?lat=' + latInput + '&lon=' + data[i].lon + '&appid=633f2ef3a054cf44fe6adc7f6717f94c';
})
};

function getWeather() {
  var weatherURL = 'api.openweathermap.org/data/2.5/forecast?lat=' + latInput + '&lon=' + data[i].lon + '&appid=633f2ef3a054cf44fe6adc7f6717f94c';
  fetch (weatherURL)
  .then(function(response){
    return response.json();
})
console.log(weatherURL)
};

$('.inputBtn').on('click', getLatLong)

