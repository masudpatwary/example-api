const loadMials = (SearchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDataDisplay(data.meals));
};

const loadDataDisplay = (meals) => {
  const innerData = document.getElementById("data-container");
  innerData.innerText = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const newDataDiv = document.createElement("div");

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
    <a href="#"
        class="inline-flex items-center py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-8">
        Order
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
    </a>
</div>
  `;
    innerData.appendChild(newDataDiv);
  });
};

const inputField = () => {
  const inputField = document.getElementById("input-field").value;
  loadMials(inputField);
};

loadMials("a");
