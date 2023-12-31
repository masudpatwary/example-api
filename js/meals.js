// const loadMials = (SearchText) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => loadDataDisplay(data.meals));
// };

const loadMials2 = async (SearchText) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
    const res = await fetch(url);
    const data = await res.json();
    loadDataDisplay(data.meals);
  } catch (eror) {
    console.log(eror);
  }
};

const loadDataDisplay = (meals) => {
  const innerData = document.getElementById("data-container");
  innerData.innerText = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const newDataDiv = document.createElement("div");
    newDataDiv.classList.add("item-design");

    newDataDiv.innerHTML = `
<a href="#">
    <img class="rounded-t-lg" src="${meal.strMealThumb}" alt="" />
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">${meal.strMeal}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-600">Here are the biggest enterprise technology acquisitions of 2021 so
        far, in
        reverse chronological order.</p>
    <button onclick="orderMeals(${meal.idMeal})" type="button" class="btn btn-primary py-2 px-8 bg-blue-500" data-bs-toggle="modal" data-bs-target="#mealsDetails">
    Order
</button>
</div>
  `;
    innerData.appendChild(newDataDiv);
  });
};

const inputField = () => {
  const inputField = document.getElementById("input-field").value;
  loadMials(inputField);
};

// const orderMeals = (orderItem) => {
//   console.log(orderItem);
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${orderItem}`;
//   console.log(url);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => confirmOrderDetails(data.meals[0])).catch = (error) =>
//     console.log(error);
// };

const orderMeals = async (orderItem) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${orderItem}`;
    const res = await fetch(url);
    const data = await res.json();
    confirmOrderDetails(data.meals[0]);
  } catch (eror) {
    console.log(eror);
  }
};

const confirmOrderDetails = (meal) => {
  const foodImg = document.getElementById("food-img");
  foodImg.src = meal.strMealThumb;

  const title = document.getElementById("mealsDetailsLabel");
  title.innerText = meal.strMeal;

  const body = document.getElementById("modal-body");
  body.innerHTML = `<p class="p-2"> (${meal.strCategory}) Here are the biggest enterprise technology acquisitions of 2021 so
        far, in
        reverse chronological order.</p>`;
};

// Alert

const orderConfirmBtn = () => {
  alert("Order SuccessFully Complete");
  return;
};
const orderCencleBtn = () => {
  alert("Are you sure Exit");
  return;
};

loadMials2("a");
