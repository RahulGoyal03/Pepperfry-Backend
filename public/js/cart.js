get_username();

function get_username() {
  let uname = JSON.parse(localStorage.getItem("logined_user"))
  console.log('uname:', uname[0])

  let tem = document.getElementById("user-name")

  let to_bold = `WELCOME <strong>${uname[0].toUpperCase()}!</strong>`
  console.log('tobold:', to_bold)

  tem.innerHTML = to_bold;
}

let sec = document.getElementById("in_cart");
sec.innerText = `IN YOUR CART`

let data = JSON.parse(localStorage.getItem("Pf_cart")) || [];

console.log(data);

var value = 0;
var discount = 0;
var assembly = 449;

let div1 = document.getElementById("dis");

data.forEach(function (el, i) {

  var count = 1;
  el.qty = 1;
  console.log(el)

  value += el.price;
  discount += el.cutPrice
  console.log(value, discount)

  let item = document.createElement("div");
  item.setAttribute("class", "item");

  //--------------box-A-----------------------//

  let div1A = document.createElement("div");
  let img = document.createElement("img");
  img.classList = "pics"
  img.src = el.img;
  div1A.append(img);

  //--------------------box-B-------------------//
  let div1B = document.createElement("div");
  let div1B1 = document.createElement("div");
  div1B1.innerText = `${el.name} - ${el.brand}`;
  let div1B2 = document.createElement("div");
  div1B2.innerText = "36 Month's Warranty, 100% Genuine";
  div1B2.style.color = "#f16521";
  let div1B3 = document.createElement("div");
  div1B3.innerText = `Delivery by Thur 18th Nov.`;
  div1B3.style.color = "darkgrey"

  div1B.append(div1B1, div1B2, div1B3)

  //-------------------box C-----------------------//
  let div1C = document.createElement("div");
  div1C.classList = "plus";
  let div1C1 = document.createElement("div");
  div1C1.innerText = "-";
  div1C1.style.cursor = "pointer";


  div1C1.addEventListener("click", function (i) {
    count--;
    el.qty--;
    if (count === 0 && el.qty === 0) {
      delItemsFromCart(i);
      item.remove();
    }
    div1C2.innerText = count;
    price.innerText = `₹ ${count * el.price}`
    cutprice.innerText = `₹ ${count * el.cutPrice}`;
    value -= el.price;
    discount -= el.cutPrice;
    document.getElementById("cp").innerText = `₹ ${value}`;
    document.getElementById("pr").innerText = `₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${value + 449}`;
    //-------
    let Checkout_Data = {
      Cart_Value: value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Assembly: assembly,
      Total: value + 449
    };
    localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));
    // console.log("minus",value);
  });

  let div1C3 = document.createElement("div");
  div1C3.innerText = "+";
  div1C3.style.cursor = "pointer";


  div1C3.addEventListener("click", function () {
    count++;
    el.qty++;
    div1C2.innerText = count;
    price.innerText = `₹ ${count * el.price}`
    cutprice.innerText = `₹ ${count * el.cutPrice}`;
    value += el.price;
    discount += el.cutPrice;
    document.getElementById("cp").innerText = `₹ ${value}`;
    document.getElementById("pr").innerText = `₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${value + 449}`;

    //-------
    let Checkout_Data = {
      Cart_Value: value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Assembly: assembly,
      Total: value + 449
    };
    localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));


  });

  let div1C2 = document.createElement("div");
  div1C2.innerText = count;
  div1C2.className = "countBox";



  let cutprice = document.createElement("div");
  cutprice.innerText = `₹ ${el.cutPrice}`;
  cutprice.style.color = "grey";
  cutprice.style.textDecoration = "line-through";

  let price = document.createElement("div");
  price.innerText = `₹ ${el.price}`;
  price.style.color = "#f16521";
  price.style.fontWeight = 700;

  let divUP = document.createElement("div");
  divUP.classList = "quan"

  divUP.append(div1C1, div1C2, div1C3);
  div1C.append(divUP, cutprice, price);


  //------------------box -D --------------------//

  let div1D = document.createElement("div");
  div1D.classList = "wish";
  let img1 = document.createElement("img");
  img1.classList = "del";
  img1.src = "https://cdn-icons-png.flaticon.com/128/1632/1632602.png";
  img1.addEventListener("click", function () {
    el.qty = 0;
    delItemsFromCart(i);
    value -= count * el.price;
    discount -= count * el.cutPrice;
    document.getElementById("cp").innerText = `₹ ${value}`;
    document.getElementById("pr").innerText = `₹ ${discount}`;
    document.getElementById("total").innerText = `₹ ${value + 449}`;
    item.remove();

    //----------
    let Checkout_Data = {
      Cart_Value: value,
      Retail_Discount: discount,
      Delivery_Free: 0,
      Assembly: assembly,
      Total: value + 449
    };
    localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));
  });

  let img2 = document.createElement("img");
  img2.classList = "del";
  img2.src = "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg";
  img2.addEventListener("click", function () {
    if (img2.src == "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg") {
      img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
    } else {
      img2.src = "https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg"
    }
  });

  div1D.append(img1, img2)

  item.append(div1A, div1B, div1C, div1D);
  div1.append(item);

  //-------------------------------------------------//

});

function delItemsFromCart(i) {
  data.splice(i, 1)
  localStorage.setItem("cartData", JSON.stringify(data))
}

console.log(data);
// ---------------Local storage set---------------------//

localStorage.setItem("cartData", JSON.stringify(data));


//---------------box 2---------------------//

document.getElementById("cp").innerText = `₹ ${value}`;
document.getElementById("pr").innerText = `₹ ${discount}`;
document.getElementById("total").innerText = `₹ ${value + 449}`;


//-----------------------checkbox function----------//

var div = document.getElementById("gi");
div.style.display = "none";

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var div = document.getElementById("gi");
  if (checkBox.checked == true) {
    div.style.display = "flex";
    document.getElementById("total").innerText = `₹ ${value + 449 + 99}`
  } else {
    div.style.display = "none";
    document.getElementById("total").innerText = `₹ ${value + 449 - 99}`
  }
}


let Checkout_Data = {
  Cart_Value: value,
  Retail_Discount: discount,
  Delivery_Free: 0,
  Assembly: assembly,
  Total: value + 449
};
localStorage.setItem("Checkout_Data", JSON.stringify(Checkout_Data));


function mycheck() {
  let inp = document.getElementById("pincode").value;
  if (inp.length != 6) {
    alert`please fill a valid pincode`
  }
}
