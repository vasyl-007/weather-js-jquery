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

$(document).ready(function () {
  $.getJSON("current.city.list.json", function (data) {
    $("select").on("change", function () {
      var out = "";
      for (var key in data) {
        if (data[key].country == $("select option:selected").val()) {
          out += `<p value="${data[key].id}">${data[key].name}</p>`;
        }
      }
      $("#city").html(out);
      $("#city p").on("click", function () {
        $.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            id: $(this).attr("value"),
            appid: "1ff1918715439a2097fc17cb4b7ba3bf",
          },
          function (data) {
            console.log(data);
            let out = "";
            out += "Weather: <b>" + data.weather[0].main + "</b><br>";
            out +=
              '<p style="text-align:center"><img src="https://openweathermap.org/img/w/' +
              data.weather[0].icon +
              '.png"</p>';
            out += "Humidity: <b>" + data.main.humidity + "%</b><br>";
            out +=
              "Preassure: <b>" +
              Math.round(data.main.preassure * 0.00750063 * 100) +
              "</b><br>";
            out += "Visibility: <b>" + data.visibility / 100 + "km</b><br>";
            console.log(data.main);
            $("#weather").html(out);
          }
        );
      });
    });
  });
});

// $(document).ready(function () {
//   $.get(
//     "https://api.openweathermap.org/data/2.5/weather",
//     {
//       id: "703448",
//       appid: "1ff1918715439a2097fc17cb4b7ba3bf",
//     },
//     function (data) {
//       console.log(data);
//     }
//   );
// });

// const a = "df";
// $.get("api.openweathermap.org/data/2.5/weather?q=London");
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
