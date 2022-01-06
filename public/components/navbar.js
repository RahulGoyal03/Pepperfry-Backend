function navbar() {
  return `
  <div id="links">
    <div id="logo">
      <a href="/"><img src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" /></a>
    </div>
    <div id="searchbar">
      <i class="material-icons-outlined">search</i>
      <input type="search" placeholder="Search" />
    </div>
    <div id="icon">
      <div class="links">
        <span class="material-icons-outlined"> local_shipping </span>
        <span>Track</span>
      </div>
      <div class="links">
        <span class="material-icons-outlined"> favorite_border </span>
        <span>
          Wishlist
        </span>
      </div>
      <div class="links">
      <a href="/cart"><span class="material-icons-outlined"> shopping_cart </span></a>
        <span>Cart</span>
      </div>
      <div class="links" id="profile">
        <span class="material-icons-outlined"> person_outline </span>
        <span>Profile</span>
        <div id="signin-div">
          <button id="signin-div-btn">LOGIN/REGISTER</button>
          <p>To access your account & manage orders</p>
        </div>
        <div id="login-div">

        </div>
      </div>
    </div>
  </div>
  <div id="category">
    <div id="f"><a href="#">Furniture</a></div>
    <div id="l"><a href="#">Living</a></div>
    <div><a href="#">Bedroom</a></div>
    <div><a href="#">Kids Room</a></div>
    <div><a href="#">Mattresses</a></div>
    <div><a href="#">Furnishings</a></div>
    <div><a href="#">Decor</a></div>
    <div><a href="#">Lighting</a></div>
    <div><a href="#">Appliances</a></div>
    <div style="margin-right: 0px"><a href="#">Modular Furniture</a></div>
  </div>
  <div id="dropdown">
    <div id="furniture-dropdown">
      <div id="furniture-a">
        <span>Sofas</span>
        <span>Seating</span>
        <span>Chairs</span>
        <span>Tables</span>
        <span>Cabinetry</span>
        <span>Dining & Bar</span>
        <span>Beds</span>
      </div>
      <div style="display: flex;">
        <div class="furniture-b">
          <a href="/products">Sofas</a>
          <a style="color: gray;" href="#">1Seater Sofas</a>
          <a style="color: gray;" href="#">2Seater Sofas</a>
          <a style="color: gray;" href="#">3Seater Sofas</a>
          <a href="#">Sofa Sets</a>
          <a href="#">Sectional Sofas</a>
          <a href="#">Sofa Cum Beds</a>
          <a href="#">Recliners</a>
          <a href="#">Futons</a>
          <a href="#">Sofa Spa</a>
        </div>
        <div class="furniture-b" style="background-color: #F5F5F5;">
          <a href="#">Settees</a>
          <a href="#">Benches</a>
          <a href="#">Chaise Loungers</a>
          <a href="#">Recamiers</a>
          <a href="#">Ottomans</a>
          <a href="#">Pouffes</a>
          <a href="#">Foot Stools</a>
          <a href="#">Seating Stools</a>
          <a href="#">Bean Bags</a>
          <a href="#">Swings</a>
          <a href="#">Hammocks</a>
        </div>
        <div class="furniture-b">
          <a href="#">Arm Chairs</a>
          <a href="#">Rocking Chairs</a>
          <a href="#">Lounge Chairs</a>
          <a href="#">Cafe Chairs</a>
          <a href="#">Iconic Chairs</a>
          <a href="#">Slipper Chairs</a>
          <a href="#">Barrel Chairs</a>
          <a href="#">Cantilever Chairs</a>
          <a href="#">Folding Chairs</a>
          <a href="#">Plastic Chairs</a>
          <a href="#">Wing Chairs</a>
          <a href="#">Office Chairs</a>
          <a href="#">Patio Chairs</a>
        </div>
        <div class="furniture-b" style="background-color: #F5F5F5;">
          <a href="#">Coffee Tables</a>
          <a href="#">Coffee Tables Sets</a>
          <a href="#">End Tables</a>
          <a href="#">Nest ofTables</a>
          <a href="#">Console Tables</a>
          <a href="#">Portable Tables</a>
          <a href="#">Study Tables</a>
          <a href="#">Dressing Tables</a>
          <a href="#">Bedside Tables</a>
          <a href="#">Office Tables</a>
          <a href="#">Patio Tables & Sets</a>
          <a style="color: gray;" href="#">Patio Sets</a>
          <a style="color: gray;" href="#">Patio Tables</a>
        </div>
        <div class="furniture-b">
          <a href="#">Shoe Racks</a>
          <a href="#">Entertainment Units</a>
          <a href="#">Cabinet & Sideboards</a>
          <a href="#">Chest of Drawers</a>
          <a href="#">Book Shelves</a>
          <a href="#">Book Cases</a>
          <a href="#">Trunks</a>
          <a href="#">Wardrobes</a>
          <a href="#">Modular Wardrobes</a>
          <a href="#">Plastic Cabinets</a>
          <a href="#">Office Cabinets</a>
        </div>
        <div class="furniture-b" style="background-color: #F5F5F5;">
          <a href="#">Dining Sets</a>
          <a href="#">Dining Chairs</a>
          <a href="#">Dining Tables</a>
          <a href="#">Bar Cabinets</a>
          <a href="#">Bar Trolleys</a>
          <a href="#">Wine Racks</a>
          <a href="#">Bar Stools</a>
          <a href="#">Bar Table Sets</a>
          <a href="#">Modular Kitchens</a>
        </div>
        <div class="furniture-b">
          <a href="#">Beds</a>
          <a style="color: gray;" href="#">Single Beds</a>
          <a style="color: gray;" href="#">Queen Size Beds</a>
          <a style="color: gray;" href="#">King Size Beds</a>
          <a href="#">Upholstered Beds</a>
          <a href="#">Poster Beds</a>
          <a href="#">Bunk Beds</a>
          <a href="#">Folding Beds</a>
          <a href="#">Mattresses</a>
        </div>
      </div>
    </div>
    <div id="dropdown-two">
      <div id="living-dropdown">
        <div id="furniture-a">
          <span>Sofas</span>
          <span>Seating</span>
          <span>Chairs</span>
          <span>Tables</span>
          <span>Cabinetry</span>
          <span>Decor</span>
          <span>Lighting</span>
        </div>
        <div style="display: flex;">
          <div class="furniture-b">
            <a href="#">Sofas</a>
            <a style="color: gray;" href="#">1Seater Sofas</a>
            <a style="color: gray;" href="#">2Seater Sofas</a>
            <a style="color: gray;" href="#">3Seater Sofas</a>
            <a href="#">Sofa Sets</a>
            <a href="#">Sectional Sofas</a>
            <a href="#">Sofa Cum Beds</a>
            <a href="#">Recliners</a>
            <a href="#">Futons</a>
            <a href="#">Sofa Spa</a>
          </div>
          <div class="furniture-b" style="background-color: #F5F5F5; height: 345px;">
            <a href="#">Settees</a>
            <a href="#">Benches</a>
            <a href="#">Chaise Loungers</a>
            <a href="#">Recamiers</a>
            <a href="#">Ottomans</a>
            <a href="#">Pouffes</a>
            <a href="#">Foot Stools</a>
            <a href="#">Seating Stools</a>
            <a href="#">Bean Bags</a>
            <a href="#">Bar Stools</a>
          </div>
          <div class="furniture-b">
            <a href="#">Arm Chairs</a>
            <a href="#">Rocking Chairs</a>
            <a href="#">Lounge Chairs</a>
            <a href="#">Cafe Chairs</a>
            <a href="#">Iconic Chairs</a>
            <a href="#">Slipper Chairs</a>
            <a href="#">Barrel Chairs</a>
            <a href="#">Cantilever Chairs</a>
            <a href="#">Folding Chairs</a>
            <a href="#">Plastic Chairs</a>
            <a href="#">Wing Chairs</a>
            <a href="#">Chair Spa</a>
          </div>
          <div class="furniture-b" style="background-color: #F5F5F5; height: 345px;">
            <a href="#">Coffee Tables</a>
            <a href="#">Coffee Tables Sets</a>
            <a href="#">End Tables</a>
            <a href="#">Nest ofTables</a>
            <a href="#">Console Tables</a>
            <a href="#">Study Tables</a>
            <a href="#">Portable Tables</a>
            <a href="#">Bar Table Sets</a>
          </div>
          <div class="furniture-b">
            <a href="#">Shoe Racks</a>
            <a href="#">Entertainment Units</a>
            <a href="#">Cabinet & Sideboards</a>
            <a href="#">Book Shelves</a>
            <a href="#">Book Cases</a>
            <a href="#">Trunks</a>
            <a href="#">Plastic Cabinets</a>
            <a href="#">Bar Cabinets</a>
            <a href="#">Bar Trolleys</a>
          </div>
          <div class="furniture-b" style="background-color: #F5F5F5; height: 345px;">
            <a href="#">Wall Shelves</a>
            <a href="#">Wall Art</a>
            <a href="#">Clocks</a>
            <a href="#">Mandirs</a>
            <a href="#">Table Decor</a>
            <a href="#">Vases</a>
            <a href="#">Figurines</a>
            <a href="#">Photo Frames</a>
            <a href="#">Key Holders</a>
          </div>
          <div class="furniture-b">
            <a href="#">Chandeliers</a>
            <a href="#">Wall Lights</a>
            <a href="#">Floor Lamps</a>
            <a href="#">Hanging Lights</a>
            <a href="#">Table Lamps</a>
            <a href="#">Flush Mounts</a>
            <a href="#">Panel Lights</a>
            <a href="#">Tea Light Holders</a>
            <a href="#">String Lights</a>
            <a href="#">Picture Light</a>
            <a href="#">Candle Holders</a>
          </div>
        </div>
      </div>
      <div id="signin-modal">
        <span id="close">X</span>
        <div class="mainPage">
          <div class="left">
            <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg" alt="" />
          </div>
          <div class="right">
            <div class="rightUp">
              <div class="rightInner">
                <form id="myform" method="post" action="/signup">
                  <div class="container">
                    <div class="name">
                      <label for="uname"></label>
                      <input type="text" class="Input" id="UnName" placeholder="Name" name="uname" required>
                      <p id="alert1"></p>
                    </div>
                  </div>
                  <div class="container">
                    <div class="name">
                      <label for="num"></label>
                      <input type="tel" class="Input" id="UserNum" placeholder="Mobile number" name="num" required>
                      <p id="alert"></p>
                    </div>
                  </div>
                  <div class="container">
                    <div class="name">
                      <label for="mail"></label>
                      <input type="text" class="Input" id="mail" placeholder="Email" name="mail" required>
                      <p id="alert2"></p>
                    </div>
                  </div>
                  <div class="container">
                    <div class="name">
                      <label for="psswrd"></label>
                      <input type="password" class="Input" id="psswrd" placeholder="Password" name="psw" required>
                      <p id="alert3"></p>
                    </div>
                  </div>
                  <button id="register">REGISTER</button>
                </form>

                <span class="login_span">By registering you agree to our <a class="termconditions" href="#">Terms &
                    Conditions</a></span>
              </div>
            </div>
            <div class="rightdown">
              <div class="rightdown-1">
                <a class="link" href="#" id="go_to_login">Existing User? Log In</a>
              </div>
              <div class=" rightdown-2 ">
                <span class="social ">OR Continue with</span>
                <a class="social-image " href="#">
                  <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png " />
                </a>
                <a class="social-image " href="#">
                  <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="login-modal">
        <div id="login-modal-text">
          <span>Log In</span>
          <p>You Will Be Able To Track Your Order, Use Wishlist & More.</p>
        </div>
        <span id="close1">X</span>
        <div class="loginPage">
          <div class="left_one">
              <img src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" alt="" />
          </div>
          <div class="right_one">
              <div class="right_one_Up">
                  <div class="right_one_Inner">
                      <form id="myform1" method="post" action="/login">
                          <div class="block">
                              <div class="names">
                                  <label for="mail"></label>
                                  <input type="text" class="input" id="mail1" placeholder="Email" name="mail" required>
                              </div>
                          </div>
                          <div class="block">
                              <div class="names">
                                  <label for="psw"></label>
                                  <input type="password" class="input" id="psw1" placeholder="Password" name="psw" required>
                              </div>
                          </div>
                          <button id="login">LOG IN</button>
                      </form>

                      <a href="#" style="color: #f16521 ;font-size: 12px; font-weight: 300;font-family: 'Fira Sans',sans-serif;">Forgot Password</a></span>
                  </div>
              </div>
              <div class="right_one_down">
                  <div class="right_one_down-1">
                      <a class="link" href="#" style="color: #f16521; font-family: 'Fira Sans', sans-serif;" id="go-to-register">New to Pepperfry? Register Here</a>
                  </div>
                  <div class="right_one_down-2">
                      <span class="media">OR Continue with</span>
                      <a class="media-image" href="#">
                          <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" />
                      </a>
                      <a class="media-image" href="#">
                          <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" />
                      </a>
                  </div>
              </div>
          </div>
      </div>
      </div>`
}

export default navbar;
