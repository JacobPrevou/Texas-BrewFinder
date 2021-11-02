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

//Set the city key for each object to a select option
    for (var key in data) {
    var brewery = data[key];
    select.options[select.options.length] = new Option(brewery.city);
    }



}
fetchBreweries()

    // data.forEach(brewery => {
    //     //Sort cities alphabetically
    //     function sortArray(x, y){
    //         if (x.city < y.city) {return -1;}
    //         if (x.city > y.city) {return 1;}
    //         return 0;
    //     }
    
        

        
        // const option = document.createElement('option')
        // option.innerHTML = `<option>${brewery.city}</option>`
        // select.appendChild(option)
    //})

// var list = [];
// var select = document.getElementById('input');
// // let option;
// // let dropdown = document.getElementById('input')
// //filter cities for dropdown list
// async function renderCities() {
//     console.log(data)
// //filter out duplicate locations
// for (let i = 0; i < data.length; i++) {
//     option = document.createElement('option');
//     option.text = data[i].city;
//     option.value = data[i].city;
//     select.value = option;
//   }
// }

// //Call renderCities()
// renderCities();

// var list = [];
// var select = document.getElementById('input')
// //filter cities for dropdown list
// async function renderCities() {
//     var data = await fetchBreweries();
//     //const option = document.createElement('OPTION')
    
//     // const ddown = data.map(brewery => {
//     //     list.push(brewery.city);
//     // });

//     // option.value = list
//     // select.appendChild(option);

//     // var list = document.createElement('li');
//     // list.appendChild(document.createTextNode(brewery[i]));
//     // cityList.appendChild(list);
//     // select.appendChild(cityList);
//     // })
//     data.forEach(brewery => {
//         const option = document.createElement('option')
//         option.innerHTML = `<option>${brewery.city}</option>`
//         select.appendChild(option)
//     })

//     return select
//       //return list.push(ddown)

// }

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




