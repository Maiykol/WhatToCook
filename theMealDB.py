import requests


# last numer is API key, 1 is public testing key, can be used for low amount of requests but might be removed
API = 'http://www.themealdb.com/api/json/v1/1/'

# load random meal
RANDOM = 'random.php'

# load details based on meal id
DETAILS = 'lookup.php?i='

# load latest meals
LATEST = 'latest.php'

# list meal categories
CATEGORIES = 'list.php?c=list'

# list meal areas
AREAS = 'list.php?a=list'

# list ingredients
INGREDIENTS = 'list.php?i=list'

# filter meals by category
FILTER_CATEGORY = 'filter.php?c='

# filter meals by area
FILTER_AREA = 'filter.php?a='

# filter meals by ingredient
FILTER_INGREDIENT = 'filter.php?i='


def get_random():
    url = API + RANDOM
    return requests.get(url)


def get_details(meal_id):
    url = API + DETAILS + meal_id
    return requests.get(url)


def get_latest():
    url = API + LATEST
    return requests.get(url)


def get_categories():
    url = API + CATEGORIES
    return requests.get(url)


def get_areas():
    url = API + AREAS
    return requests.get(url)


def get_ingredients():
    url = API + INGREDIENTS
    return requests.get(url)


def filter_category(category):
    url = API + FILTER_CATEGORY + category
    return requests.get(url)


def filter_area(area):
    url = API + FILTER_CATEGORY + area
    return requests.get(url)


def filter_ingredient(ingredient):
    url = API + FILTER_CATEGORY + ingredient
    return requests.get(url)