const loadDataRandomUser = () => {
  const url = "https://randomuser.me/api/?gender=female";
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
  console.log(myData.picture.large);
  img.src = myData.picture.large;

  const container = document.getElementById("container");
  const userDitals = document.createElement("div");
  userDitals.classList.add("h1-class");
  userDitals.innerHTML = `
  <h1>Name: ${
    myData.name.title + " " + myData.name.first + " " + myData.name.last
  }</h1>
  <h2>Address: ${myData.location.city}, Country: ${
    myData.location.country
  } </h2>
  <h2>Email: ${myData.email} </h2>`;
  container.appendChild(userDitals);
};
