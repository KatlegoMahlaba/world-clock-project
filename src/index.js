function updateTime() {
  updateCityTime("#johannesburg", "Africa/Johannesburg");
  updateCityTime("#bangkok", "Asia/Bangkok");
  updateCityTime("#sydney", "Australia/Sydney");
}

function updateCityTime(elementId, timeZone) {
  let element = document.querySelector(elementId);
  if (element) {
    let dateElement = element.querySelector(".date");
    let timeElement = element.querySelector(".time");
    let time = moment().tz(timeZone);
    dateElement.innerHTML = time.format("MMMM Do YYYY");
    timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">Other cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
