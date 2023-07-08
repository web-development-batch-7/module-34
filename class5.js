const loadMeals = (input) => {
    const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    fetch(API)
        .then(res => res.json())
        .then(data => displaymeal(data.meals))
}


const displaymeal = (meals) => {


    const mealContainer = document.getElementById('mealContainer')
    mealContainer.innerHTML = ''

    for (const meal of meals) {
        // console.log(meal);

        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML =
            `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${meal.strMeal} </h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.<p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    }
}


const mealBtn = () => {
    // console.log('clicked');
    const input = document.getElementById('input').value;
    // console.log(input);
    loadMeals(input)
}

