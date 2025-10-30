import "./styles.css";
import "./home/home.css";
import "./contact/contact.css";
import "./menu/menu.css";

import home from "./home/home.js";
import contact from "./contact/contact.js";
import menu from "./menu/menu.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

// Initial load
content.appendChild(home());

// Navigation setup for contact
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(contact());
    contactBtn.classList.add("button-active");
    menuBtn.classList.remove("button-active");
    homeBtn.classList.remove("button-active");
});

// Navigation setup for home
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home());
    homeBtn.classList.add("button-active");
    menuBtn.classList.remove("button-active");
    contactBtn.classList.remove("button-active");
});

// Navigation setup for menu
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu());
    menuBtn.classList.add("button-active");
    homeBtn.classList.remove("button-active");
    contactBtn.classList.remove("button-active");
});
