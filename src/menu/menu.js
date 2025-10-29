import croquetasImage from "./images/croqueta.jpeg";
import churrosImage from "./images/churros.jpg";
import gambasImage from "./images/gambas.jpg";
import gazpachoImage from "./images/gazpacho.jpg";
import paellaImage from "./images/paella-valenciana.jpg";
import patatasBravasImage from "./images/patatas-bravas.jpg";
import pulpoImage from "./images/pulpo.jpg";
import spanishTortillaImage from "./images/spanish-tortilla.jpg";

let menuImages = [
    paellaImage,
    spanishTortillaImage,
    patatasBravasImage,
    gambasImage,
    croquetasImage,
    gazpachoImage,
    pulpoImage,
    churrosImage,
];

class MenuItem {
    #name;
    #description;
    #price;

    constructor(name, description, price) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
    }

    getName() {
        return this.#name;
    }
    getDescription() {
        return this.#description;
    }
    getPrice() {
        return this.#price;
    }
}

let menuItems = [
    new MenuItem(
        "Paella Valenciana",
        "Traditional rice dish with saffron, chicken, rabbit, and seasonal vegetables (can be made seafood-style).",
        18.5
    ),
    new MenuItem(
        "Tortilla Española",
        "Classic Spanish omelette with potatoes and onions, served warm or at room temperature.",
        7.0
    ),
    new MenuItem(
        "Patatas Bravas",
        "Crispy potatoes served with a spicy tomato-brava sauce and alioli.",
        6.5
    ),
    new MenuItem(
        "Gambas al Ajillo",
        "Sizzling garlic prawns cooked in olive oil with a hint of chili and fresh parsley.",
        12.0
    ),
    new MenuItem(
        "Croquetas de Jamón",
        "Creamy ham croquettes, breaded and fried until golden — a popular tapa.",
        8.0
    ),
    new MenuItem(
        "Gazpacho",
        "Refreshing chilled tomato and vegetable soup — perfect for warm days.",
        6.0
    ),
    new MenuItem(
        "Pulpo a la Gallega",
        "Galician-style octopus with smoked paprika, olive oil and potatoes.",
        14.0
    ),
    new MenuItem(
        "Churros con Chocolate",
        "Fried-dough pastry dusted with sugar and served with thick hot chocolate for dipping.",
        5.5
    ),
];

export default function menu() {
    // Create title
    const title = document.createElement("h2");
    title.textContent = "Our Menu";
    title.classList.add("menu-title");

    //Create menu section
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuItems.forEach((item, index) => {
        // Card title
        const itemName = document.createElement("h3");
        itemName.textContent = item.getName();

        // Image
        const itemImage = document.createElement("img");
        itemImage.src = menuImages[index];
        itemImage.alt = item.getName();
        itemImage.classList.add("menu-image");

        // Card description
        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.getDescription();

        // Price
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `€${item.getPrice()}`;

        // Info div
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("menu-info");
        itemInfo.appendChild(itemDescription);
        itemInfo.appendChild(itemPrice);

        // Card div
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-card");

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemInfo);

        menuContainer.appendChild(itemDiv);
    });

    const menuSection = document.createElement("div");
    menuSection.appendChild(title);
    menuSection.appendChild(menuContainer);

    return menuSection;
}
