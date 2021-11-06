//Make a search bar element and assign it to a variable to reference

//The container
const container = document.createElement('div')
document.body.append(container);
container.className = "container";

//Searchbar wrapper
const searchWrapper = document.createElement('div');
container.appendChild(searchWrapper);
searchWrapper.id = "searchWrapper";

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
        displayBreweries(breweries)
        filteredBreweries = breweries
    })
};
fetchBreweries();

let filteredBreweries = [];

//Create a list element for the brewery "profiles"
const breweryProfiles = document.createElement('ul');
container.append(breweryProfiles);
breweryProfiles.id = "profiles";

//Write a function that will map out the API data/designate the info you want for each brewery profile
const displayBreweries = (breweries) => {
    const htmlString = breweries
        .map((brewery) => {
            return `
            <li class="brewery">
                <h2>${brewery.name}</h2>
                <p>Street: ${brewery.street}</p>
                <p>City: ${brewery.city}</p>
                <p>Zipcode: ${brewery.postal_code}
            </li>
        `;
        })
        .join('');
    breweryProfiles.innerHTML = htmlString;
};

//Create event listener for search inputs that lets you search for breweries by city
input.addEventListener('input', event => {
    const searchStr = event.target.value.toLowerCase();
    let searchResult = filteredBreweries.filter(brewery => {
        return (brewery.city.toLowerCase().includes(searchStr));
    });
    displayBreweries(searchResult);
});