// Track number of custom fields added
let customFieldCount = 0;

// Function to add custom field
function addCustomField() {
    if (customFieldCount >= 3) {
        alert('You can add up to 3 custom fields only.');
        return;
    }

    // Create a new div for the custom field
    const customFieldContainer = document.createElement('div');
    customFieldContainer.classList.add('custom-field');

    // Create a label for the custom field
    const customFieldLabel = document.createElement('label');
    customFieldLabel.innerText = 'Custom Field Name:';
    customFieldContainer.appendChild(customFieldLabel);

    // Create an input for the custom field name
    const customFieldInput = document.createElement('input');
    customFieldInput.type = 'text';
    customFieldInput.placeholder = 'Enter the custom field name';
    customFieldInput.required = true;
    customFieldContainer.appendChild(customFieldInput);

    // Create a textarea for the custom field value
    const customFieldValue = document.createElement('textarea');
    customFieldValue.placeholder = 'Enter custom field value here...';
    customFieldValue.required = true;
    customFieldContainer.appendChild(customFieldValue);

    // Create a remove button for the custom field
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('remove-field');
    removeButton.innerText = 'Remove';
    removeButton.onclick = function () {
        customFieldContainer.remove();
        customFieldCount--; // Decrease the count when a custom field is removed
    };
    customFieldContainer.appendChild(removeButton);

    // Add the custom field container before the "Add Custom Field" button
    const formContainer = document.getElementById('signLanguageForm');
    const addButton = document.querySelector('button[type="button"]'); // Select the "Add Custom Field" button
    formContainer.insertBefore(customFieldContainer, addButton);

    // Increment the custom field count
    customFieldCount++;
}

// Function to validate form fields
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
        if (!field.value.trim()) {
            field.classList.add('flash-red');
            isValid = false;
        } else {
            field.classList.remove('flash-red');
        }
    });

    if (!isValid) {
        const formFeedback = document.getElementById('formFeedback');
        formFeedback.textContent = 'Please fill out all required fields.';
    }

    return isValid;
}
