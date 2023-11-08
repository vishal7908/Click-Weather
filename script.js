const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a455323dbcmshc66c170f51f8da3p142658jsn7f153ee0db0d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce);
    //Kolkata
    cloud_pct_Kol.innerHTML = responce.cloud_pct;
    feels_like_Kol.innerHTML = responce.feels_like;
    humidity_Kol.innerHTML = responce.humidity;
    max_temp_Kol.innerHTML = responce.max_temp;
    min_temp_Kol.innerHTML = responce.min_temp;
    temp_Kol.innerHTML = responce.temp;
    wind_speed_Kol.innerHTML = responce.wind_speed;
    wind_degrees_Kol.innerHTML = responce.wind_degrees;
    sunrise_Kol.innerHTML = responce.sunrise;
    sunset_Kol.innerHTML = responce.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce);
    // Mumbai
    cloud_pct_Mum.innerHTML = responce.cloud_pct;
    feels_like_Mum.innerHTML = responce.feels_like;
    humidity_Mum.innerHTML = responce.humidity;
    max_temp_Mum.innerHTML = responce.max_temp;
    min_temp_Mum.innerHTML = responce.min_temp;
    temp_Mum.innerHTML = responce.temp;
    wind_speed_Mum.innerHTML = responce.wind_speed;
    wind_degrees_Mum.innerHTML = responce.wind_degrees;
    sunrise_Mum.innerHTML = responce.sunrise;
    sunset_Mum.innerHTML = responce.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce);
    // Bangalore
    cloud_pct_Ban.innerHTML = responce.cloud_pct;
    feels_like_Ban.innerHTML = responce.feels_like;
    humidity_Ban.innerHTML = responce.humidity;
    max_temp_Ban.innerHTML = responce.max_temp;
    min_temp_Ban.innerHTML = responce.min_temp;
    temp_Ban.innerHTML = responce.temp;
    wind_speed_Ban.innerHTML = responce.wind_speed;
    wind_degrees_Ban.innerHTML = responce.wind_degrees;
    sunrise_Ban.innerHTML = responce.sunrise;
    sunset_Ban.innerHTML = responce.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options
)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce);
    //Lucknow
    cloud_pct_Lok.innerHTML = responce.cloud_pct;
    feels_like_Lok.innerHTML = responce.feels_like;
    humidity_Lok.innerHTML = responce.humidity;
    max_temp_Lok.innerHTML = responce.max_temp;
    min_temp_Lok.innerHTML = responce.min_temp;
    temp_Lok.innerHTML = responce.temp;
    wind_speed_Lok.innerHTML = responce.wind_speed;
    wind_degrees_Lok.innerHTML = responce.wind_degrees;
    sunrise_Lok.innerHTML = responce.sunrise;
    sunset_Lok.innerHTML = responce.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce);
    //Delhi

    cloud_pct_delhi.innerHTML = responce.cloud_pct;
    feels_like_delhi.innerHTML = responce.feels_like;
    humidity_delhi.innerHTML = responce.humidity;
    max_temp_delhi.innerHTML = responce.max_temp;
    min_temp_delhi.innerHTML = responce.min_temp;
    temp_delhi.innerHTML = responce.temp;
    wind_speed_delhi.innerHTML = responce.wind_speed;
    wind_degrees_delhi.innerHTML = responce.wind_degrees;
    sunrise_delhi.innerHTML = responce.sunrise;
    sunset_delhi.innerHTML = responce.sunset;
  })
  .catch((err) => console.error(err));

//main portion of search

const getWeather = (city) => {
  // let f_city = city;
  city_Name.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((responce) => responce.json())
    .then((responce) => {
      console.log(responce);
      // cloud_pct.innerHTML = responce.cloud_pct;
      temp.innerHTML = responce.temp;
      temp2.innerHTML = responce.temp;
      feels_like.innerHTML = responce.feels_like;
      humidity.innerHTML = responce.humidity;
      humidity2.innerHTML = responce.humidity;
      min_temp.innerHTML = responce.min_temp;
      max_temp.innerHTML = responce.max_temp;
      wind_speed.innerHTML = responce.wind_speed;
      wind_speed2.innerHTML = responce.wind_speed;
      wind_degrees.innerHTML = responce.wind_degrees;

      // sunrise.innerHTML = responce.sunrise;
      // Unix timestamp in seconds
      const timestamp = responce.sunrise;

      // Create a Date object with the timestamp (in milliseconds, so multiply by 1000)
      const date = new Date(timestamp * 1000);

      // Define the options for formatting
      const options = {
        timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      // Format the date to hh:mm:ss in IST
      const istTime = new Intl.DateTimeFormat("en-IN", options).format(date);
      sunrise.innerHTML = istTime;
      // console.log(istTime);

      // sunset.innerHTML = responce.sunset;/

      // Unix timestamp in seconds
      const timestamp1 = responce.sunset;

      // Create a Date object with the timestamp (in milliseconds, so multiply by 1000)
      const date1 = new Date(timestamp1 * 1000);

      // Define the options for formatting
      const options1 = {
        timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      // Format the date to hh:mm:ss in IST
      const istTime1 = new Intl.DateTimeFormat("en-IN", options1).format(date1);
      sunset.innerHTML = istTime1;
    })
    .catch((err) => console.error(err));
};

document.addEventListener("DOMContentLoaded", function () {
  //this function is use to laod DOM after loading the html page
  document.getElementById("submit").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    e.preventDefault();

    getWeather(city);
  });
});
getWeather("Delhi");
