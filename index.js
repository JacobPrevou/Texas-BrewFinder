//


const container = document.createElement('div')
document.body.append(container);
container.className = "container";


const searchWrapper = document.createElement('div');
container.appendChild(searchWrapper);
searchWrapper.id = "searchWrapper";



const input = document.createElement('input');
searchWrapper.appendChild(input);
input.type = "text";
input.id = "searchBar";
input.placeholder = "Type in a Texas city y'all!"


const profiles = document.createElement('ul');
container.append(profiles);
profiles.id = "profiles";



function fetchBreweries() {
    fetch("https://api.openbrewerydb.org/breweries?by_state=texas")
    .then(res => res.json())
    .then(breweries => {
        loadBreweries(breweries);
        breweriesArr = breweries
       
    })
    .catch(error => console.log('error is', error));
};

let breweriesArr = [];

const loadBreweries = (breweries) => {
    const site = breweries.map((brewery) => {
        return `
        <li class="site">
            <h2>${brewery.name}</h2>
            <p>Street: ${brewery.street}</p>
            <p>City: ${brewery.city}</p>
            <p>Zipcode: ${brewery.postal_code}</p>
            <button class="likes">
                <i class="fas fa-beer"> Cheers!</i>
            </button>
        </li>`;
    }).join('');
    profiles.innerHTML = site
};

searchBar.addEventListener('input', e => {
    e.preventDefault()
    const searchString = e.target.value.toLowerCase();
    let result = breweriesArr.filter((brewery) => {
        return (
            brewery.city.toLowerCase().includes(searchString)
        );
    });
  loadBreweries(result);
});

fetchBreweries();


profiles.addEventListener("click",function(e) {
    if(e.target && e.target.className == "fas fa-beer") {
        alert(" Cheers!");
    }
});


function showLikes(){
    profiles.addEventListener("click", e => {
        if (e.target.className == "fas fa-beer") {
            return(e.target.style.color = "red");
        };
    });
};
showLikes();