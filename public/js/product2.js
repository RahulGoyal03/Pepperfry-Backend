// Adding Navbar --------------------------------------

import navbar from '../components/navbar.js'

let navbar_section = document.getElementById("navbar");
navbar_section.innerHTML = navbar();

// Adding  Footer --------------------------------------

import footer from '../components/footer.js'

let footer_section = document.getElementById("footer");
footer_section.innerHTML = footer();
