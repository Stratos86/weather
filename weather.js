$(function() {
  var handleWeatherResponse = function(weather) {
    // "weather" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(weather);

    // We also set a window-level variable so we can use it in the console,
    // by typing "weather"
    window.weather = weather;

    // Put your code here. Don't change any other code in this file. You will be sad.
    var text = { current: "The current forecast is ",
    temp: " with a temperature of " ,
    windchill: " and a windchill of ",
    date: "The forecast on ",
    is: " is ",
    period: ". ",
    tmrw: "The forecast for tomorrow is ",
    second: "The forecast two days from now is ",
    third: "The forecast three days from now is "
  }
    var markup = text.current + weather.currently.summary + text.temp + Math.round(weather.currently.temperature) + text.windchill + Math.round(weather.currently.apparentTemperature-weather.currently.temperature) + text.period + "<br>"
    + text.tmrw + weather.daily.data[1].summary + text.temp + Math.round(weather.daily.data[1].temperatureMax) + text.windchill + Math.round(weather.daily.data[1].apparentTemperatureMax - weather.daily.data[1].temperatureMax) + text.period + "<br>"
    + text.second + weather.daily.data[2].summary + text.temp + Math.round(weather.daily.data[2].temperatureMax) + text.windchill + Math.round(weather.daily.data[2].apparentTemperatureMax - weather.daily.data[2].temperatureMax) + text.period + "<br>"
    + text.third + weather.daily.data[3].summary + text.temp + Math.round(weather.daily.data[3].temperatureMax) + text.windchill + Math.round(weather.daily.data[3].apparentTemperatureMax - weather.daily.data[3].temperatureMax) + text.period
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML)
    // and write it out to the page.
    $('.weather-report').html(markup);
  }

  // The "glue" that makes it all work. Don't really worry about this for now.
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
