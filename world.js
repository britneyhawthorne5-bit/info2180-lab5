window.onload = function () {

    const countryBtn = document.querySelector("#lookup");
    const citiesBtn = document.querySelector("#lookup-cities");

    countryBtn.addEventListener("click", function () {
        fetchResults("country");
    });

    citiesBtn.addEventListener("click", function () {
        fetchResults("cities");
    });
};


function fetchResults(type) {
    const country = document.querySelector("#country").value.trim();

    let url = "world.php?country=" + encodeURIComponent(country);

    if (type === "cities") {
        url += "&lookup=cities";
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector("#result").innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
            document.querySelector("#result").innerHTML = "<p>Error loading data.</p>";
        });
}

