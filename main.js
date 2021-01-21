import TheMealDB from "./theMealDB.mjs"

console.log("loading js");

function show_meal(meal) {
    const meal_container = document.getElementById("meal_container");
    meal_container.classList.remove("hidden");

    const meal_id = meal.idMeal;
    const title = meal.strMeal;
    const category = meal.strCategory;
    const area = meal.strArea;
    const instructions = meal.strInstructions;
    const image = meal.strMealThumb;
    // ingredients and their measures under "strIngredient1" and "strMeasure1", incrementing

    // add information to document
    document.getElementById("meal_title").innerText = title;
    document.getElementById("meal_category").innerText = category;
    document.getElementById("meal_area").innerText = area;
    document.getElementById("meal_image").src = image;

    // add ingredients to table
    const ingredient_table = document.getElementById("meal_ingredients");
    let i = 1;
    let ingredient_key = `strIngredient`;
    let measurement_key = `strMeasure`;
    while (meal[ingredient_key+i] !== undefined && meal[ingredient_key+i] !== "") {
        const row = document.createElement("tr");
        row.className = "meal_ingredients_entry";

        const ingredient = document.createElement("td");
        ingredient.innerText = `${meal[ingredient_key+i]}`;

        const measure = document.createElement("td");
        measure.innerText = `${meal[measurement_key+i]}`;

        row.appendChild(ingredient);
        row.appendChild(measure);

        ingredient_table.appendChild(row);
        i++;
    }

    // add instructions
    document.getElementById("meal_instructions").innerText = instructions;

    // hide iframe if no content
    // const iframe_youtube = document.getElementById("meal_youtube");
    // iframe_youtube.src = meal.strYoutube;
    // if (meal.strYoutube === "") {
    //     iframe_youtube.style.display = 'none';
    // } else {
    //     iframe_youtube.style.display = 'block';
    // }

}

function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function clear_meal() {
    removeElementsByClass("meal_ingredients_entry");
}


document.getElementById("button_show_random").onclick = function() {
    clear_meal();
    const random_meal = TheMealDB.get_random()['meals'][0];
    show_meal(random_meal);
};