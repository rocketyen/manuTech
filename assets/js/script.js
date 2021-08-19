// Récupération des données du fichier json local
fetch('assets/data/infosProducts.json')
    .then(response => response.json())
    .then((jsonProducts) => {
        console.log(jsonProducts)
// infosProducts correspond au nom du tableau json
        jsonProducts.products.map((infos) => {

            let reference = infos.product_reference;
            let denomination = infos.product_denomination;
            let picture = infos.product_picture;
            let price = infos.product_price;
            
            let itemHoardings = `
            <div class='col-12 col-lg-4'>     
                <div class='col-6'>
                    <img class='img-fluid' src='${picture}'/>
                </div>
                <div class='col-6'>
                    <h3>${denomination}</h3>
                    <h4>${reference}</h4>
                    <h4>${price}</h4>
                    <button id='Add'>Ajouter panier</button>
                </div>                
            </div>
            `;
            console.log(itemHoardings)
            document.getElementById('hoarding').innerHTML += itemHoardings;
            
            let btnAdd = document.getElementById('Add')
            let addProductToCart = () => { 
            localStorage.setItem("ref", JSON.stringify(reference));
            console.log(reference);
            }
            btnAdd.addEventListener('click', addProductToCart);
      })
    })
    // let btnAdd = document.getElementById('btnAdd')
    // let addProductToCart = () => { 
    //     localeStorage.setItem('reference', JSON.stringify(reference));
    //     console.log(reference);
    //    }
    // btnAdd.addEventListener('click', addProductToCart);
    
   
    // var product = {};
    // var cart = [];
    // function saveCart() {
    //   localStorage.setProduct('shoppingCart', JSON.stringify(cart));
    // }
  
    // addProduct to cart
    // product.addProductToCart = function(denomination) {
    //   for(var product in cart) {
    //     if(cart[product].denomination === denomination) {
    //       cart[product].count ++;
    //       saveCart();
    //       return;
    //     }
    //   }
    // }
