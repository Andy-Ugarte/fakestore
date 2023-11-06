let url = 'https://fakestoreapi.com/products'

let electronics = document.getElementById('electronics')
    //console.log(electronics)

let jewelery = document.getElementById('jewelery')  /// check spelling (how to connect this to nav bar?????)

let men = document.getElementById('men')

let women = document.getElementById('women')

let display = document.getElementById('display')

const fakeStore = async(endpoint) => { //endpoint pass function
    // body of async arrow function
    let res = await fetch(url+endpoint)
    console.log(res)
    let results = await res.json()
    console.log(results)
}
window.onload = (e) => {
    getFakeStoreData
}


//fetch - await
fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        let fakeStore;
        // create variable AND create new element
        fakeStore = document.createElement('card')
        // change the text of our card element??????
        fakeStore.innerText = data;
        // append the child on the webpage
        document.body.appendChild(fakeStore);
    })


electronics.addEventListener('click', () =>{
    //call back function it => {}. inside {} is what happends when button is clicked
    // Call fakeStore with endpoint as argument /categoty/electronics
    fakeStore('/category/electronics')
})

// Endpoint for jewelery
electronics.addEventListener('click', () =>{
    //call back function it => {}. inside {} is what happends when button is clicked
    // Call fakeStore with endpoint as argument /categoty/electronics
    fakeStore('/category/electronics')
})

// Endpoint for men and women is lower caser /category/men's clothing
men.addEventListener('click', () => {
    fakeStore('/catergory/men')
})

// Endpoint for men and women is lower caser /category/women's clothing
women.addEventListener('click', () =>{
    fakeStore('/catergory/women')
})
