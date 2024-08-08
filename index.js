function openBooking(movieTitle) {
  document.getElementById("booking-sidebar").style.width = "350px";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("movie-title").innerText = movieTitle;
}

function closeBooking() {
  document.getElementById("booking-sidebar").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Booking Confirmed for " + document.getElementById("movie-title").innerText);
  closeBooking();
});
function openSignIn() {
  document.getElementById("signin-form-overlay").style.display = "flex";
}

function closeSignIn() {
  document.getElementById("signin-form-overlay").style.display = "none";
}

document.getElementById("signin-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Signed In as " + document.getElementById("signin-email").value);
  closeSignIn();
});
// Swiper initialization
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

const swiperComing = new Swiper('.coming-container', {
  loop:true,
  centeredSlides:true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
      568: {
        slidesPerView: 3,
      },
      768: {
          slidesPerView: 4,
      },
      1024: {
          slidesPerView: 5,
      }
  }
});

// Navbar functionality
var header = document.querySelector('header');
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.nav-bar');

window.addEventListener("scroll", () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
