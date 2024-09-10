let productList;

fetch('./Media-assets/products/dataset.json')
    .then(response => response.json())
    .then(data => {
        productList = data.products;
        colorList = data.colours;

    })

function changeImage() {

    var productNumber = document.querySelector('#products').selectedIndex;
    var products = document.querySelector('#products').options;
    console.log(products);
    var productValue = products[productNumber].value;

    var colorNumber = document.querySelector('#productColor').selectedIndex;
    var colors = document.querySelector('#productColor').options;
    console.log(colors);
    var colorValue = colors[colorNumber].value;

    var imgPath = "/Media-assets/products/" + productValue + colorValue;
    getProPrice(productNumber);
    getColPrice(colorNumber);

    const img = document.querySelector('.design_img');
    img.setAttribute("src", imgPath + ".png");


};

function changeSymbol(filename) {
    let designSymbol = document.querySelector("#design-symbol");
    designSymbol.setAttribute("src", filename);
}


//GELD ENZOOO[]
const price = document.querySelector('#price');

function getProPrice(index) {
    let curProduct = productList[index];
    console.log(curProduct);
}

function getColPrice(index) {
    let curColor = colorList[index];
    console.log(curColor);
}

const totalPrice = curProduct + curColor;
console.log(totalPrice);