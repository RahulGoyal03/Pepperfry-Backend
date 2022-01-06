// Adding Navbar --------------------------------------

import navbar from '../components/navbar.js'

let navbar_section = document.getElementById("navbar");
navbar_section.innerHTML = navbar();

// Adding  Footer --------------------------------------

import footer from '../components/footer.js'

let footer_section = document.getElementById("footer");
footer_section.innerHTML = footer();

// Drop Down ------------------------------------------

let f = document.getElementById("f");
let furniture = document.getElementById("furniture-dropdown");

f.addEventListener("mouseover", () => {
  furniture.style.display = "block";
})

f.addEventListener("mouseout", () => {
  furniture.style.display = "none";
})

furniture.addEventListener("mouseover", () => {
  furniture.style.display = "block";
})

furniture.addEventListener("mouseout", () => {
  furniture.style.display = "none";
})

let l = document.getElementById("l");
let living = document.getElementById("living-dropdown");

l.addEventListener("mouseover", () => {
  living.style.display = "block";
})

l.addEventListener("mouseout", () => {
  living.style.display = "none";
})

living.addEventListener("mouseover", () => {
  living.style.display = "block";
})

living.addEventListener("mouseout", () => {
  living.style.display = "none";
})

// SignIn/SignUp Modal -----------------------------------------

let profile = document.getElementById("profile");
let signinDiv = document.getElementById("signin-div");
let go_to_login = document.getElementById("go_to_login");
let go_to_register = document.getElementById("go-to-register");

profile.addEventListener("mouseover", () => {
  signinDiv.style.display = "block";
});

profile.addEventListener("mouseout", () => {
  signinDiv.style.display = "none";
})


let signin_div_btn = document.getElementById("signin-div-btn");
let signin_modal = document.getElementById("signin-modal");
let login_modal = document.getElementById("login-modal");
let close = document.getElementById("close");
let close1 = document.getElementById("close1");

signin_div_btn.addEventListener("click", () => {
  signin_modal.style.display = "block";
})

close.addEventListener("click", () => {
  signin_modal.style.display = "none";
})

go_to_login.addEventListener("click", () => {
  login_modal.style.display = "block";
})

go_to_register.addEventListener("click", () => {
  login_modal.style.display = "none";
})

close1.addEventListener("click", () => {
  login_modal.style.display = "none";
  signin_modal.style.display = "none";
})

// SignUp Function ---------------------------------------

function signup() {

  var data = document.getElementById('myform');

  let name = data.UnName.value;
  let mobile = data.UserNum.value;
  let email = data.mail.value;
  let password = data.psswrd.value;
  console.log(name)
  let Name = document.getElementById("UnName")
  let Email = document.getElementById("mail")
  let Mobile = document.getElementById("UserNum")
  let Password = document.getElementById("psswrd")

  let alert4 = document.getElementById("alert")
  let alert1 = document.getElementById("alert1")
  let alert2 = document.getElementById("alert2")
  let alert3 = document.getElementById("alert3")

  if (name.length === 0) {
    Name.style.border = "1px solid red"

    alert1.textContent = "Enter Name"
    alert1.style.color = "red"
    alert1.style.fontSize = "13px"

  } else if (email.length === 0) {
    Email.style.border = "1px solid red"

    alert2.innerHTML = "Enter Address"
    alert2.style.color = "red"
    alert2.style.fontSize = "13px"

  } else if (mobile.length === 0) {
    Mobile.style.border = "1px solid red"

    alert4.innerHTML = "Enter Mobile Number"
    alert4.style.color = "red"
    alert4.style.fontSize = "13px"
  } else if (password.length === 0) {

    Password.style.border = "1px solid red"

    alert3.innerHTML = "Enter Password"
    alert3.style.color = "red"
    alert3.style.fontSize = "13px"
  } else {
    var info = {
      name,
      mobile,
      email,
      password
    }
    var arr;
    arr = localStorage.getItem('signup');

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem('signup'));
    }
    arr.push(info);
    localStorage.setItem('signup', JSON.stringify(arr));
    // alert('You are Successfully Registered');
    // window.location.href = "index.html";
  }

}

let register = document.getElementById("register");
register.addEventListener("click", signup);

// Slider ------------------------------------------------------

function slideShow() {

  const slider = ["https://ii2.pepperfry.com/media/wysiwyg/banners/promo_2X_09122021_es.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_06122021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_06122021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_06122021_2x.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/HB04_Web_06122021_2x.jpg"
  ];

  if (localStorage.getItem('pf_slider') == null) localStorage.setItem('pf_slider', JSON.stringify(slider));

  var slider_1 = document.getElementById('slider');
  var imagee = document.createElement('img');

  var i = 0;

  setInterval(function() {
    i = i % JSON.parse(localStorage.getItem('pf_slider')).length;
    imagee.src = JSON.parse(localStorage.getItem('pf_slider'))[i];
    slider_1.append(imagee);
    i++;
  }, 3000);

}

slideShow();
