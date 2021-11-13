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


searchBar.addEventListener('input', event => {
    event.preventDefault()
    const searchString = event.target.value.toLowerCase();
    let searchResult = filteredBreweries.filter(brewery => {
        return (
            brewery.city.toLowerCase().includes(searchString) 
        );
    });
  displayBreweries(searchResult)
});



//Ok you made the searchbar! Now connect with the API
function fetchBreweries() {
    fetch("https://api.openbrewerydb.org/breweries?by_state=texas")
    .then(res => res.json())
    .then(breweries => {
        displayBreweries(breweries)
        filteredBreweries = breweries
    })
};



//Create a list element for the brewery "profiles"
const profiles = document.createElement('ul');
container.append(profiles);
profiles.id = "profiles";


//Write a function that will map out the API data/designate the info you want for each brewery profile
const displayBreweries = (breweries) => {
    const htmlString = breweries.map((brewery) => {
        return `
        <li class="site">
            <h2>${brewery.name}</h2>
            <p>Street: ${brewery.street}</p>
            <p>City: ${brewery.city}</p>
            <p>Zipcode: ${brewery.postal_code}</p>
            <button class="likes">
                <i class="fas fa-beer"></i>
                <span class="count">0</span>
            </button>
        </li>`;
    }).join('');
    profiles.innerHTML = htmlString
};


let filteredBreweries = [];
fetchBreweries();


function countLikes(){
    // const ul = document.querySelector("ul")
    profiles.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.className == "count") {
            return(e.target.textContent++);
        };
    });
};
countLikes();

