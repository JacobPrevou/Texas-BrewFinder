// Event Listener 1: User clicks a dropdown arrow to 
//make a "select" object (default behavior is to provide a dropdown list); 
//the "select" object should have an id field/should be a form element



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
    const data = await response.json();
    console.log(data); 
    var select = document.getElementById('input')
    data.forEach(brewery => {
        //Sort cities alphabetically
        function sortArray(x, y){
            if (x.city < y.city) {return -1;}
            if (x.city > y.city) {return 1;}
            return 0;
        }
        var sorted = data.sort(sortArray);
        console.log(sorted);

        var clean = sorted.filter((sorted, index, self) =>
        index === self.findIndex((t) => (t.save === sorted.city)))

        console.log(clean);
        
        // let uniqueChars = [...new Set(data.city)];
        // console.log(uniqueChars);
        
        const option = document.createElement('option')
        option.innerHTML = `<option>${brewery.city}</option>`
        select.appendChild(option)
    })

}
fetchBreweries()






