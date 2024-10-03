function updateTime() {
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = moment().format("MMMM Do YYYY");

  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = moment().format("MMMM Do YYYY");

  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
