console.log("Hello!");

$(document).ready(function () {
  $.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      id: "703448",
      appid: "1ff1918715439a2097fc17cb4b7ba3bf",
    },
    function (data) {
      console.log(data);
    }
  );
});

// const a = "df";
// $.get("api.openweathermap.org/data/2.5/weather?q=London");
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
