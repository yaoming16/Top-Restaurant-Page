import mainImage from './images/restaurant.jpg';
import foodJPG from './images/food.jpg';

export default function home() {
    // Main image section
    const mainImageDiv = document.createElement('div');
    mainImageDiv.classList.add('main-image-div');

    const restaurantImage = document.createElement('img');
    restaurantImage.src = mainImage;
    restaurantImage.alt = 'Restaurant Image';
    restaurantImage.classList.add('restaurant-image');

    const tagline = document.createElement('p');
    tagline.textContent = 'Where Spanish tradition meets global innovation';

    mainImageDiv.appendChild(restaurantImage);
    mainImageDiv.appendChild(tagline);

    // Info section
    const infoSection = document.createElement('div');
    infoSection.classList.add('info-section');

    // Restaurant description
    const restaurantDescription = document.createElement('div');
    restaurantDescription.classList.add('restaurant-description');

    const infoHeading = document.createElement('h2');
    infoHeading.textContent = 'Experience Casa Serena, modern spanish food';

    const infoTagline = document.createElement('p');
    infoTagline.textContent = 'Where Spanish tradition meets global innovation';

    const mainDescription = document.createElement('p');
    mainDescription.textContent = 'Experience the finest Spanish cuisine with a modern twist in the heart of Barcelona. Our chefs blend traditional recipes with international flavors to create an unforgettable dining experience.';
    
    const location = document.createElement('p');
    location.textContent = 'Barcelona City Center';

    restaurantDescription.appendChild(infoHeading);
    restaurantDescription.appendChild(infoTagline);
    restaurantDescription.appendChild(mainDescription);
    restaurantDescription.appendChild(location);

    // Food image
    const foodImage = document.createElement('img');
    foodImage.src = foodJPG;
    foodImage.alt = 'An example of our cuisine';
    foodImage.classList.add('food-image');

    infoSection.appendChild(restaurantDescription);
    infoSection.appendChild(foodImage);

    // Combine all sections
    const homeContainer = document.createElement('div');
    homeContainer.appendChild(mainImageDiv);
    homeContainer.appendChild(infoSection);

    return homeContainer;
}

// HTML Structure Reference i used, the idea for the project was to create everything using javascript
/*<div>
    <div class="main-image-div">
        <img src="./images/restaurant.jpg" alt="Restaurant Image" class="restaurant-image">
        <p >Where Spanish tradition meets global innovation</p>
    </div>
    <div class="info-section">
        <div class="restaurant-description">
            <h2>Experience Casa Serena, modern spanish food</h2>
            <p>Where Spanish tradition meets global innovation</p>
            <p>Experience the finest Spanish cuisine with a modern twist in the heart of Barcelona. Our chefs blend traditional recipes with international flavors to create an unforgettable dining experience.</p>
            <p>Barcelona City Center</p>        
        </div>
        <img src="./images/food.jpg" alt="An example of our cuisine" class="food-image">
    </div>
</div> */