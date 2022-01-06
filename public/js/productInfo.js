let ProductInfo = JSON.parse(localStorage.getItem("ProductInfo"))
let clicked = ProductInfo[ProductInfo.length - 1]

localStorage.setItem("ProductInfo", JSON.stringify(ProductInfo))

if (localStorage.getItem("Pf_cart") === null) {
  localStorage.setItem("Pf_cart", JSON.stringify([]))
}

function ADDTOCART() {

  let productCart = JSON.parse(localStorage.getItem("Pf_cart"))

  let Product_Name = document.getElementById("NAME")


  let Image = document.getElementById("sofaimg")

  let Price = document.getElementById("mrp")

  let brand = document.getElementById("BRAND")
  let cutPrice = document.getElementById("cutprice")

  let productDetails = {
    brand: brand.textContent,
    cutPrice: +cutPrice.textContent,
    name: Product_Name.textContent,
    img: Image.src,
    price: +Price.textContent,
  }

  productCart.push(productDetails)
  console.log(productCart)

  localStorage.setItem("Pf_cart", JSON.stringify(productCart));

  console.log("products_cart:", productDetails)

  alert("Added to Cart");

  console.log("products_cart:", productDetails)

  let btn = document.getElementById("cart-btn");
  btn.innerHTML = "GO TO CART";

  let go = document.getElementById("go");
  go.setAttribute("href", "/cart")
}
