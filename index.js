let url = 'https://fakestoreapi.com/products'

let electronics = document.getElementById('electronics')
    //console.log(electronics)

let jewelery = document.getElementById('jewelery')  /// check spelling

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

//fetch - await



electronics.addEventListener('click', () =>{
    //call back function it => {}. inside {} is what happends when button is clicked
    // Call fakeStore with endpoint as argument /categoty/electronics
    fakeStore('/category/electronics')
})


// Endpoint for men and women is lower caser /category/men's clothing

// Endpoint for men and women is lower caser /category/women's clothing