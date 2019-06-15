const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Project Start

// Tasks 1 & 2 combined. I didn't make selectors for everything, because why bother when you can set directly?

// header stuff
let headerEl = document.querySelector("header");

// nav stuff
let navEl = document.querySelector("nav");
let navA = Array.from(navEl.children);
navA.forEach((elem, index) => {elem.textContent = siteContent["nav"][`nav-item-${index + 1}`]});
//easy checking of original
navA[3].href = "original.html";


// cta PITA. Using .innerHTML to get the code to match original. Couldn't figure way using .textContent
document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent["cta"]["h1"].replace(/\s/g, '<br> ');

document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

// Main Content
// H4 headers. Did this stupidly. Will do p's similarly.
let aMainH4 = Array.from(document.querySelectorAll(".main-content h4"));
let aH4keys = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"];
aMainH4.forEach((elem, index) => elem.textContent = siteContent["main-content"][aH4keys[index]]);

// middle img
document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

// Correction: did p even more stupidly
let aMainP = Array.from(document.querySelectorAll(".main-content p"));
let aPkeys = aH4keys.map(elem => elem.slice(0, elem.indexOf('-') + 1) + "content");
aMainP.forEach((elem, index) => elem.textContent = siteContent["main-content"][aPkeys[index]]);

// contact stuff
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let aContactP = Array.from(document.querySelectorAll(".contact p"));
let aContactPkeys = ["address", "phone", "email"];
aContactP.forEach((elem, index) => elem.textContent = siteContent["contact"][aContactPkeys[index]]);
aContactP[0].innerHTML = aContactP[0].innerHTML.replace("Street", "Street<br>"); // horrible.

// footer
let footerPEl = document.querySelector("footer p");
footerPEl.textContent = siteContent["footer"]["copyright"];


// Task 3

navA.forEach(elem => elem.style.color = "green");
let appendA = document.createElement("a");
appendA.textContent = "Append";
let prependA = document.createElement("a")
prependA.textContent = "Prepend";
navEl.appendChild(appendA);
navEl.prepend(prependA);
// Appended and Prepended items not colored green. Could make them green, but it's not clear whether to or not.

// Stretch Goals
