//Make a search bar element and assign it to a variable to reference

//The container
const container = document.createElement('div')
document.body.append(container);
container.className = "container";

//Searchbar wrapper
const searchWrapper = document.createElement('div');
container.appendChild(searchWrapper);
searchWrapper.id = "searchBar";

//Create input box for searchBar
const input = document.createElement('input');
searchWrapper.appendChild(input);
input.type = "text";
input.id = "searchBar";
input.placeholder = "Type in a Texas city y'all!"

//Ok you made the searchbar! Now connect with the API

function fetchBreweries() {
    fetch("https://api.openbrewerydb.org/breweries?by_state=texas")
    .then(res => res.json())
    .then(breweries => {
        console.log(breweries)
        filteredBreweries = breweries
    })
};
fetchBreweries();

let filteredBreweries = [];

//Create a list element for the brewery "profiles"
const breweryProfiles = document.createElement('ul');
container.append(breweryProfiles);

