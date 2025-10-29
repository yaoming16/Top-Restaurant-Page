import "./styles.css";
import "./home/home.css";
import "./contact/contact.css";
import "./about/about.css";
import "./menu/menu.css";

import home from "./home/home.js";
import contact from "./contact/contact.js";
import about from "./about/about.js";
import menu from "./menu/menu.js";

// Initial load
const content = document.getElementById("content");
content.appendChild(home());

// Navigation setup for contact
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contact());
});

// Navigation setup for home
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home());
});

// Navigation setup for about
const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(about());
});

// Navigation setup for menu
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu());
});
