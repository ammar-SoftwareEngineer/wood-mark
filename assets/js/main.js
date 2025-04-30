let nav = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".nav-link");
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
  } else {
    nav.style.cssText =
      "background-color: transparent; box-shadow: none; transition:  0.3s ease-in; ";
    nav.classList.remove("fixed-top");
   navLink.forEach((link) => {
      link.style.color = "#ffff ";
    });
  }
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
      items: 3,
      center:true,
    },
    600: {
      items: 4,
 // لا تظهر dots هنا أيضاً
    },
    992: {
      items: 6,
      center:true,
// تظهر dots في الشاشات الكبيرة فقط
    },
    1200: {
      items: 8,
      center:true,
    },
  },
  loop: true,
  center:true,
  margin: 60,
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