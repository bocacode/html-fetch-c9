const coffeeList = document.getElementById('coffeeList')

function addSingleCoffee(coffee) {
  const newListItem = document.createElement('li')
  const newText = document.createTextNode(coffee.title)
  newListItem.appendChild(newText)
  return newListItem
}

function newCoffeeList(listOfCoffees) {
  const newList = document.createElement('ul')
  // loop through list of coffees and add each one to this list
  listOfCoffees.forEach(coffee => {
    const thisItem = addSingleCoffee(coffee)
    newList.appendChild(thisItem)
  })
  coffeeList.innerText = ''
  coffeeList.appendChild(newList)
}

function getCoffee(type) {
  coffeeList.innerText = "Loading..."
  fetch(`https://api.sampleapis.com/coffee/${type}`)
    .then(doc => doc.json()) // just need the json body...
    .then(data => { // we got the json data
      // we got our list of coffee... now let's put it on the screen
      newCoffeeList(data)
    })
    .catch(err => console.error(err))
}

async function getCoffee2() {
  coffeeList.innerText = "Loading...";
  try{
    const doc = await fetch(`https://api.sampleapis.com/coffee/hot`);
    const data = await doc.json();
    console.log(data);
  }
  catch (err) {
    console.error(err);
  }
}
