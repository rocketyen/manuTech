// Récupération des données du fichier json local
fetch('assets/data/infosProducts.json')
    .then(response => response.json())
    .then((jsonProducts) => {
        console.log(jsonProducts)
// infosProducts correspond au nom du tableau json
        jsonProducts.products.souris.map((infos) => {
            console.log(infos)

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
                    <button id="btn1">Ajouter un panier</button>
                </div>
                
            </div>
            `;
            console.log(itemHoardings)
            document.getElementById('hoarding').innerHTML += itemHoardings;
          
            // let addProductToCart = () => { 
            //     localStorage.setItem('reference', JSON.stringify(reference))
            //     console.log(reference)
        
            //    }
            //    let btnA = document.getElementById('#btn1')
            //    btnA.addEventListener('click', addProductToCart)
               

      })
    })

   