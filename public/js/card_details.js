function function_alert(id, input) {
  let check = document.getElementById(input)
  console.log('check:', check)

  let tem = document.getElementById(id)

  if (check.value.length == 0) {

    tem.style.display = "block"
    check.style.border = "1px solid red";
    return false
  } else {
    tem.style.display = "none"
    check.style.border = "1px solid #8e8e8e"
    return true;
  }

}

function go_to() {

  if (function_alert('card-num', 'input-card-num') && function_alert('date', 'input-date') && function_alert('cvv', 'input-cvv')) {

    window.location.href = "thankyou";
  }

}

let Checkout_Data = JSON.parse(localStorage.getItem("Checkout_Data"))

get_total()

function get_total() {

  let cart_val = Checkout_Data.Total

  let sum = document.getElementById("final-total")
  sum.innerText = `₹${cart_val}`
}
