const products = [{
    "id":1,
    "image":"https://th.bing.com/th/id/OIP.KcAUXise0Di6ZQkCFAxIbAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "shoe_brand": "Reebok",
    "shoe_size": 6.1,
    "shoe_color": "Blue",
    "price": 74.66,
    "category": "Female"
  }, {
    "id":2,
    "image":"https://th.bing.com/th?q=Pink+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
    "shoe_brand": "Adidas",
    "shoe_size": 8.8,
    "shoe_color": "White",
    "price": 104.93,
    "category": "Female"
  }, {
    "id":3,
    "image":"https://th.bing.com/th?q=Nike+Running+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
    "shoe_brand": "Nike",
    "shoe_size": 11.8,
    "shoe_color": "Black",
    "price": 199.92,
    "category": "Female"
  }, {
   "id":4, 
    "image":"https://th.bing.com/th?q=Business+Casual+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
    "shoe_brand": "Adidas",
    "shoe_size": 10.3,
    "shoe_color": "Black",
    "price": 191.85,
    "category": "Male"
  }, {
    "id":5, 
    "image":"https://th.bing.com/th/id/OIP.vUEtb_7EDqh_7ZyNKc7zFQAAAA?w=192&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "shoe_brand": "Nike",
    "shoe_size": 8.2,
    "shoe_color": "White",
    "price": 127.73,
    "category": "Male"
  }, {
    "id":6, 
    "image":"https://th.bing.com/th/id/OIP.It4MFWmd7XdPP1BtkFU5WQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "shoe_brand": "Puma",
    "shoe_size": 10.6,
    "shoe_color": "White",
    "price": 191.59,
    "category": "Female"
  }, {
    "id":7, 
    "image":"https://th.bing.com/th/id/OIP.Isnbbaf2I51pxGHjv-Q_UAHaGe?w=219&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "shoe_brand": "Adidas",
    "shoe_size": 5.2,
    "shoe_color": "Red",
    "price": 156.09,
    "category": "Female"
  }, {
    "id":8, 
    "image":"https://th.bing.com/th/id/OIP.tRB1BnBt7nqdnwqVc5ZuZgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "shoe_brand": "Puma",
    "shoe_size": 6.9,
    "shoe_color": "Blue",
    "price": 171.24,
    "category": "Female"
  }, {
    "id":9, 
    "image":"https://th.bing.com/th/id/OIP.kBZU6mIUxMbHqNwVva-NwgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5",
    "shoe_brand": "Puma",
    "shoe_size": 6.6,
    "shoe_color": "Blue",
    "price": 174.8,
    "category": "Female"
  }, {
    "id":10, 
    "image":"https://th.bing.com/th/id/OIP.KKECDEdTTPsrSNFd4cGb2wHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain",
    "shoe_brand": "Puma",
    "shoe_size": 9.6,
    "shoe_color": "White",
    "price": 180.14,
    "category": "Female"
  },{
    "image":"https://th.bing.com/th?q=Nike+Running+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
    "shoe_brand": "Nike",
    "shoe_size": 11.8,
    "shoe_color": "Black",
    "price": 199.92,
    "category": "Female"
  }, {
    "image":"https://th.bing.com/th?q=Business+Casual+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
    "shoe_brand": "Adidas",
    "shoe_size": 10.3,
    "shoe_color": "Black",
    "price": 191.85,
    "category": "Male"
  }]

  let cart = []

  function displayProducts() {
    const productContainer = document.getElementById("product_container")

    productContainer.innerHTML = ""

    products.forEach((product)=>{
      const productCard = document.createElement("div")
      productCard.classList.add("product")
      productCard.innerHTML = `
        <img src="${product.image} alt="${product.shoe_brand}"/>
        <h2>${product.shoe_brand}</h2>
        <h4>Shoe Size:${product.shoe_size}</h4>
        <h4>${product.category}</h4>
        <p>${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
         `
         productContainer.appendChild(productCard)
    })
    
  }

  function addToCart(productId) {
    const count = document.getElementById("cart_count")
    const product = products.find((product)=>product.id === productId)
    if(product){
        cart.push(product)
        displayProducts()
        displayCart()
    }
    count.textContent = cart.length;
     
  }

  function displayCart(){
    const cartDisplay = document.getElementById("cart_icon")
    cartDisplay.innerHTML = ""
    if(cart.length === 0){
        // cartDisplay.innerHTML = `<span>Cart is empty</span>`
    }else{
        cart.forEach((item) => {
         const cartItem = document.createElement("div")
         cartItem.classList.add("cart-item")
         cartItem.innerHTML = `
           <img src="${item.image} alt="${item.shoe_brand}"/>
           <div class="cartItemDetails">
               <h2>${item.shoe_brand}</h2>
               <h4>Shoe Size:${item.shoe_size}</h4>
               <h4>${item.category}</h4>
               <p>${item.price.toFixed(2)}</p>
           </div>
         `
         cartDisplay.appendChild(cartItem)
        })
    }
  }

  displayProducts()
  displayCart()