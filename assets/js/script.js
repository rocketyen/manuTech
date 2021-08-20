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
            <span class="btn effect01">Ajouter au panier</span>
            </div>

        </div>`;
    //console.log(itemHoardings)
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
                <span class="btn effect01">Ajouter au panier</span>
                </div>

            </div> `;
       // console.log(itemHoardings)
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
                <span class="btn effect01 add-to-cart">Ajouter au panier</span>
                </div>

            </div>`;
       // console.log(itemHoardings)
        document.getElementById('screen').innerHTML += itemHoardings;
        

})
}

fetch('assets/data/infosProducts.json')
    .then(response => response.json())
    .then((jsonProducts) => {
       // console.log(jsonProducts)
        // factorisation des fonctions
        fnMouse(jsonProducts)
        fnKeyboard(jsonProducts)
        fnScreen(jsonProducts)

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

        /////////////////////////////////////////////////////////////////////

            // var shoppingCart = (function() {

            // function Item(feature1, feature2, feature3, feature4,) {
            //     this.feature1 = reference;
            //     this.feature2 = denomination;
            //     this.feature3 = picture;
            //     this.feature4 = price;
            //   }

            // let cart = [];
            // let saveCart = () =>{
            //     localStorage.setItem('shoppingCart', JSON.stringify(cart));
            //   }

            // var obj = {};
            // obj.addItemToCart = function(reference, denomination, price, count) {
            //     for(var item in cart) {
            //       if(cart[item].denomination === denomination) {
            //         cart[item].count ++;
            //         saveCart();
            //         return;
            //       }
            //     }
            //     var item = new Item(reference, denomination, price, count);
            //     cart.push(item);
            //     saveCart();
            //   }               
            // })(); 
            // $('.add-to-cart').click(function(event) {
            //     event.preventDefault();
            //     var denomination = $(this).data('denomination');
            //     var price = Number($(this).data('price'));
            //     shoppingCart.addItemToCart(denomination, price, 1);
            //     displayCart();
            //   });            
        })
   
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
            
    let cart = []; 

    let addItem = () => {
        // let denomination2 = document.getElementById('denomination');
        // let price2 = document.getElementById('price');
        // if(denomination2 && price2){
        //  //   let item = [denomination, price];
        //     cart.push(denomination);
        //    // displayItems();
        //    // denomination = '';
        //     // price = '';
        //     localStorage.setItem('productName', JSON.stringify(cart))
        // }
        alert('coucou')
    }
    let addBtn = document.querySelector('.add-to-cart');
    console.log(addBtn)
        addBtn.addEventListener('click', addItem)
        console.log(cart)
    



    // function saveCart() {
    //     localStorage.setItem('shoppingCart', JSON.stringify(cart));
    //   }

    // let cart = [];    

    // function addProductToCart(denomination) {
    //         for(var product_reference in cart) {
    //         if(cart[product_reference].denomination === denomination) {
    //             cart[product_reference].count ++;
    //             saveCart();
    //             return;
    //         }
    //         }
    //     }
       
// Récupération des données du fichier json local
