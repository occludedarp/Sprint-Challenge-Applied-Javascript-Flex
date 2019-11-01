// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector('.topics')

function createTab(tabContent){
    let newTab = document.createElement('div');
    newTab.textContent = tabContent
    newTab.classList.add('tab')

return newTab
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then( response => {
        response.data.topics.forEach( topic => {
            topicsDiv.appendChild(createTab(topic))
        })
    })
    .catch( error => {
        console.log('we couldn\'t find any data', error)
    })