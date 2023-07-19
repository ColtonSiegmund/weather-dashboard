var cityInput = document.querySelector(".inputTxt")
var weatherContainer = document.querySelector('.weather')
var inputValue = $('.inputTxt').val();


// function to fetch API, then concat into next API call
function getLatLong () {
var inputValue = $('.inputTxt').val();
var apiURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&limit=1&appid=633f2ef3a054cf44fe6adc7f6717f94c'
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
  var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latInput + '&lon=' + lonInput + '&appid=633f2ef3a054cf44fe6adc7f6717f94c&units=imperial';
  
  fetch(weatherURL)
  .then(function (response){
    return response.json();
  })
  // looping through the results to get our desired info
  .then(function (data){
    console.log(data);
    for(var i=0; i< data.list.length; i+=8){
      var day = (data.list[i].dt_txt);
      var temp = (data.list[i].main.temp);
      var wind = (data.list[i].wind.speed);
      var humid = (data.list[i].main.humidity);
      console.log(day);
      console.log(temp);
      console.log(wind);
      console.log(humid);
      displayWeather(day, temp, wind, humid);


      let cityNameLS = localStorage.getItem('cityName');

      // Check if previous cities exist in localStorage
      if(cityNameLS) {

        let localStorageString = localStorage.getItem('cityName'); // "['city1', 'city2']"
        let localStorageValue = JSON.parse(localStorageString); // ['city1,'city2']

        localStorageValue.push(cityInput.value);
        localStorageString = JSON.stringify(localStorageValue);
        localStorage.setItem("cityName", localStorageString);

        console.log(localStorageValue)
        // TODO: Dom logic of recently searched cities


      } else { // "" or is not set in localStorage
        let localStorageValue = [cityInput.value];
        let localStorageString = JSON.stringify(localStorageValue);
        localStorage.setItem('cityName', localStorageString);

      }

    }
  });
  }
});
};

// Render recent city searches
let cityNameLS = localStorage.getItem('cityName');
if(cityNameLS) {

  let localStorageString = localStorage.getItem('cityName'); // "['city1', 'city2']"
  let localStorageValue = JSON.parse(localStorageString); // ['city1,'city2']

  for(let i = 0; i<localStorageValue.length; i++) {
    const recentCityDiv = document.createElement('div')
    recentCityDiv.classList = "list-item";
    recentCityDiv.textContent = localStorageValue[i]; // cityName in array

    //document.querySelector("#recent-cities").appendChild(recentCityDiv)
    document.body.appendChild(recentCityDiv)
  }
}

function displayWeather (day, temp, wind, humid) {
  var weatherEl = document.createElement('div');
  weatherEl.classList = 'list-item flex-row justify-space-between align-center';
  weatherEl.textContent = 'Date: ' + day + ' Temperature: ' + temp + ' Wind: ' + wind + ' Humidity: ' + humid;
  document.body.appendChild(weatherEl);

}


$('.inputBtn').on('click', getLatLong)

