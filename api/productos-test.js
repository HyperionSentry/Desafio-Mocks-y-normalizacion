const { faker } = require('@faker-js/faker')



class ProductsContainer {

    listarAll() {
    faker.locale = 'en';
    const initProducts = [];

    for(let i =0; i<6; i++){

        initProducts.push({
            "title": faker.music.genre(),
            "price": faker.finance.amount(),
            "thumbnail": faker.image.image()
        })
    }

        return initProducts;
    }
}

module.exports = ProductsContainer