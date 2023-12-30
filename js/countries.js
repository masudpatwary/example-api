const loadDataCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadData(data));
};

const displayLoadData = (countries) => {
  countries.forEach((country) => {
    // console.log(country.cca2);

    const countriesContainer = document.getElementById("countries-container");
    const countriesDiv = document.createElement("div");
    countriesDiv.classList.add("country");

    countriesDiv.innerHTML = `Country: ${country.name.common}
    <p>Capital: ${country.capital}</p>
    <p>Languages: ${
      country.languages?.eng ? country.languages.eng : "National Language"
    }</p>
    <img src="${country.flags.png}"></img>
    <button onclick="showDataDisplay('${country.cca2}')">Ditals</button>`;

    countriesContainer.appendChild(countriesDiv);
  });
};

const showDataDisplay = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDitalsDataLoad(data[0]));
};

const showDitalsDataLoad = (country) => {
  console.log(country);
  const ditals = document.getElementById("ditals-div");

  ditals.innerHTML = `
  <h1>Country: ${country.name.common}</h1>
  <h3>Country: ${country.capital}</h3>
  <img src="${country.flags.png}"></img>`;
};

loadDataCountries();
