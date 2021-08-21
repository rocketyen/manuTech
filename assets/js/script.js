let play = document.getElementById('add-to-cart')
var fnMouse = (jsonProducts) => {
    jsonProducts.products.souris.map((infos) => {

    let denomination = infos.product_denomination;
    let picture = infos.product_picture;
    let price = infos.product_price;

    let itemHoardings = `
        <div class='col-12 col-lg-4 text-center mbModif'>

            <h3>${denomination}</h3>
            <img class='img-fluid' src='${picture}'/>
            <h3>${price}€</h3>

            <div>
            <span class="btn effect01 add-to-cart" data-denomination="${denomination} ${price}">Ajouter au panier</span>
            </div>

        </div>`;
    document.getElementById('mouse').innerHTML += itemHoardings;
    

})  
}


let fnKeyboard = (jsonProducts) => {
    jsonProducts.products.clavier.map((infos) => {

        let denomination = infos.product_denomination;
        let picture = infos.product_picture;
        let price = infos.product_price;

        let itemHoardings = `
            <div class='col-12 col-lg-4 text-center mbModif'>

                <h3 id="denomination">${denomination}</h3>
                <img class='img-fluid' src='${picture}'/>
                <h3 id="price">${price}€</h3>

                <div>
                <span class="btn effect01 add-to-cart" data-denomination="${denomination} ${price}">Ajouter au panier</span>
                </div>

            </div> `;
        document.getElementById('keyboard').innerHTML += itemHoardings;

})
}

let fnScreen = (jsonProducts) => {
    jsonProducts.products.ecran.map((infos) => {

        let denomination = infos.product_denomination;
        let picture = infos.product_picture;
        let price = infos.product_price;

        let itemHoardings = `
        <div class='col-12 col-lg-4 text-center mbModif'>

            <h3>${denomination}</h3>
            <img class='img-fluid' src='${picture}'/>
            <h3>${price}€</h3>

            <div>
                <span class="btn effect01 add-to-cart" data-denomination="${denomination} ${price}">Ajouter au panier</span>
            </div>

            </div>`;
        
        document.getElementById('screen').innerHTML += itemHoardings;            
        })
        // let addItem = () => {
        //     let denomination = document.getElementById('denomination');
        //     if(denomination.value){
        //         let item = [denomination.value];
        //         items.push(item);
        //         displayItems();
        //         denomination.value = '';
        //         localStorage.setItem('items', JSON.stringify(items))
        //     }
        // }
        // let addBtn = document.getElementById('add-to-cart');
        // addBtn.onclick = addItem;
        // console.log(items);
    }
    



            
fetch('assets/data/infosProducts.json')
.then(response => response.json())
.then((jsonProducts) => {
    
    // factorisation des fonctions
    fnMouse(jsonProducts)
    fnKeyboard(jsonProducts)
    fnScreen(jsonProducts)  

    let addBtn = document.querySelectorAll('.add-to-cart');
      
      addBtn.forEach((element)=>{
        element.addEventListener('click', addItem)
        

      })
    
})


let cart =[];

// fonction pour sauvegarder sur le localStorage 

var saveCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

// fonction pour ajouter un produit au panier  

let addItem = (event) => {
    let test = event.target.dataset.denomination;
    let dollars = event.target.dataset.price;
    console.log(test);
    cart.push(test,dollars)    
    let panier = document.getElementById('add');
    panier.innerHTML=cart;
}

 /////
 let addBtn = document.querySelectorAll('.add-to-cart');

 addBtn.forEach((element)=>{

   element.addEventListener('click', addItem)

   let addItem = (event) => {
     console.log(event.target.dataset.denomination)
    }
  });
 /////
      

// function create


// fonction pour supprimer un élément du panier

let removeItemFromCart = (denomination) => {
    for(var item in cart) {
      if(cart[item].denomination === denomination) {
        cart[item].count --;
        if(cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
  }
  saveCart();
}

// fonction pour supprimer tous les éléments d'une même catégorie du panier

let removeItemFromCartAll = (denomination) => {
    for(var item in cart) {
      if(cart[item].denomination === denomination) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

// fonction qui vide le panier intégralement

let clearCart = () => {
    cart = [];
    saveCart();
  }

// fonction qui calcul le nombre d'élément du panier

let totalCount = () => {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

//   fonction qui calcul le montant total du panier

let totalCart = () => {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart);
  }








    

// let removeItem = (event) => {
//     indexToRemove = event.target.dataset.id
//     items.splice(indexToRemove,1);
//     displayItems();
//     localStorage.setItem('items', JSON.stringify(items))
// }    


   
   
/*---------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------*/
        // let cartButton = document.getElementById('addCartButton')
        // console.log(cartButton)
        // let cart = [];  

        // var addProductToCart = (reference) => {
        //    cart.push(denomination)       
        //       }
    
    // console.log(cart)

/*---------------------------------------------------------------------------------------
 ---------------------------------------------------------------------------------------*/
            
    // let test = []; 

    // let addItem = () => {
    //     // let denomination2 = document.getElementById('denomination');
    //     // let price2 = document.getElementById('price');
    //     // if(denomination2 && price2){
    //     //  //   let item = [denomination, price];
    //     //     cart.push(denomination);
    //     //    // displayItems();
    //     //    // denomination = '';
    //     //     // price = '';
    //     //     localStorage.setItem('productName', JSON.stringify(cart))
    //     // }
    //     alert('coucou')
    // }
    // let addBtn = document.querySelector('.add-to-cart');
    // console.log(addBtn)
    //     addBtn.addEventListener('click', addItem)
        //console.log(test)
    



    
            
       

