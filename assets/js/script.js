// Récupération des données du fichier json local
fetch('assets/data/infosProducts.json')
    .then(response => response.json())
    .then((jsonProducts) => {
        console.log(jsonProducts)
        // infosProducts correspond au nom du tableau json
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
            console.log(itemHoardings)
            document.getElementById('mouse').innerHTML += itemHoardings;

        })
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
                    <span class="btn effect01">Ajouter au panier</span>
                    </div>

                </div> `;
            console.log(itemHoardings)
            document.getElementById('keyboard').innerHTML += itemHoardings;

        })
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
                    <span class="btn effect01">Ajouter au panier</span>
                    </div>

                </div>`;
            console.log(itemHoardings)
            document.getElementById('screen').innerHTML += itemHoardings;

        })
    })


let reference = infos.product_reference;
let cart =[]
let addProductToCart = (reference) => {
    if(/*newTitle.value && newLink.value*/){
        
        cart.push(item);
        displayItems();
        newTitle.value = '';
        newLink.value = '';
        localStorage.setItem('items', JSON.stringify(items))
    }
}   
    
// let totalCount = () => {
//    if(localStorage.getItem('reference')){
       
//    }
// }



function Item(denomination, picture, price) {
    this.denomination = denomination;
    this.picture = picture;
    this.price = price;
    this.count = count;
  }

let cart = [];
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
var obj = {};
obj.addItemToCart = function(denomination, price, count) {
    for(var item in cart) {
      if(cart[item].denomination === denomination) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(denomination, price, count);
    cart.push(item);
    saveCart();
  }
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var denomination = $(this).data('denomination');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(denomination, price, 1);
    displayCart();
  });