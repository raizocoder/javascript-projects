const countryContainer = document.querySelector(".countries-container");
const filterRegion = document.querySelector(".filter-region");
const searchfield = document.querySelector(".search-field");
const darkInputBtn = document.getElementById("darkInput");

let allCountriesdata;
fetchData();

function fetchData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      allCountriesdata = data;
      renderCountries(data);
    });
}

filterRegion.addEventListener("change", (e) => {
  if (!e.target.value) {
    fetchData();
  } else {
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
      .then((response) => response.json())
      .then((data) => {
        renderCountries(data);
      });
  }
});

function renderCountries(data) {
  countryContainer.innerHTML = "";
  // console.log(data);
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.innerHTML = `<div class="loading">Loading</div>`;
    countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="flag" />
      <div class="card-text">
        <h3 class="card-title">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
      </div>
      `;
    countryContainer.append(countryCard);
  });
}
searchfield.addEventListener("input", function (e) {
  const filterCountriesdata = allCountriesdata.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCountries(filterCountriesdata);
});
