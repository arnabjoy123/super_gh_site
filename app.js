//navbar
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollheight = window.scrollY;
  const navheight = nav.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// slides

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  carousel(counter);
});

prevBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  carousel(counter);
});

function carousel(num) {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${num * 100}%)`;
  });
}

//accordion

const tog = document.querySelectorAll(".question-container");
const text = document.querySelectorAll(".not-active");

tog.forEach(function (quest) {
  quest.addEventListener("click", function () {
    const targetId = quest.getAttribute("data-target-id");

    text.forEach(function (p) {
      const pTargetId = p.getAttribute("data-target-id");
      if (targetId === pTargetId) {
        p.classList.toggle("active");
      } else {
        p.classList.remove("active");
      }
    });
  });
});

//reviews

const reviews = [
  {
    id: 1,
    name: "Vaibhav Shrivas",
    job: "Zoner out",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Specialises in bottom fragging, Zones out once in a while only to come back and do Ace sorry ass. Has a friend names Uncle who uses his hand on him in strange ways",
  },
  {
    id: 2,
    name: "Naman Shukla",
    job: "Self fragger specialist",
    img: "IMG-20240413-WA0007.jpg",
    text: "Plays for the opponent team while being in our team. Ethnically ambiguos pesron with a bit of both(UP and bihar) heritage,Has the highest kill count..........in Among us",
  },
  {
    id: 3,
    name: "Aditya Dhar",
    job: "Sniper sexual",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Best site watcher, can effectively divert his own team in to the wrong site. Widely known for having questinable animal memes saved in Facebook. Also, still uses Facebook.",
  },
  {
    id: 4,
    name: "Shreyansh Mishra",
    job: "Gameboy gandu",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "In game accessory net worth comes in 2nd position of Forbes richest, loves himself a bit of Robin and has a fetish for the Shukla clan...naman...ahem. Also good gamer.",
  },
  {
    id: 5,
    name: "Arnab Das",
    job: "The boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "An enigma, an",
  },
  {
    id: 6,
    name: "Robin Sharma",
    job: "MVP (Medhu Vada player)",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Is very athletic, and somehow has 0 rizz but a lot of female friends. one wonders if they use him for pegging him up. Also a closeted Delhi in Keralean body. ",
  },
  {
    id: 7,
    name: "Amcheersman Gutta",
    job: "Amcheersman Gutta",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Has been studying in Chandigarh University since the last 10 years",
  },
];

const pre = document.querySelector(".prev");
const next = document.querySelector(".next");

const img = document.querySelector(".player-img");
const pb = document.querySelector("#playerbabu");
const role = document.querySelector("#role");
const info = document.querySelector("#info");

const arr = reviews;

let count = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[count];
  img.src = item.img;
  pb.textContent = item.name;
  role.textContent = item.job;
  info.textContent = item.text;
});

next.addEventListener("click", function () {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
  }
  assign(arr[count]);
});

pre.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  assign(arr[count]);
});

function assign(item) {
  img.src = item.img;
  pb.textContent = item.name;
  role.textContent = item.job;
  info.textContent = item.text;
}

//tabs

const tabbutt = document.querySelectorAll(".tab-button");
const tabcot = document.querySelectorAll(".tab-content");

// tabbutt.forEach(function (button) {
//   const buttTargetId = button.getAttribute("data-target-id");
//   button.addEventListener("click", function () {
//     tabcot.forEach(function (tabcont) {
//       const TabTargetId = tabcont.getAttribute("data-target-id");
//       if (buttTargetId === TabTargetId) {
//         tabcont.classList.add("aactive");
//       } else {
//         tabcont.classList.remove("aactive");
//       }
//       console.log(tabbutt);
//     });
//   });
// });

tabbutt.forEach(function (button) {
  const buttTargetId = button.getAttribute("data-target-id");
  button.addEventListener("click", function () {
    tabbutt.forEach(function (btn) {
      btn.style.backgroundColor = "white"; // Reset background color for all buttons
    });

    tabcot.forEach(function (tabcont) {
      const TabTargetId = tabcont.getAttribute("data-target-id");
      if (buttTargetId === TabTargetId) {
        tabcont.classList.add("aactive");
        button.style.backgroundColor = "wheat"; // Change background color for clicked button
      } else {
        tabcont.classList.remove("aactive");
      }
    });
  });
});
