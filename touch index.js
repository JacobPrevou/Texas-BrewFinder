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
    const select = document.getElementById('input')
    const list = document.createElement('ul')
    const option = document.createElement('OPTION')
    
    list.innerHTML = data.map(brewery => {
        return brewery.city;
        //option.innerHTML = brewery.city;

    });
    option.appendChild(list);
    select.appendChild(option)
    //option.innerHTML = cityList;
    //list.appendChild(option);
    //option.innerHTML = `<option>${cityList}</option>`
    //list.appendChild(option)
}
//Call renderCities()
renderCities();

//function renderCity(json) {
//     document.querySelector('input')
//      json.filter(brewery => {
//         brewery.city;
//      })
//      const ul = document.createElement('ul')
//      ul.innerHTML = `<ul>${brewery.city}</ul>`
//      select.appendChild(ul)
//}

    // document.addEventListener('DOMContentLoaded', async () => {
    //     let breweries = [];

    //     try {
    //         breweries = await fetchBreweries()
    //     } catch (error) {
    //         console.error(error);
    //     }

    //     console.log(breweries);
    // });

// document.addEventListener('DOMContentLoaded', async () => {
//     let breweries = [];
//     const select = breweries.filter(obj => {
//         console.log(obj.city);
//         const list = document.getElementById('input')
//         const ul = document.createElement('ul')
//         ul.innerHTML = `<ul>${obj.city}</ul>`
//         list.appendChild(ul)
//     })
// })



//const selection = document.getElementById('input')




