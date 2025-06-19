// Function to style the header in its sticky states

window.onscroll = function() {
  var header = document.querySelector("header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Function to update the hero section height dynamically
// function updateHeroHeight() {
//   const header = document.querySelector('header');
//   const heroSection = document.querySelector('.hero');

//   if (!header || !heroSection) return;

//   if (window.innerWidth >= 992) {
//     const headerHeight = header.offsetHeight;
//     heroSection.style.height = `calc(100vh - ${headerHeight}px)`;
//   } else {
    // remove any JS-set height so CSS can take over
//     heroSection.style.height = '';
//   }
// }


// Call the function on load and when the window is resized
// window.addEventListener('load', updateHeroHeight);
// window.addEventListener('resize', updateHeroHeight);


// Function to reveal the nav menu on small screens
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const header = document.querySelector("header");

  // Toggle class on burger-menu click
  burger.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent it from bubbling to document
    header.classList.toggle("active-sm-screen");
  });

  // Remove class on any <a> click
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("active-sm-screen");
    });
  });
});



// Function for animations on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Function for hero section quote animation
window.addEventListener('load', function() {
  var quoteCont = document.querySelector('.quote-cont');
  quoteCont.classList.add('active-quote');
});

// Function to show the answers in the FAQs section
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});



// Function to animate the counter
let valueDisplays = document.querySelectorAll(".counter");

let duration = 1500; 

function startCounter(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  
  let incrementTime = duration / endValue;  

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;

    if (startValue === endValue) {
      clearInterval(counter); 
    }
  }, incrementTime);
}

// IntersectionObserver to detect when the element is in the viewport
const observers = new IntersectionObserver((entries, observers) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observers.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});

// Start observing each counter element
valueDisplays.forEach((valueDisplay) => {
  observers.observe(valueDisplay);
});
