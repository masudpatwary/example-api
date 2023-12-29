const loadDataRandomUser = () => {
  const url = "https://randomuser.me/api";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayRandomUser(data));
};

// const displayRandomUser = (x) => {
//   const random = document.getElementById("random-user");
//   const name =
//     x.results[0].name.title +
//     " " +
//     x.results[0].name.first +
//     " " +
//     x.results[0].name.last;
//   random.innerHTML = name;
// };

const displayRandomUser = (user) => {
  const myData = user?.results?.[0];

  const img = document.getElementById("img");
  img.src = myData.picture.large;

  const name = document.getElementById("user-name");
  name.innerText =
    myData.name.title + " " + myData.name.first + " " + myData.name.last;

  const country = document.getElementById("user-country");
  country.innerText = myData.location.country;

  const address = document.getElementById("address");
  address.innerText = `City: ${myData.location.city},   State: ${myData.location.state} `;

  const contact = document.getElementById("contact");
  contact.innerText = myData.cell;

  const email = document.getElementById("email");
  email.innerText = myData.email;
};
