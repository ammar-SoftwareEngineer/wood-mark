let nav = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".nav-link");
let toggleMenu = document.querySelector(".toggle-menu");
let navHeight = nav.offsetHeight;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (scrollTop > navHeight) {
    nav.style.cssText =
      " background-color: #FFF; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);   transition:  0.3s ease-out;  ";
    nav.classList.add("fixed-top");
    navLink.forEach((link) => {
      link.style.color = "#764220";
    });
    toggleMenu.style.color = "#764220";
  } else {
    nav.style.cssText =
      "background-color: transparent; box-shadow: none; transition:  0.3s ease-in; ";
    nav.classList.remove("fixed-top");
    navLink.forEach((link) => {
      link.style.color = "#ffff ";
    });
    toggleMenu.style.color = "#ffffff";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".submenu-toggle-btn").forEach((btn) => {
    btn.onclick = () => {
      const menuItem = btn.closest(".menu-item");
      const submenu = menuItem.querySelector(".sub-menu");
      const icon = btn.querySelector("i");

      submenu?.classList.toggle("active");
      icon?.classList.toggle("rotate-down");
    };
  });
});

var owl = $(".hero");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 100,
  autoplay: true,
  rtl: true,
  nav: false,
  dots: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

var owl = $(".testimonials");
owl.owlCarousel({
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
      // لا تظهر dots هنا أيضاً
    },
    992: {
      items: 4,

      // تظهر dots في الشاشات الكبيرة فقط
    },
    1200: {
      items: 5,
    },
  },
  loop: true,

  margin: 20,
  autoplay: true,
  rtl: true,
  nav: false,
  dots: false,
  autoplayTimeout: 1500,
});

// let started = false; // حتى لا يعيد العد كل مرة
// window.addEventListener('scroll', function() {
//   let counter = document.getElementById('counter');
//   let counterTop = counter.getBoundingClientRect().top;

//   if (counterTop < window.innerHeight && !started) {
//     started = true;
//     let count = 0;
//     let target = 1000;
//     let interval = setInterval(() => {
//       count += 10;
//       counter.textContent = count;
//       if (count >= target) {
//         clearInterval(interval);
//         counter.textContent = target; // للتأكيد
//       }
//     }, 20);
//   }
// });
