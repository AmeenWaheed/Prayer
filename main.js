let select = document.querySelector("select");

// Check data on local storage
if (window.localStorage.getItem("select")) {
    select.value = window.localStorage.getItem("select");
}

let span = document.querySelector("caption span");
let dateElement = document.querySelector(".date-hijri span");

let fajr = document.getElementById("fajr");
let sun = document.getElementById("sun");
let zohr = document.getElementById("zohr");
let asr = document.getElementById("asr");
let maghreb = document.getElementById("maghreb");
let isha = document.getElementById("esha");


function getData(value) {
    // Save data on local storage
    window.localStorage.setItem("select", value);

    // Fetch api link
    fetch("https://api.aladhan.com/v1/timingsByCity?city="+value+"&country=Egypt")
        .then(response => response.json())
        .then(result => {
            span.innerHTML = `${result.data.date.readable}`;
            dateElement.innerHTML = `${result.data.date.hijri.date}`

            // Add prayer times to prayer name
            fajr.innerHTML = `${result.data.timings["Fajr"]}`;
            sun.innerHTML = `${result.data.timings["Sunrise"]}`;
            zohr.innerHTML = `${result.data.timings["Dhuhr"]}`;
            asr.innerHTML = `${result.data.timings["Asr"]}`;
            maghreb.innerHTML = `${result.data.timings["Maghrib"]}`;
            isha.innerHTML = `${result.data.timings["Isha"]}`;
        });
}

select.onchange = function () {
    getData(select.value);
};
window.onload = getData(select.value);

window.onload = function () {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
}

// Random Image background


setInterval(() => {
    const imgArray = ["mosque.jpg", "travel.jpg", "pexel.webp"];

    let randomIndex = Math.floor(Math.random() * imgArray.length);

    let randomImage = imgArray[randomIndex];

    document.body.style.backgroundImage = `url('/${randomImage}')`;
}, 5000);