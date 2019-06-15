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

document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

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

// H4 headers. Did this stupidly. Will do p's similarly.
let aMainH4 = Array.from(document.querySelectorAll(".main-content h4"));
let aH4keys = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"];
aMainH4.forEach((elem, index) => elem.textContent = siteContent["main-content"][aH4keys[index]]);


// Correction: did p even more stupidly
let aMainP = Array.from(document.querySelectorAll(".main-content p"));
let aPkeys = aH4keys.map(elem => elem.slice(0, elem.indexOf('-') + 1) + "content");
aMainP.forEach((elem, index) => elem.textContent = siteContent["main-content"][aPkeys[index]]);

//contact stuff