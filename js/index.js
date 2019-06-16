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

/********** Tasks 1: set selectors **********/

//nav
let navEl = document.querySelector("nav");
let navA = Array.from(navEl.children);

//cta
let ctaH1 = document.querySelector(".cta-text h1");
let getStartedBtn = document.querySelector(".cta-text button");

//main content
let aMainH4 = Array.from(document.querySelectorAll(".main-content h4"));
let aMainP = Array.from(document.querySelectorAll(".main-content p"));

//contact stuff
let contactH4 = document.querySelector(".contact h4");
let aContactP = Array.from(document.querySelectorAll(".contact p"));

// footer
let footerPEl = document.querySelector("footer p");

/********** End Task 1 ********************/

/********** Task 2 Update HTML ************/

//making function for ease of use with stretch 2 goal

function setPageHtml()
{
  // nav stuff
  navA.forEach((elem, index) => {elem.textContent = siteContent["nav"][`nav-item-${index + 1}`]});
  
  // cta stuff
  document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];
  ctaH1.textContent = siteContent["cta"]["h1"].replace(/\s/g, '\n');
  ctaH1.style.whiteSpace = "pre-line";
  getStartedBtn.textContent = siteContent["cta"]["button"];
  
  // Main Content
  // H4 headers. Did this stupidly. Will do p's similarly.
  let aH4keys = ["features-h4", "about-h4", "services-h4", "product-h4", "vision-h4"];
  aMainH4.forEach((elem, index) => elem.textContent = siteContent["main-content"][aH4keys[index]]);
  
  // middle img
  document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];
  
  // p
  let aPkeys = aH4keys.map(elem => elem.slice(0, elem.indexOf('-') + 1) + "content");
  aMainP.forEach((elem, index) => elem.textContent = siteContent["main-content"][aPkeys[index]]);
  
  // contact stuff
  
  contactH4.textContent = siteContent["contact"]["contact-h4"];
  
  let aContactPkeys = ["address", "phone", "email"];
  aContactP.forEach((elem, index) => elem.textContent = siteContent["contact"][aContactPkeys[index]]);
  aContactP[0].style.whiteSpace = "pre-line";
  aContactP[0].textContent = aContactP[0].textContent.replace("Street", "Street\n");
  aContactP[0].textContent = aContactP[0].textContent.replace(",erehwemoS", ",erehwemoS\n")
  // footer
  footerPEl.textContent = siteContent["footer"]["copyright"];
  
  
  /**************Task 3: Add new content  *************/

  navA.forEach(elem => elem.style.color = "green");
  let appendA = document.createElement("a");
  appendA.textContent = "Append";
  let prependA = document.createElement("a")
  prependA.textContent = "Prepend";
  navEl.appendChild(appendA);
  navEl.prepend(prependA);
  // Appended and Prepended items not colored green. Could make them green, but it's not clear whether to or not.

  /********************End Task 3  ********************/

  /* Stretch Goal 1: updating append and prepend to be green. */

  navA = Array.from(navEl.children);
  navA.forEach(elem => elem.style.color = "green");

}

setPageHtml() //completes task 2, 3, stretch 1

/* Stretch Goal 2 Make the "Get Started" button do something. I guess I'll reverse each string. */

function reverseEachString()
{
  //nav
  Object.keys(siteContent["nav"]).filter(elem => elem.includes("nav-item"))
  .forEach(elem => siteContent["nav"][elem] = siteContent["nav"][elem].split("").reverse().join(""));

  //cta
  siteContent["cta"]["h1"] = siteContent["cta"]["h1"].split("").reverse().join("")
  siteContent["cta"]["button"] = siteContent["cta"]["button"].split("").reverse().join("");

  //main content
  Object.keys(siteContent["main-content"]).filter(elem => !elem.includes("img"))
  .forEach(elem => siteContent["main-content"][elem] = siteContent["main-content"][elem].split("").reverse().join(""));

  //contact
  Object.keys(siteContent["contact"])
  .forEach(elem => siteContent["contact"][elem] = siteContent["contact"][elem].split("").reverse().join(""));

  //footer
  siteContent["footer"]["copyright"] = siteContent["footer"]["copyright"].split("").reverse().join("");
}

//make the button work

getStartedBtn.addEventListener('click', function()
{
  reverseEachString();
  setPageHtml();
})

//works, but strange behavior with nav a losing some padding each click.