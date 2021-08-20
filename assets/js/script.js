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
            <span class="btn effect01 add-to-cart" data-denomination="${denomination}">Ajouter au panier</span>
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

                <h3>${denomination}</h3>
                <img class='img-fluid' src='${picture}'/>
                <h3>${price}€</h3>

                <div>
                <span class="btn effect01 add-to-cart" data-denomination="${denomination}">Ajouter au panier</span>
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
            <span class="btn effect01 add-to-cart"  data-denomination='${denomination}'>Ajouter au panier</span>
            </div>

            </div>`;
        
        document.getElementById('screen').innerHTML += itemHoardings;            
        })
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



// fonction pour ajouter un produit au panier  

let addItem = (event) => {
    let test = event.target.dataset.denomination;
    console.log(test);
    cart.push(test)    
    let panier = document.getElementById('add');
    panier.innerHTML=test;
}

// function create


// let addItem = (event, denomination, price, count) => {
//     console.log(event.target.dataset.denomination);
//     for(var item in cart) {
//       if(cart[item].denomination === denomination) {
//         cart[item].count ++;
//         saveCart();
//         return;
//       }
//     }
//     var item = new denomination(denomination, price, count);
//     cart.push(item);
//     saveCart();
//   }

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

$('.add-to-cart').click(function(event) {
    event.preventDefault();
    var denomination = $(this).data('denomination');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(denomination, price, 1);
    displayCart();
  });
