// Event Listener 1: User clicks a dropdown arrow to 
//make a "select" object (default behavior is to provide a dropdown list); 
//the "select" object should have an id field/should be a form element

fetchBreweries()

//Decide what happens if fetchBreweries() returns an error
document.addEventListener('DOMContentLoaded', async () => {
    let breweries = [];

    try {
        breweries = await fetchBreweries()
    } catch (error) {
        console.error(error);
    }

    console.log(breweries);
});

//Fetch brewery data from API and get a promise
async function fetchBreweries() {
    const response = await fetch("https://api.openbrewerydb.org/breweries?by_state=texas");
    const breweries = await response.json();
    
    return breweries;
}

//Filter cities 
async function renderCities() {
    let data = await fetchBreweries();
    data.filter(brewery => {
        console.log(brewery.city);
    });
}
//Call renderCities()
renderCities();






