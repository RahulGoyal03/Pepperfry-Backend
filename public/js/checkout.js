var name1 = document.getElementById("name");
var mobile1 = document.getElementById("moblie");

var name2 = document.getElementById("name1");
var mobile2 = document.getElementById("moblie1");

var pincode1 = document.getElementById("pincode");
var city1 = document.getElementById("city");
var address1 = document.getElementById("address");
var state1 = document.getElementById("state");

var pincode2 = document.getElementById("pincode1");
var city2 = document.getElementById("city1");
var address2 = document.getElementById("address1");
var state2 = document.getElementById("state1");

var country1 = "India";


var pin_valid = document.getElementById("pin_valid");
var city_valid = document.getElementById("city_valid");
var state_valid = document.getElementById("state_valid");
var address_valid = document.getElementById("address_valid");

var pin_valid1 = document.getElementById("pin_valid1");
var city_valid1 = document.getElementById("city_valid1");
var state_valid1 = document.getElementById("state_valid1");
var address_vaild1 = document.getElementById("address_vaild1");
var country_valid1 = document.getElementById("country_valid1")

var checkbox = document.getElementsByClassName("checkbox");
var submit = document.getElementById("submit");

var edit = document.getElementById("edit_cart");


var flag1 = false;

function hide_and_seek() {

  let tar = document.getElementById("order");
  let symbol = document.getElementById("showitems");
  let size = document.getElementById("mid_left")

  if (flag1) {
    symbol.innerHTML = `<span class="material-icons-outlined">   add </span>`
    edit.textContent = "";
    tar.style.display = "none"
    size.style.gridTemplateRows = "5% 70%"

    flag1 = false;
  } else {
    symbol.innerHTML = `<span class="material-icons-outlined"> remove </span>`
    tar.style.display = "block"
    tar.style.width = "80%"
    tar.style.height = "150px"
    edit.textContent = `Edit Cart`
    edit.style.color = "#14a9cc"
    edit.style.fontSize = "12px"
    edit.style.marginLeft = "5%"
    size.style.gridTemplateRows = "20% 70%"

    flag1 = true;
  }

}

var question = document.getElementById("question_mark");
var show1 = document.getElementById("show")
question.addEventListener("mouseover", Show);
question.addEventListener("mouseout", Hide);

var question1 = document.getElementById("question_mark1");
var show2 = document.getElementById("show1")
question1.addEventListener("mouseover", show11);
question1.addEventListener("mouseout", hide1);

var num = "0123456789";
var capital1 = document.getElementById("capital");

var arr = JSON.parse(localStorage.getItem('logined_user'));
console.log("arr : ", arr);
capital1.textContent = arr[0];

name1.textContent = arr[0];
// bala edits
var nameda1 = arr[0];
mobile1.textContent = arr[1];
var mobileda1 = arr[1];

name2.textContent = arr[0];

mobile2.textContent = arr[1];

//**** */

function Show() {
  show1.innerText = "We'll keep in touch via updates to your order, and to plan the item's delivery with you";
  show1.style.backgroundColor = "black";
  show1.style.color = "white";
  show1.style.width = "60%";
  show1.style.height = "100%";
  show1.style.fontSize = "12px";
  show1.style.margin = "1% 5% 1% 70%";
  show1.style.marginLeft = "280%"

}

function Hide() {
  show1.innerText = "";
  show1.style.backgroundColor = "none";
  show1.style.color = "none";
  show1.style.width = "0px";
  show1.style.height = "0px";
}

function show11() {
  show2.innerText = "We'll keep in touch via updates to your order, and to plan the item's delivery with you";
  show2.style.backgroundColor = "black";
  show2.style.color = "white";
  show2.style.width = "60%";
  show2.style.height = "100%";
  show2.style.fontSize = "12px";
  show2.style.margin = "1% 5% 1% 70%";
  show2.style.marginLeft = "280%"

}

function hide1() {
  show2.innerText = "";
  show2.style.backgroundColor = "none";
  show2.style.color = "none";
  show2.style.width = "0px";
  show2.style.height = "0px";
}
var c = 0;
let Products = JSON.parse(localStorage.getItem("cartData"));
var parent_order = document.getElementById("order_summary")
var count = document.getElementById("count")

function showProducts(d) {

  let productData = d;
  parent_order.innerHTML = null;

  productData.forEach(function (el) {

    let card = document.createElement("div");
    card.setAttribute("id", "card_d");
    card.addEventListener("click", function () {
      window.location.href = "/payment"
    })
    let right_div = document.createElement("div");
    right_div.setAttribute("id", "right_d");
    let img_div = document.createElement("div");
    img_div.setAttribute("id", "left_d");
    let img = document.createElement("img");
    img.src = el.img
    img_div.append(img)

    let delivery_div = document.createElement("div");
    delivery_div.append("Delivery By")

    let price_div = document.createElement("div");
    price_div.setAttribute("id", "price_d")
    let price = document.createElement("div");
    price.innerHTML = `</br><b>${el.qty} Qty     <span class="price_color">₹ ${el.price}</span>`
    price_div.append(price)

    let ship_div = document.createElement("div");
    let ship = document.createElement("div");
    ship.innerHTML = `Thur 18th Nov.`;
    ship_div.append(ship);

    c = c + 1;

    right_div.append(delivery_div, ship_div, price_div)

    card.append(img_div, right_div)

    parent_order.append(card);
  });
}


showProducts(Products);

count.textContent = c;


function verify() {
  let flag = 1;

  console.log('name1.value:', nameda1)
  console.log('mobile1.value:', mobileda1)
  console.log("State1 : ", state1.value);
  console.log("City1 : ", city1.value);

  console.log("******************")

  console.log('name2.value:', nameda1)
  console.log('mobile2.value:', mobileda1)
  console.log("State2 : ", state2.value);
  console.log("City2 : ", city2.value)

  if (pincode1.value.length > 6 || pincode1.value.length < 6) {
    flag = 0;
    pin_valid.innerText = "Enter valid 6 Digit pincode";
    pin_valid.style.color = "#d0021b";
    pincode1.style.border = "1px solid #d0021b";
  }

  if (city1.value.length == 0) {
    flag = 0;
    city_valid.innerText = "Enter valid city name";
    city_valid.style.color = "#d0021b";
    city1.style.border = "1px solid #d0021b";
  } else {
    for (var i = 0; i < city1.length; i++) {

      for (var j = 0; j < num.length; j++) {
        if (city1[i] === num[j]) {
          flag = 0;
          city_valid.innerText = "Enter valid city name";
          city_valid.style.color = "#d0021b";
          city1.style.border = "1px solid #d0021b";
        }
      }
    }
  }



  if (state1.value === "Select State") {
    flag = 0;
    state_valid.innerText = "Select valid state";
    state_valid.style.color = "#d0021b";
    state1.style.border = "1px solid #d0021b";
  }


  if (address1.value.length === 0) {
    flag = 0;
    address_valid.innerText = "Please Enter a Valid Address. Special characters allowed are ( - , . / ) ' +"
    address_valid.style.color = "#d0021b"
    address1.style.border = "1px solid #d0021b";
  }


  if (pincode2.value.length > 6 || pincode2.value.length < 6) {
    flag = 0;
    pin_valid1.innerText = "Enter valid 6 Digit pincode";
    pin_valid1.style.color = "#d0021b";
    pincode2.style.border = "1px solid #d0021b";
  }

  if (city2.value.length == 0) {
    flag = 0;
    city_valid1.innerText = "Enter valid city name";
    city_valid1.style.color = "#d0021b";
    city2.style.border = "1px solid #d0021b";
  } else {
    for (var i = 0; i < city2.length; i++) {

      for (var j = 0; j < num.length; j++) {
        if (city2[i] === num[j]) {
          flag = 0;
          city_valid1.innerText = "Enter valid city name";
          city_valid1.style.color = "#d0021b";
          city2.style.border = "1px solid #d0021b";
        }
      }
    }
  }

  if (state2.value.length == 0) {
    flag = 0;
    state_valid1.innerText = "Enter valid state name";
    state_valid1.style.color = "#d0021b";
    state2.style.border = "1px solid #d0021b";
  } else {
    for (var i = 0; i < city2.length; i++) {

      for (var j = 0; j < num.length; j++) {
        if (city2[i] === num[j]) {
          flag = 0;
          city_valid1.innerText = "Enter valid city name";
          city_valid1.style.color = "#d0021b";
          city2.style.border = "1px solid #d0021b";
        }
      }
    }
  }

  if (address2.value.length === 0) {
    flag = 0;
    address_vaild1.innerText = "Please Enter a Valid Address. Special characters allowed are ( - , . / ) ' +"
    address_vaild1.style.color = "#d0021b"
    address2.style.border = "1px solid #d0021b";
  }

  if (flag) {
    window.location.href = "/payment";
  } else {
    alert("please check the address corectly")
  }


}



function checkbox1() {
  var remove_address = document.getElementById("remove");
  var same_address = document.getElementById("same_address");
  if (same_address.checked) {
    remove_address.style.display = "none";
    // name2.value = nameda1;
    // mobile2.value = mobileda1;
    pincode2.value = pincode1.value;
    address2.value = address1.value;
    city2.value = city1.value;
    state2.value = state1.value;

  } else {
    remove_address.style.display = "block";
  }

}


submit.addEventListener("click", display)

function display() {



  let product = {
    name: nameda1,
    mobile: mobileda1,
    pincode: pincode1.value,
    address: address1.value,
    city: city1.value,
    state: state1.value,
    country: country1
  };

  let product2 = {
    name: nameda1,
    mobile: mobileda1,
    pincode: pincode2.value,
    address: address2.value,
    city: city2.value,
    state: state2.value
  }


  console.log(product);
  console.log(product2);
  checkoutInfo(product);
  checkoutInfo1(product2);

}

//  storing the address in  local storage
if (localStorage.getItem("checkout") === null) {
  localStorage.setItem("checkout", JSON.stringify([]));
}

function checkoutInfo(p) {

  //console.log('p:', p)

  let checkout_info = JSON.parse(localStorage.getItem("checkout"));

  checkout_info.push(p);

  localStorage.setItem("checkout", JSON.stringify(checkout_info));

  console.log("checkout-info :", checkout_info);

}


if (localStorage.getItem("checkout1") === null) {
  localStorage.setItem("checkout1", JSON.stringify([]));
}

function checkoutInfo1(p) {

  let checkout_info = JSON.parse(localStorage.getItem("checkout1"));

  checkout_info.push(p);

  localStorage.setItem("checkout1", JSON.stringify(checkout_info));

  console.log("checkout-info :", checkout_info);

}

// **************************
let cart = JSON.parse(localStorage.getItem("Checkout_Data"));
var cart_value = document.getElementById("cart_val");
var retail_value = document.getElementById("retail_val");
var delivery = document.getElementById("delivery");
var assembly_value = document.getElementById("assembly_val");
var total_value = document.getElementById("total_val");
var give_val = document.getElementById("give_val");
assembly_value.innerText = cart.Assembly;
cart_value.innerText = cart.Cart_Value;
delivery.innerText = cart.Delivery_Free;
retail_value.innerText = cart.Retail_Discount;
total_value.innerText = cart.Total;

var give_india = document.getElementById("give_india");
var r_checkbox = document.getElementById("rgt_checkbox");
var total = document.getElementById("total_val");
var give_val = document.getElementById("give_val");

r_checkbox.addEventListener("change", rightCheckbox);

function rightCheckbox() {
  if (r_checkbox.checked) {
    give_india.style.display = "grid";
    total_value.innerText = parseInt(total_value.innerText) + 99;
  } else {
    give_india.style.display = "none";
    total_value.innerText = parseInt(total_value.innerText) - 99;
  }
}
