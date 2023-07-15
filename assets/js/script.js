var cityInput = document.querySelector(".inputText")
var weatherContainer = document.querySelector('.weather')
var inputValue = $('.inputTxt').val();



function getLatLong () {
var inputValue = $('.inputTxt').val();
var apiURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&limit=1&appid=633f2ef3a054cf44fe6adc7f6717f94c'
fetch(apiURL)
.then(function (response){
  return response.json();
})
.then(function (data){
  for(var i=0; i< data.length; i++){
  var latInput = (data[i].lat);
  var lonInput = (data[i].lon);
  console.log(latInput);
  console.log(data);
  var weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latInput + '&lon=' + lonInput + '&appid=633f2ef3a054cf44fe6adc7f6717f94c&units=imperial';
  
  fetch(weatherURL)
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    console.log(data);
    for(var a=0; a< data.length; a+8){
      var day = (data[i].list.dt_txt);
      var temp = (data[i].main.temp);
      var wind = (data[i].wind.speed);
      var humid = (data[i].humidity);
      console.log(day);
    }
  });
  }
});
};


$('.inputBtn').on('click', getLatLong)

