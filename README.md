# 3800-UI-DemoSite
repo contains simple html/javascript site to demo proposed ui changes for 3800 project aslteamhub

1. Required Fields and Form Validation
   - Required Fields: The form now marks required and ensures that they must be filled out before submission.
   - Custom Feedback: Upon submitting the form, feedback is shown if any required fields are left unfilled.


2. New Fields Added to Form
   - Description of Sign:
     - Purpose: To describe the specific gesture, handshape, movement, and context of the ASL sign.
     - Field Type: Long text input (textarea).
   - Picture:
     - Purpose: To provide a visual representation of the sign (using an external image link).
     - Field Type: URL input (for linking to images hosted on external websites like Flickr).
   - User Notes:
     - Purpose: Allows the person submitting the word to add any special instructions, challenges, or observations about the sign.
     - Field Type: Text area.


3. Dynamic Custom Fields
   - Custom Field Addition: Users can add custom fields to the form by clicking an "Add Custom Field" button.
   - Dynamic Fields: Custom fields can be created with a label and value input (e.g., text or textarea).
   - Field Removal: Each custom field has a "Remove" button, allowing users to delete it.
   - Field Name: Users can enter a name for each custom field before it is created.

4. Improved UI and Layout
   - Responsive Design: The form is fully responsive, meaning it adjusts automatically to different screen sizes, from mobile to desktop.
   - Flexibility for Customization: Users can add as many custom fields as needed, and the form layout adapts to ensure smooth user interaction on any device.
   - UI Enhancements: Visual improvements have been made to enhance user feedback and interaction.

5. User Feedback on Missing Fields
   - Real-time Field Validation: When users click "Submit", any unfilled required fields flash red, providing immediate feedback on missing fields.
   - Submission Feedback: When the form is submitted with missing required fields, a message will notify users to fill out all required fields.

