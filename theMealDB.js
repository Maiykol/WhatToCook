/** Fetch meal data from the meal db (https://www.themealdb.com/)
 *  information about API in forum (https://forum.kodi.tv/showthread.php?tid=282387)
 * **/

// last numer is API key, 1 is public testing key, can be used for low amount of requests but might be removed
const API = 'https://www.themealdb.com/api/json/v1/1/';

// load random meal
const RANDOM = 'random.php';

// load details based on meal id
const DETAILS = 'lookup.php?i=';

// load latest meals
const LATEST = 'latest.php';

// list meal categories
const CATEGORIES = 'list.php?c=list';

// list meal areas
const AREAS = 'list.php?a=list';

// list ingredients
const INGREDIENTS = 'list.php?i=list';

// filter meals by category
const FILTER_CATEGORY = 'filter.php?c=';

// filter meals by area
const FILTER_AREA = 'filter.php?a=';

// filter meals by ingredient
const FILTER_INGREDIENT = 'filter.php?i=';


function get_random() {
    const url = API + RANDOM;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function get_details(meal_id) {
    const url = API + DETAILS + meal_id;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}

function get_latest() {
    const url = API + LATEST;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function get_categories() {
    const url = API + CATEGORIES;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function get_areas() {
    const url = API + AREAS;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function get_ingredients() {
    const url = API + INGREDIENTS;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function filter_category(category) {
    const url = API + FILTER_CATEGORY + category;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function filter_area(area) {
    const url = API + FILTER_CATEGORY + area;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}


function filter_ingredient(ingredient) {
    const url = API + FILTER_CATEGORY + ingredient;
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}