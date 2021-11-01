// Event Listener 1: User clicks a dropdown arrow to 
//make a "select" object (default behavior is to provide a dropdown list); 
//the "select" object should have an id field/should be a form element


async function fetchBreweries() {
    const response = await fetch("https://api.openbrewerydb.org/breweries?by_state=texas");
    const breweries = await response.json();
    
    return breweries;
}

function loadCities(breweries) {
    const selectList = promise.all(breweries).then(values => {
        console.log(values);
        return selectList.city
    })
}

//function renderCity(json) {
//     document.querySelector('input')
//      json.filter(brewery => {
//         brewery.city;
//      })
//      const ul = document.createElement('ul')
//      ul.innerHTML = `<ul>${brewery.city}</ul>`
//      select.appendChild(ul)
//}

document.addEventListener('DOMContentLoaded', async () => {
    let breweries = [];

    try {
        breweries = await fetchBreweries()
    } catch (error) {
        console.error(error);
    }

    const select = breweries.filter(obj => {
        console.log(obj.city);
    })
    console.log(breweries);
});




//const selection = document.getElementById('input')




