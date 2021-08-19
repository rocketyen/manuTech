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
                    <h4>${reference}</h4>
                    <h4>${price}</h4>

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
