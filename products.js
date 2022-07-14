const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];

let listFruits = document.querySelector(".fruits");
let listDrinks = document.querySelector(".drinks");
let listHygiene = document.querySelector(".hygiene");

function listProducts(products, categorys, lists){

  let tagUl = document.createElement("ul");
  
  for (let i = 0; i < products.length; i++){
    
    let categoryProducts = products[i].category;
    if (categoryProducts == categorys){
      
      let cardProduct = createCard(products[i]);
      
      tagUl.appendChild(cardProduct);
      lists.appendChild(tagUl);
    } 
  }
}
listProducts(products, "Frutas", listFruits);
listProducts(products, "Bebidas", listDrinks);
listProducts(products, "Higiene", listHygiene);


function createCard(products){

  let img = products.image;
  let titleProduct = products.title;
  let category = products.category;
  let price = products.price;

  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  let tagMain = document.createElement("main");
  let tagH1 = document.createElement("h1");
  let tagH5 = document.createElement("h5");
  let tagStrong = document.createElement("strong");
  
  tagLi.classList.add("product");
  tagImg.classList.add("product-img");
  tagMain.classList.add("product-main");
  tagH1.classList.add("product-title");
  tagH5.classList.add("product-category");
  tagStrong.classList.add("product-price");

  tagImg.src = img;
  tagImg.alt = titleProduct;
  tagImg.title = titleProduct;
  tagH1.innerText = titleProduct;
  tagH5.innerText = category;
  tagStrong.innerText = `R$ ${price.toFixed(2)}`.replace("." , ",");
  tagMain.append(tagH1, tagH5, tagStrong)
  tagLi.append(tagImg, tagMain)

  return tagLi;
}