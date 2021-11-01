// Event Listener 1: User clicks a dropdown arrow to 
//make a "select" object (default behavior is to provide a dropdown list); 
//the "select" object should have an id field/should be a form element


function fetchBreweries() {
    fetch("https://api.openbrewerydb.org/breweries?by_state=texas")
    .then(res => {
        res.json()
    })
    .then(json => {
        renderCity(json);
    });
}

function renderCity(json) {
    const select = document.querySelector('input')
    json.map(brewery => {
      const ul = document.createElement('ul')
      ul.innerHTML = `<ul>${brewery.city}</ul>`
      select.appendChild(ul)
    })
}

document.addEventListener('Change', fetchBreweries())



//const selection = document.getElementById('input')




