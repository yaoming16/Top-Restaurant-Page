export default function loadContact() {
    // Create contact container
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Create heading
    const heading = document.createElement('h2');
    heading.classList.add('form-h2');
    heading.textContent = 'Send us your feedback';
    contactContainer.appendChild(heading);

    // Create form
    const form = document.createElement('form');
    form.id = 'feedback-form';
    form.classList.add('feedback-form');

    // Name field
    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);

    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.required = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);

    // Message field
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.rows = 4;
    messageTextarea.placeholder = 'Your message';
    messageTextarea.required = true;
    form.appendChild(messageTextarea);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Append form to contact container
    contactContainer.appendChild(form);

    return contactContainer;
}


// HTML Structure Reference i used, the idea for the project was to create everything using javascript DOM manipulation:
/*<div class="contact-container">
    <h2 class="form-h2">Send us your feedback</h2>
    <form id="feedback-form" class="feedback-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Name" required />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <textarea
            id="message"
            rows="4"
            placeholder="Your message"
            required
        ></textarea>
        <button type="submit">Submit</button>
    </form>
</div>*/