
// Function to show the answers in the FAQs section
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});




// --------

const basicPlanBtn = document.querySelectorAll('.card .small-btn#basic');

basicPlanBtn.forEach(function(el) {
  el.addEventListener('click', ()=> {
    const planCards = document.querySelectorAll('.card');
    for (let i = 0; i < planCards.length; i++) {
      if (planCards[i].id === "basic") {
        planCards[i].classList.add("chosen");
      } else {
        planCards[i].classList.remove("chosen");
      }
    }
  });
});


const popularPlanBtn = document.querySelectorAll('.card .small-btn#popular');

popularPlanBtn.forEach(function(el) {
  el.addEventListener('click', ()=> {
    const planCards = document.querySelectorAll('.card');
    for (let i = 0; i < planCards.length; i++) {
      if (planCards[i].id === "popular") {
        planCards[i].classList.add("chosen");
      } else {
        planCards[i].classList.remove("chosen");
      }
    }
  });
});


const proPlanBtn = document.querySelectorAll('.card .small-btn#pro');

proPlanBtn.forEach(function(el) {
  el.addEventListener('click', ()=> {
    const planCards = document.querySelectorAll('.card');
    for (let i = 0; i < planCards.length; i++) {
      if (planCards[i].id === "pro") {
        planCards[i].classList.add("chosen");
      } else {
        planCards[i].classList.remove("chosen");
      }
    }
  });
});



const allBtns = document.querySelectorAll('.card .small-btn');




// ---------------------------------------------



const options = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "mailcheck.p.rapidapi.com", 
    "x-rapidapi-key": "66b79f213dmsh0385321f06357cfp1cee67jsn17f7c5498d2a"
  }
}

// fetch ('https://mailcheck.p.rapidapi.com/?domain=mailinator.com', options);


async function fetchdata() {
  let data = await fetch ('https://mailcheck.p.rapidapi.com/?domain=mailinator.com', options);
  console.log( await data.json())
}

// fetchdata();



// let emails = ["Jdalsman101473@hotmail.com", "Annclayca1@gmail.com"];
let emails = ["Karter's.l.2010@gmail.com"];

async function checkEmailList(emailList) {
  // const email = "Annclayca1@gmail.com";
  // const email = "Jdalsman101473@hotmail.com";

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '66b79f213dmsh0385321f06357cfp1cee67jsn17f7c5498d2a',
      'x-rapidapi-host': 'mailcheck.p.rapidapi.com'
    },
  };

  for (let i = 0; i < emailList.length; i++ ) {
    const url = `https://mailcheck.p.rapidapi.com/?email=${emailList[i]}`;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

}

// checkEmailList(emails);


