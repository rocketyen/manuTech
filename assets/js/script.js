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
                <span class="btn effect01">Ajouter au panier</span>
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
                <span class="btn effect01">Ajouter au panier</span>
                </div>

            </div>`;
        document.getElementById('screen').innerHTML += itemHoardings;

})
}



fetch('assets/data/infosProducts.json')
    .then(response => response.json())
    .then((jsonProducts) => {
        console.log(jsonProducts)
        // factorisation des fonctions
        fnMouse(jsonProducts)
        fnKeyboard(jsonProducts)
        fnScreen(jsonProducts)

        })
// Récupération des données du fichier json local

// function create

        


