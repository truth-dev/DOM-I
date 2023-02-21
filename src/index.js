const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')



const logImg = document.querySelector("#logo-img");
logImg.src = siteContent.images['logo-img'];
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images['cta-img'];
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent.images["accent-img"]);

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');

const contact = document.querySelector('section.contact');
//contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.children[1].textContent= siteContent.contact['address'];
contact.children[2].textContent = siteContent.contact['phone'];
contact.children[3].textContent = siteContent.contact['email'];

//my practice 

// const cta = document.querySelector('.cta');
// cta.querySelector('h1').textContent = siteContent.cta['h1']
// cta. querySelector('button').textContent = siteContent.cta['button']

document.querySelector('.cta .cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta .cta-text button').textContent =siteContent.cta.button;


//my practice 
//
// const nav = document.querySelector('nav');
// nav.children[0].textContent= siteContent.nav['nav-item-1'];
// nav.children[1].textContent= siteContent.nav['nav-item-2'];
// nav.children[2].textContent= siteContent.nav['nav-item-3'];
// nav.children[3].textContent= siteContent.nav['nav-item-4'];
// nav.children[4].textContent= siteContent.nav['nav-item-5'];
// nav.children[5].textContent= siteContent.nav['nav-item-6'];
// nav.classList.add('italic');

const navLin = document.querySelectorAll('header nav a');
const navLinText = Object.values(siteContent.nav)
navLin.forEach((link, idx) => {
  link.textContent = navLinText[idx];
  link.classList.add('italic');
})

const topCon = document.querySelector('.top-content');
topCon.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topCon.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topCon.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topCon.children[1].children[1].textContent = siteContent['main-content']['about-content'];

const bottomCon = document.querySelector('.bottom-content');
const h4sBottom = bottomCon.querySelectorAll('h4');
h4sBottom[0].textContent = siteContent['main-content']['services-h4'];
h4sBottom[1].textContent = siteContent['main-content']['product-h4'];
h4sBottom[2].textContent = siteContent['main-content']['vision-h4'];
const pBottom = bottomCon.querySelectorAll('p');
pBottom[0].textContent = siteContent['main-content']['services-content'];
pBottom[1].textContent = siteContent['main-content']['product-content'];
pBottom[2].textContent = siteContent['main-content']['vision-content'];


