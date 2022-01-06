get_username();

var to_pay = 0;

function get_username() {
  let uname = JSON.parse(localStorage.getItem("logined_user"))
  console.log('uname:', uname[0])

  let tem = document.getElementById("user-name")
  let to_bold = `WELCOME <strong>${uname[0].toUpperCase()}!</strong>`
  console.log('tobold:', to_bold)

  tem.innerHTML = to_bold;
}

cart_details();

function cart_details() {
  let Product_list = JSON.parse(localStorage.getItem("Pf_cart"))
  console.log('Product_list:', Product_list.length)
  var count_of_prod = Product_list.length;

  let tem = document.getElementById("count_prod")
  console.log('tem:', tem)
  tem.innerText = count_of_prod;
}

// ************************************************

let uname = JSON.parse(localStorage.getItem("logined_user"))
console.log('uname:', uname[0])

let ship_address = JSON.parse(localStorage.getItem("checkout"))
console.log('ship_address:', ship_address)
let bill_address = JSON.parse(localStorage.getItem("checkout1"))
console.log('bill_address:', bill_address)

user_details(ship_address[ship_address.length - 1], "address1")
user_details(bill_address[bill_address.length - 1], "address2")

function user_details(checkout, target_id) {


  let shipping_details = document.getElementById("shipping-details")

  let target = document.getElementById(target_id)

  let name = document.createElement("p")
  name.innerText = uname[0];

  let address = document.createElement("p")
  address.innerText = checkout.address;

  let pincode = document.createElement("p")
  pincode.innerText = checkout.pincode;

  let state = document.createElement("p")
  state.innerText = checkout.state;

  let mobile = document.createElement("p")
  mobile.innerText = "M : " + uname[1];

  target.append(name, address, pincode, state, mobile)
}
// ************************************************

var whole_total = 0;

let Checkout_Data = JSON.parse(localStorage.getItem("Checkout_Data"))
console.log('Checkout_Data:', Checkout_Data)
get_total()

function get_total() {
  let cart_val = document.getElementById("cart-val")
  cart_val.innerText = Checkout_Data.Total

  whole_total += +(Checkout_Data.Total)

  let sum = document.getElementById("whole-total")
  sum.innerText = whole_total;

  to_pay = whole_total;
}

// ******************** error message ****

function testError(id1, id2, id3, id4) {
  var item1 = document.getElementById(id1).checked
  // console.log('tem:', tem)
  var item2 = document.getElementById(id2).checked
  var item3 = document.getElementById(id3).checked
  if (id4 == "item24") {
    item4 = false
  } else {
    var item4 = document.getElementById(id4).checked
  }

  if (item1 || item2 || item3 || item4) {
    window.location.href = "/card_details";
  } else {
    let tarID = document.getElementById("error-box");

    let p = document.createElement("p")
    p.innerText = "Please select any of the option"

    tarID.append(p);
    tarID.style.display = "flex"
  }


}

// *************************************

function checkbox() {
  let box = document.getElementById("checkbox1")
  let give_india = document.getElementById("give_india_div")
  // console.log('box:', box.checked)
  if (box.checked) {
    give_india.style.display = "flex"
    whole_total += 99

    let sum = document.getElementById("whole-total")
    sum.innerText = whole_total
    to_pay = whole_total;

  } else {
    give_india.style.display = "none"
    whole_total -= 99

    let sum = document.getElementById("whole-total")
    sum.innerText = whole_total
    to_pay = whole_total;
  }
}

var flag_for_shipping = false;
var flag_for_payment = false;


function to_hide() {

  let b1 = document.getElementById("payment-method")
  b1.style.display = "none"
  let b2 = document.getElementById("plus-minus3")
  b2.innerHTML = `<span class="material-icons-outlined">   add </span>`

  flag_for_payment = false;
}



function hide_and_seek(plus_min_id, what_to_add) {

  // ******* need to hide all *********
  to_hide();

  let tar = document.getElementById(what_to_add);

  let symbol = document.getElementById(plus_min_id);

  if (plus_min_id == 'plus-minus2') {

    if (flag_for_shipping) {
      symbol.innerHTML = `<span class="material-icons-outlined">   add </span>`
      tar.style.display = "none"

      flag_for_shipping = false;
    } else {
      symbol.innerHTML = `<span class="material-icons-outlined"> remove </span>`
      tar.style.display = "block"

      flag_for_shipping = true;
    }

  } else {

    if (flag_for_payment) {
      symbol.innerHTML = `<span class="material-icons-outlined">   add </span>`
      tar.style.display = "none"

      flag_for_payment = false;
    } else {
      symbol.innerHTML = `<span class="material-icons-outlined"> remove </span>`
      tar.style.display = "block"

      flag_for_payment = true;
    }

  }

}

var target = document.getElementById("target");

function change(id) {
  // alert(id)

  let div = document.querySelectorAll("#leftId > div")
  console.log('div:', div)
  div.forEach((each_div) => {
    each_div.style.backgroundColor = "white";
    each_div.style.color = "#969696";
  })


  var selected_div = document.getElementById(id);

  if (id === 'atmDiv') {

    selected_div.style.backgroundColor = "black";
    selected_div.style.color = "white";
    target.innerHTML = `<div class="atm-card">
        <p class="p">CHOOSE YOUR DEBIT CARD TYPE</p>

        <div class="btns">

        <label class="radio">
            <input id="item01" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/master-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item02" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/rupay-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item03" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/maestro-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item04" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/visa-card-img.png" alt=""><span></span>
        </label>


        </div>
        <button onclick="testError('item01','item02','item03','item04')" class="proceed-topay-btn">PROCEED TO PAY <span id="amnt">₹${to_pay}</span></button>
        <p>Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options.</p>

        </div>`

  } else if (id === "cash-on-div") {

    selected_div.style.backgroundColor = "black";
    selected_div.style.color = "white";

    target.innerHTML = `<div class="atm-card">
        <p class="p">CASH ON DELIVERY</p>
        <a href="order placed.html"><button class="proceed-topay-btn">PROCEED TO PAY <span id="amnt">₹${to_pay}</span></button></a>
        <p>Note: 38,564 People used online payment options in the last hour. Pay online now for safe and contactless delivery.</p>
        </div>`

  } else if (id === "credit-div") {

    selected_div.style.backgroundColor = "black";
    selected_div.style.color = "white";

    target.innerHTML = `<div class="atm-card">
        <p class="p">CHOOSE YOUR CREDIT CARD TYPE</p>

        <div class="btns">

        <label class="radio">
            <input id="item11" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/american-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item12" type="radio" value="" name="key" class="radio-input"><img id="credit-rupay" src="https://ii1.pepperfry.com/images/diners/rupay-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item13" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/maestro-card-img.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item14" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/visa-card-img.png" alt=""><span></span>
        </label>


        </div>
        <button onclick="testError('item11','item12','item13','item14')" class="proceed-topay-btn">PROCEED TO PAY <span id="amnt">₹${to_pay}</span></button>
        <p>Note: You Will Be Asked To Enter Your Credid Card Details On Proceeding With The Selected Payment Options.</p>

        </div>`

  } else if (id === "internet-div") {

    selected_div.style.backgroundColor = "black";
    selected_div.style.color = "white";

    target.innerHTML = `<div class="atm-card">
        <p class="p">CHOOSE FROM THE TOP BANKS BELOW</p>

        <div class="btns">

        <label class="radio">
            <input id="item21" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/hdfc-bank-icon.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item22" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/icici-bank-icon.png" alt=""><span></span>
        </label>
        <label class="radio">
            <input id="item23" type="radio" value="" name="key" class="radio-input"><img src="https://ii1.pepperfry.com/images/state-bank-of-india-icon.png" alt=""><span></span>
        </label>

        </div>
        <div class="bank-or"><p>OR</p><hr></div>
            <div class="select-bank"><select class="bank">
                <option value="">Select Bank</option>
            </select></div>
            <button onclick="testError('item21','item22','item23','item24')" class="proceed-topay-btn">PROCEED TO PAY <span id="amnt">₹${to_pay}</span></button>
        <p>Note: On clicking “Proceed To Pay”, you will be directed to a secure Payment Gateway. After completing the payment process there you will be redirected back to Pepperfry.com to view your order details.
        </p>

        </div>`

  } else {
    alert("Sory this method not available for now!!!")
  }
}
