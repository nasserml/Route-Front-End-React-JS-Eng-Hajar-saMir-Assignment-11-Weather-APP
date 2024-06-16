var weatherSearchInput = document.getElementById('weatherSearch');
var searchButton = document.getElementById('searchButton');
var todayCurrentConditionIcon=document.querySelector('#todayCurrentConditionIcon');
var currentCity = document.querySelector('#currentCity');
var todayDegree= document.querySelector('#todayDegree');
var todayWeatherType = document.querySelector('#todayWeatherType');

var windKPH =document.querySelector('#windKPH');
var humditity = document.querySelector('#humidity');
var windDirection = document.querySelector('.windDirection');

var cityWeathers;


var apiKey= '5f9509b5f4c64294a83163138241406';
 
function searchWeather() {
    if(weatherSearchInput.value.length >= 3){
        dispaly(weatherSearchInput.value);
    }
}


searchButton.addEventListener('click', searchWeather);


async function getTheWeather(city, apiKey){
    try {
        var url = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`);
        var res = await url.json();

        cityWeathers=res;


    } catch (error) {
        console.log(error);
    }
}





async function dispaly(city){
    // await getTheCurrentHourTemprature(city,apiKey);
    await getTheWeather(city,apiKey);
    displayToDay();
    displayTomorrow();
    displayOvermorrow();

}



function displayToDay(){
    currentCity.innerHTML = cityWeathers.location.name;
    todayDegree.innerHTML = `${cityWeathers.current.temp_c}<span>o</span>C`
    todayCurrentConditionIcon.innerHTML = `<img src="${cityWeathers.current.condition.icon}" alt="">`;
    todayWeatherType.innerHTML = cityWeathers.current.condition.text;
    windKPH.innerHTML=`${cityWeathers.current.wind_kph}km/h`;
    humidity.innerHTML = `${cityWeathers.current.humidity}%`;
    windDirection.innerHTML = `${getTheWindDirection(cityWeathers.current.wind_dir)}`;
}


var tomorowDegree = document.querySelector('#tomorowDegree');
var tomorowDegreeMinTemp = document.querySelector('#tomorowDegreeMinTemp');
var tomorrowWeatherType =document.querySelector('#tomorrowWeatherType');
var tomorrowIcon = document.querySelector('#tomorrowIcon');

function displayTomorrow(){
    tomorrowIcon.setAttribute('src', cityWeathers.forecast.forecastday[1].day.condition.icon);
    tomorowDegree.innerHTML = `${cityWeathers.forecast.forecastday[1].day.maxtemp_c}<span>o</span>C`;
    tomorowDegreeMinTemp.innerHTML = `${cityWeathers.forecast.forecastday[1].day.mintemp_c}<span>o</span>`;
    tomorrowWeatherType.innerHTML = cityWeathers.forecast.forecastday[1].day.condition.text;

}



var overMorrowIcon = document.querySelector('#overMorrowIcon');
var overMorrowMaxDegree = document.querySelector('#overMorrowMaxDegree');
var overMorrowMinDegree = document.querySelector('#overMorrowMinDegree');
var overMorrowWeatherType = document.querySelector('#overMorrowWeatherType');

function displayOvermorrow(){
    overMorrowIcon.setAttribute('src', cityWeathers.forecast.forecastday[2].day.condition.icon);
    overMorrowMaxDegree.innerHTML = `${cityWeathers.forecast.forecastday[2].day.maxtemp_c}<span>o</span>C`;
    overMorrowMinDegree.innerHTML = `${cityWeathers.forecast.forecastday[2].day.mintemp_c}<span>o</span>`;
    overMorrowWeatherType.innerHTML = cityWeathers.forecast.forecastday[2].day.condition.text;

}


function getTheWindDirection(key){
    var windDirectionsObject= { 'W':'West', 'E':'East' , 'NW':'North West', 'SW': 'South West','N':'North','S':'South','NE':'North East','SE':'South East',
    'NNE':'North North East','NNW':'North North West','SSE':'South South East','SSW':'South South West','ENE':'East North East','ESE':'East South East','WNW':'West North West','WSW':'West South West'};

    return windDirectionsObject[key];
}



getTheUserCurrentCity();



async function getTheUserCurrentCity(){
    var url = await fetch(`https://api.ipify.org?format=json`);
    var res= await url.json(); // Getting the ip address of the user
    
    var ipUrl= await fetch(`https://ipapi.co/${res.ip}/json/`)
    var ipRes = await ipUrl.json();
    dispaly(ipRes.city); // Dispalying the weather city of the user

}





