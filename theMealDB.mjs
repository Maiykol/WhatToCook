/** Fetch meal data from the meal db (https://www.themealdb.com/)
 *  information about API in forum (https://forum.kodi.tv/showthread.php?tid=282387)
 * **/

export default class TheMealDB {

    constructor(props) {
    }


    // last numer is API key, 1 is public testing key, can be used for low amount of requests but might be removed
    static API = 'https://www.themealdb.com/api/json/v1/1/';

    // load random meal
    static RANDOM = 'random.php';

    // load details based on meal id
    static DETAILS = 'lookup.php?i=';

    // load latest meals
    static LATEST = 'latest.php';

    // list meal categories
    static CATEGORIES = 'list.php?c=list';

    // list meal areas
    static AREAS = 'list.php?a=list';

    // list ingredients
    static INGREDIENTS = 'list.php?i=list';

    // filter meals by category
    static FILTER_CATEGORY = 'filter.php?c=';

    // filter meals by area
    static FILTER_AREA = 'filter.php?a=';

    // filter meals by ingredient
    static FILTER_INGREDIENT = 'filter.php?i=';


    static get_random() {
        const url = TheMealDB.API + TheMealDB.RANDOM;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        const response = xmlHttp.response;
        return JSON.parse(response);
    }


    static get_details(meal_id) {
        const url = TheMealDB.API + TheMealDB.DETAILS + meal_id;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }

    static get_latest() {
        const url = TheMealDB.API + TheMealDB.LATEST;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static get_categories() {
        const url = TheMealDB.API + TheMealDB.CATEGORIES;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static get_areas() {
        const url = TheMealDB.API + TheMealDB.AREAS;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static get_ingredients() {
        const url = TheMealDB.API + TheMealDB.INGREDIENTS;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static filter_category(category) {
        const url = TheMealDB.API + TheMealDB.FILTER_CATEGORY + category;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static filter_area(area) {
        const url = TheMealDB.API + TheMealDB.FILTER_AREA + area;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }


    static filter_ingredient(ingredient) {
        const url = TheMealDB.API + TheMealDB.FILTER_INGREDIENT + ingredient;
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }

}