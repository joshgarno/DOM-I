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
let a1 = document.getElementsByTagName("a");
a1[0].textContent = (siteContent["nav"]["nav-item-1"]);
a1[1].textContent = (siteContent["nav"]["nav-item-2"]);
a1[2].textContent = (siteContent["nav"]["nav-item-3"]);
a1[3].textContent = (siteContent["nav"]["nav-item-4"]);
a1[4].textContent = (siteContent["nav"]["nav-item-5"]);
a1[5].textContent = (siteContent["nav"]["nav-item-6"]);

let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaText1 = document.querySelector("h1");
ctaText1.innerHTML = (siteContent["cta"]["h1"]);

let button1 = document.querySelector("button");
button1.innerHTML = (siteContent["cta"]["button"]);

let headerImage1 = document.querySelector("#cta-img");
headerImage1.setAttribute('src', siteContent["cta"]["img-src"]);

let H41 = document.getElementsByTagName("h4");
H41[0].textContent = (siteContent["main-content"]["features-h4"]);
H41[1].textContent = (siteContent["main-content"]["about-h4"]);

let p1 = document.getElementsByTagName("p");
p1[0].textContent = (siteContent["main-content"]["features-content"]);
p1[1].textContent = (siteContent["main-content"]["about-content"]);

let midPageImage1 = document.querySelector("#middle-img");
midPageImage1.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

H41[2].textContent = (siteContent["main-content"]["services-h4"]);
H41[3].textContent = (siteContent["main-content"]["product-h4"]);
H41[4].textContent = (siteContent["main-content"]["vision-h4"]);

p1[2].textContent = (siteContent["main-content"]["services-content"]);
p1[3].textContent = (siteContent["main-content"]["product-content"]);
p1[4].textContent = (siteContent["main-content"]["vision-content"]);

H41[5].textContent = (siteContent["contact"]["contact-h4"]);

p1[5].textContent = (siteContent["contact"]["address"]);
p1[6].textContent = (siteContent["contact"]["phone"]);
p1[7].textContent = (siteContent["contact"]["email"]);

p1[8].textContent = (siteContent["footer"]["copyright"]);