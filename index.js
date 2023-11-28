let url = 'https://fakestoreapi.com/products'
let electronics = document.getElementById('electronics')
    //console.log(electronics)
let jewelery = document.getElementById('jewelery')  /// check spelling (how to connect this to nav bar?????)
let men = document.getElementById('men')
let women = document.getElementById('women')
let display = document.getElementById('display')
let cart = []


const fakeStore = async(endpoint) => { //endpoint pass function
    // body of async arrow function
    let res = await fetch(url+endpoint)
    let results = await res.json()
   displayCards(results)
}

function displayCards (products){
   // console.log(products)  
    // make a for each loop for products. products.foreachproduct / 
   //while loop
    while(display.firstChild){
        display.removeChild(display.firstChild)
    }
    products.forEach((product) => {
        console.log(product)

        let card = document.createElement('div');
        let image = document.createElement('img');
        let cardBody = document.createElement('div');
        let cardTitle = document.createElement('h5')
        let cardText = document.createElement('p')
        let addToCartBtn = document.createElement ('a')
   
        card.className = 'card'
        card.style = 'width: 18rem'
        image.className = 'card-img-top'
        cardBody.className = 'card-body'
        cardTitle.className = 'card-title'
        cardText.className = 'card-text'
        addToCartBtn.className = 'btn btn-primary'
        
        cardTitle.innerText = product.title
        cardText.innerText = product.description
        image.src = product.image
        addToCartBtn.innerText = 'add to cart'
        
        addToCartBtn.onclick = function(){
           const cartItem = {
            id: product.id,
            title: product.title,
            cost: product.price.toFixed(2),
            quantity: 1
           }
           //console.log(item);
           submitToCart(cartItem);
           console.log(cart)
        };
        
        display.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody)
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(addToCartBtn)
        
        
    })

}

function submitToCart(item) {
    // console.log(cart)
    // console.log(item)
    // if (cart.length === 0){
    //     //cart.push(item)

    //         if (cart.includes(item.id)){
    //             item.quantity +=1 
    //             console.log('hello')
    //         }   else {
    //             cart.push('new item in for each',item)
    //             console.log(cart)
    //         }
    //     }
    // }
   
    let matchingId = cart.findIndex(cartItem => cartItem.id === item.id)

    if (matchingId === -1){
        cart.push(item)
    } else {
        cart[matchingId].quantity += 1
    }



}


    
    electronics.addEventListener('click', () =>{
        //call back function it => {}. inside {} is what happends when button is clicked
        // Call fakeStore with endpoint as argument /category/electronics
        fakeStore('/category/electronics')
    })
    
    // Endpoint for jewelery
    jewelery.addEventListener('click', () =>{
        //call back function it => {}. inside {} is what happends when button is clicked
        // Call fakeStore with endpoint as argument /category/electronics
        fakeStore('/category/jewelery')
    })
    
    // Endpoint for men and women is lower caser /category/men's clothing
    men.addEventListener('click', () => {
        fakeStore(`/category/men's clothing`)
    })
    
    // Endpoint for men and women is lower caser /category/women's clothing
    women.addEventListener('click', () =>{
        fakeStore(`/category/women's clothing`)
    })
    
    
     window.onload = (e) => {
         fakeStore('/')
     }

    //  category.addEventListener('click', (e)=> {
    //     e.preventDefault();
    //     console.log(e.target.search.value)
    //     category(e.target)
    //  })